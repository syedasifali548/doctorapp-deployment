const express = require('express')
const { getDoctorInfoController,updateProfileController,getDoctorByIdController,doctorAppointmentsController,updateStatusController } = require('../controllers/doctorCtrl')
const authMiddleware = require('../middlewares/authMiddleware')
const router = express.Router()


// To Post single doctor info
router.post('/getDoctorInfo',authMiddleware,getDoctorInfoController)
router.post('/updateProfile',authMiddleware,updateProfileController)
router.post('/getDoctorById',authMiddleware,getDoctorByIdController)

router.post('/update-status',authMiddleware,updateStatusController)

router.get('/doctor-appointments',authMiddleware,doctorAppointmentsController)


module.exports = router