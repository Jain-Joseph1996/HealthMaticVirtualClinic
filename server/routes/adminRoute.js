const express = require("express");
const {
 getDoctor,
 getUsers,
 changeDoctorStatus
} = require("../controller/adminCtrl");

const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/get-all-doctors", getDoctor);
router.get("/get-all-users", getUsers);
router.post("/change-doctor-account-status", changeDoctorStatus);

module.exports = router;
