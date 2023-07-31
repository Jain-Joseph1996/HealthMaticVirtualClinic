const express = require("express");
const {
getDoctorDetailsByID,
getAppointmentsByDocID,
changeAppointmentStatus,
getDoctorInfoByUserID,
updateDoctorProfile,
getNewsByID,
addNotes,
addLink,
updateNotes
} = require("../controller/doctorCtrl");

const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/get-doctor-info-by-id", getDoctorDetailsByID);

router.post("/get-news-by-id", getNewsByID);

router.get("/get-appointments-by-doctor-id", getAppointmentsByDocID);

router.post("/change-appointment-status", changeAppointmentStatus);

router.post("/get-doctor-info-by-user-id", getDoctorInfoByUserID);

router.post("/update-doctor-profile", updateDoctorProfile);

router.post("/add-notes", addNotes);

router.post("/add-link", addLink);

router.post("/update-notes", updateNotes);



module.exports = router;
