const express = require("express");
const {
 getDoctor,
 getUsers,
 changeDoctorStatus,
 changeUserStatus,
 addNews,
 getNews,
 updateNews
} = require("../controller/adminCtrl");

const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/get-all-doctors", getDoctor);
router.get("/get-all-users", getUsers);
router.get("/get-all-news", getNews);
router.post("/change-doctor-account-status", changeDoctorStatus);
router.post("/change-user-account-status", changeUserStatus);
router.post("/add-news", addNews);
router.post("/update-news", updateNews);

module.exports = router;
