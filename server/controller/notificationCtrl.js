const User = require("../models/userModel");
const Appointment = require("../models/appointmentModel");
const Doctor = require("../models/doctorModel");
const Specialization = require("../models/specializationModel");
const Announcement = require("../models/announcementModel");
const History = require("../models/historyModel");

const asyncHandler = require("express-async-handler");
const { generateToken } = require("../config/jwtToken");
const validateMongoDbId = require("../utils/validateMongodbId");
const { generateRefreshToken } = require("../config/refreshtoken");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const sendEmail = require("./emailCtrl");
const moment = require("moment");

const markNotificationsSeen = asyncHandler(async (req, res) => {
    try {
      const user = await User.findOne({ _id: req.body.userId });
      const unseenNotifications = user?.unseenNotifications;
      const seenNotifications = user?.seenNotifications;
      seenNotifications.push(...unseenNotifications);
      user.unseenNotifications = [];
      user.seenNotifications = seenNotifications;
      const updatedUser = await user.save();
      updatedUser.password = undefined;
      res.status(200).send({
        success: true,
        message: "All notifications marked as seen",
        data: updatedUser,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: "Error marking notifications",
        success: false,
        error,
      });
    }
  })
  
  const deleteNotificationsSeen = asyncHandler(async (req, res) => {
    try {
      const user = await User.findOne({ _id: req.body.userId });
      user.seenNotifications = [];
      user.unseenNotifications = [];
      const updatedUser = await user.save();
      updatedUser.password = undefined;
      res.status(200).send({
        success: true,
        message: "All notifications deleted",
        data: updatedUser,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: "Error deleting notifications",
        success: false,
        error,
      });
    }
  })

  module.exports = {
    markNotificationsSeen,
    deleteNotificationsSeen
  };
