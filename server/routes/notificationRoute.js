const express = require("express");
const {
  markNotificationsSeen,
  deleteNotificationsSeen,
 
} = require("../controller/notificationCtrl");

const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();


router.post("/mark-all-notifications-as-seen", authMiddleware, markNotificationsSeen);
router.post("/delete-all-notifications", authMiddleware, deleteNotificationsSeen);

module.exports = router;
