const User = require("../models/userModel");
const Doctor = require("../models/doctorModel");


const asyncHandler = require("express-async-handler");
const { generateToken } = require("../config/jwtToken");
const validateMongoDbId = require("../utils/validateMongodbId");
const { generateRefreshToken } = require("../config/refreshtoken");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const sendEmail = require("./emailCtrl");


// Get all doctors

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
        user.role = status === "approved" ? "doctor":"patient";
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
    changeDoctorStatus
};
