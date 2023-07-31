
const User = require("../models/userModel");
const Doctor = require("../models/doctorModel");
const Appointment = require("../models/appointmentModel");

const asyncHandler = require("express-async-handler");
const { generateToken } = require("../config/jwtToken");
const validateMongoDbId = require("../utils/validateMongodbId");
const { generateRefreshToken } = require("../config/refreshtoken");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const sendEmail = require("./emailCtrl");


// Get doctor by id

const getDoctorDetailsByID = asyncHandler(async (req, res) => {
    try {
        const doctor = await Doctor.findOne({ _id: req.body.doctorId });
        res.status(200).send({
          success: true,
          message: "Doctor info fetched successfully",
          data: doctor,
        });
      } catch (error) {
        res
          .status(500)
          .send({ message: "Error getting doctor info", success: false, error });
      }
});

const getNewsByID = asyncHandler(async (req, res) => {
  console.log(req.body)
  try {
      const doctor = await Appointment.findOne({ _id: req.body.doctorId });
      res.status(200).send({
        success: true,
        message: "Doctor info fetched successfully",
        data: doctor,
      });
    } catch (error) {
      res
        .status(500)
        .send({ message: "Error getting doctor info", success: false, error });
    }
});


const getAppointmentsByDocID = asyncHandler(async (req, res) => {
    try {
        const doctor = await Doctor.findOne({});
        const appointments = await Appointment.find({ doctorId: doctor._id });
        res.status(200).send({
          message: "Appointments fetched successfully",
          success: true,
          data: appointments,
        });
      } catch (error) {
        console.log(error);
        res.status(500).send({
          message: "Error fetching appointments",
          success: false,
          error,
        });
      }
});

const changeAppointmentStatus = asyncHandler(async (req, res) => {
    try {
        const { appointmentId, status } = req.body;
        const appointment = await Appointment.findByIdAndUpdate(appointmentId, {
          status,
        });
    
        const user = await User.findOne({ _id: appointment.userId });
        const unseenNotifications = user.unseenNotifications;
        unseenNotifications.push({
          type: "appointment-status-changed",
          message: `Your appointment status has been ${status}`,
          onClickPath: "/appointments",
        });
    
        await user.save();
    
        res.status(200).send({
          message: "Appointment status updated successfully",
          success: true
        });
      } catch (error) {
        console.log(error);
        res.status(500).send({
          message: "Error changing appointment status",
          success: false,
          error,
        });
      }
});

const getDoctorInfoByUserID = asyncHandler(async (req, res) => {
    try {
      console.log(req.body.userId)
        const doctor = await Doctor.findOne({ userId: req.body.userId });
        res.status(200).send({
          success: true,
          message: "Doctor info fetched successfully",
          data: doctor,
        });
      } catch (error) {
        res
          .status(500)
          .send({ message: "Error getting doctor info", success: false, error });
      }
});

const updateDoctorProfile = asyncHandler(async (req, res) => {
    try {
        const doctor = await Doctor.findOneAndUpdate(
          { userId: req.body.userId },
          req.body
        );
        res.status(200).send({
          success: true,
          message: "Doctor profile updated successfully",
          data: doctor,
        });
      } catch (error) {
        res
          .status(500)
          .send({ message: "Error getting doctor info", success: false, error });
      }
});

const addNotes = asyncHandler(async (req, res) => {
  try {
    console.log(req.body);
    const appointment = await Appointment.findByIdAndUpdate(req.body.id, {
      doctornotes:req.body.data.notes
    });
    res.status(200).send({
      message: "Appointment status updated successfully",
      success: true
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error changing appointment status",
      success: false,
      error,
    });
  }
})

const addLink = asyncHandler(async (req, res) => {
  try {
    console.log(req.body);
    const appointment = await Appointment.findByIdAndUpdate(req.body.id, {
      link:req.body.data.link
    });
    res.status(200).send({
      message: "Appointment status updated successfully",
      success: true
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error changing appointment status",
      success: false,
      error,
    });
  }
})

const updateNotes = asyncHandler(async (req, res) => {
  try {
    const {data} = req.body;
    console.log(data);
    const appointment = await Appointment.findByIdAndUpdate(data.id, {
      doctornotes:data.data.doctornotes
    });
    res.status(200).send({
      message: "Appointment status updated successfully",
      success: true
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error changing appointment status",
      success: false,
      error,
    });
  }
})

module.exports = {
    getDoctorDetailsByID,
    getAppointmentsByDocID,
    changeAppointmentStatus,
    getDoctorInfoByUserID,
    updateDoctorProfile,
    getNewsByID,
    addNotes,
    addLink,
    updateNotes
};