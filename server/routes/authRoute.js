const express = require("express");
const {
  createUser,
  loginUserCtrl,
  getallUser,
  getaUser,
  deleteaUser,
  updatedUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logout,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
  loginAdmin,
  applyDoctor,
  getApprovedDoctor,
  checkAvailability,
  bookAppointment,
  getAppointments,
  updateHistory,
  getHistory,
  getUserByID

} = require("../controller/userCtrl");

const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();
router.post("/register", createUser);
router.post("/forgot-password-token", forgotPasswordToken);
router.put("/reset-password/:token", resetPassword);

router.put("/password", updatePassword);
router.post("/login", loginUserCtrl);

router.post("/apply-doctor-account", applyDoctor);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logout);
// router.get("/:id", authMiddleware, isAdmin, getaUser);

router.delete("/:id", deleteaUser);
router.put("/edit-user", authMiddleware, updatedUser);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);

router.get("/get-all-approved-doctors" , getApprovedDoctor);

// router.get("/get-all-approved-doctors" , getApprovedDoctor);

router.post("/check-booking-avilability" , checkAvailability);

router.post("/book-appointment" , bookAppointment);

router.post("/update-history" , updateHistory);

router.post("/get-history-info-by-user-id" , getHistory);

router.get("/get-appointments-by-user-id", getAppointments)

router.post("/get-user-info-by-id", getUserByID)

module.exports = router;
