const express = require("express");
const {
getDoctorDetailsByID,
getAppointmentsByDocID,
changeAppointmentStatus,
getDoctorInfoByUserID,
updateDoctorProfile
} = require("../controller/doctorCtrl");

const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/get-doctor-info-by-id", getDoctorDetailsByID);

router.get("/get-appointments-by-doctor-id", getAppointmentsByDocID);

router.post("/change-appointment-status", changeAppointmentStatus);

router.post("/get-doctor-info-by-user-id", getDoctorInfoByUserID);

router.post("/update-doctor-profile", updateDoctorProfile);

module.exports = router;
