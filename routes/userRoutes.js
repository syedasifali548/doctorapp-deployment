const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDocotrsController,
  bookeAppointmnetController,
  bookingAvailabilityController,
  userAppointmentsController
} = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

//router onject
const router = express.Router();

//routes
//LOGIN || POST
router.post("/login", loginController);

//REGISTER || POST
router.post("/register", registerController);
//Apply doctor || POST
router.post("/apply-doctor", applyDoctorController,authController);
//doctor get all notifications || POST
router.post("/get-all-notification",getAllNotificationController,authController);
//doctor get all notifications || POST
router.post("/delete-all-notification",deleteAllNotificationController,authController);
//Auth || POST
router.post("/getUserData", authMiddleware, authController);
//GET ALL DOCTORS
router.get("/getAllDoctors", authMiddleware, getAllDocotrsController);
//BOOK APPOINTMENT
router.post("/book-appointment", authMiddleware, bookeAppointmnetController);
//AVAILIBILITY OF DOCTORS
router.post("/booking-availability", authMiddleware, bookingAvailabilityController);
router.get("/user-appointments", authMiddleware, userAppointmentsController);

module.exports = router;
