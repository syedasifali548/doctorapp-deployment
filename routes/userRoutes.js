const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController
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
module.exports = router;