const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const {
    getAllUsersController,
    getAllDoctorsController,
    changeAccountStatusController
  } = require("../controllers/adminCtrl")

const router = express.Router()

router.get('/getAllUsers',authMiddleware,getAllUsersController)
router.post('/changeAccountStatus',authMiddleware,changeAccountStatusController)
//GET METHOD || DOCTORS
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

module.exports = router;