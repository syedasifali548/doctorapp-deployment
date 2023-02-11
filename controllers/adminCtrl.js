const doctorModel = require("../models/doctorModel");
const userModels = require("../models/userModels");

// Get all users
const getAllUsersController= async(req,res)=>{
    try{
        const users = await userModels.find({})
        res.status(200).send({
            message:"Got all users data list",
            success:true,
            data:users
        })
    }
    catch(error){
        console.log(error)
        res.status(500).send({
            message:"Getting error while fetching users",
            success:false,
            error
        })
    }
}
// Get all doctors
const getAllDoctorsController=async(req,res)=>{
    try{
        const doctors = await doctorModel.find({})
        res.status(200).send({
            message:"Got all doctors list",
            success:true,
            data:doctors
        })
    }
    catch(error){
        console.log(error)
        res.status(500).send({
            message:"Getting errors while fetching doctors",
            success:false,

        })
    }
}

const changeAccountStatusController= async(req,res)=>{
    try{
        const{doctorId,status} = req.body;
        const doctor = await doctorModel.findByIdAndUpdate(doctorId,{status})
        const user = await userModels.findOne({_id:doctor.userId}) 
        const notification = user.notification;
        notification.push({
            type:"doctor-account-request-updated",
            message:`Your doctor account request has ${status}`,
            onClickPath:"/notification",
        });
        user.isDoctor = status === 'approved' ? true : false;
        await user.save()
        res.status(201).send({
            message:"Account status updated",
            success:true,
            data:doctor
        })
    }
    catch(error){
        console.log(error);
        res.status(500).send({
            message:"Error occoured while updating account status",
            success:false,
            error
        })
    }
}


module.exports ={getAllUsersController,getAllDoctorsController,changeAccountStatusController}