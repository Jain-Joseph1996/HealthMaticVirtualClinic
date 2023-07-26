const User = require("../models/userModel");
const Doctor = require("../models/doctorModel");
const Announcement = require("../models/announcementModel")


const asyncHandler = require("express-async-handler");
const { generateToken } = require("../config/jwtToken");
const validateMongoDbId = require("../utils/validateMongodbId");
const { generateRefreshToken } = require("../config/refreshtoken");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const sendEmail = require("./emailCtrl");
const redisClient = require("../config/redis")


const getDoctor = asyncHandler(async (req, res) => {
  try {
    const doctors = await Doctor.find({});
    console.log(doctors)
    res.json(doctors);
  } catch (error) {
    throw new Error(error);
  }
});

const getUsers = asyncHandler(async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send({
      message: "Users fetched successfully",
      success: true,
      data: users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error applying doctor account",
      success: false,
      error,
    });
  }
});

const getNews = asyncHandler(async (req, res) => {
  try {

    redisClient.get('news', async (err, cachedNews) => {
      if (cachedNews) {
        // If the news data is available in the cache, return it
        const news = JSON.parse(cachedNews);
        console.log("News from cache");
        res.status(200).send({
          message: 'News fetched from cache',
          success: true,
          data: news,
        });
      } else {
        // If the news data is not available in the cache, retrieve it from the database
        const news = await Announcement.find({});
        // Store the news data in Redis for future use
        redisClient.set('news', JSON.stringify(news));
        console.log("News from db");
        res.status(200).send({
          message: 'News fetched from DB successfully',
          success: true,
          data: news,
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error getting news",
      success: false,
      error,
    });
  }
});

// const getNews = asyncHandler(async (req, res) => {
//   try {
//     const news = await Announcement.find({});
//     res.status(200).send({
//       message: 'News fetched successfully',
//       success: true,
//       data: news,
//     });
//   }
//   catch (error) {
//     console.log(error);
//     res.status(500).send({
//       message: "Error getting news",
//       success: false,
//       error,
//     });
//   }
// });

const addNews = asyncHandler(async (req, res) => {
  console.log(req.body);
  try {
    const newdata = new Announcement({
      title: req?.body?.title,
      content: req?.body?.content
    });
    await newdata.save();
    res.status(200).send({
      message: "Data saved successfully",
      success: true,
      data: newdata,
    });
  }
  catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error adding news",
      success: false,
      error,
    });
  }
})

const updateNews = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { newsId, status } = req.body;
  try {
    const news = await Announcement.findOneAndUpdate(
      {
        newsId: req?.body?.newsId,
        title: req?.body?.title,
        content: req?.body?.content
      }
    );
    res.status(200).send({
      success: true,
      message: "News updated successfully",
      data: news,
    });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error getting news info", success: false, error });
  }
})

const changeDoctorStatus = asyncHandler(async (req, res) => {
  try {
    const { doctorId, status } = req.body;
    const doctor = await Doctor.findByIdAndUpdate(doctorId, {
      status,
    });

    const user = await User.findOne({ _id: doctor.userId });
    const unseenNotifications = user.unseenNotifications;
    unseenNotifications.push({
      type: "new-doctor-request-changed",
      message: `Your doctor account has been ${status}`,
      onClickPath: "/notifications",
    });
    user.role = status === "approved" ? "doctor" : "patient";
    console.log(user.role);
    await user.save();

    res.status(200).send({
      message: "Doctor status updated successfully",
      success: true,
      data: doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error applying doctor account",
      success: false,
      error,
    });
  }
}
);

const changeUserStatus = asyncHandler(async (req, res) => {
  try {
    const { userId, status } = req.body;
    const user = await User.findByIdAndUpdate(userId, {
      status,
    });
    const unseenNotifications = user.unseenNotifications;
    unseenNotifications.push({
      type: "new-doctor-request-changed",
      message: `Your doctor account has been ${status}`,
      onClickPath: "/notifications",
    });
    user.role = status === "approved" ? "doctor" : "patient";
    console.log(user.role);
    await user.save();

    res.status(200).send({
      message: "Doctor status updated successfully",
      success: true,
      data: doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error applying doctor account",
      success: false,
      error,
    });
  }
}
);

module.exports = {
  getDoctor,
  getUsers,
  changeDoctorStatus,
  changeUserStatus,
  addNews,
  getNews,
  updateNews
};
