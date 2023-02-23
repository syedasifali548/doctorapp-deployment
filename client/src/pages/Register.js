// import { useState, useEffect } from 'react'
import "../styles/RegiserStyles.css";
import { Form, Input, message } from "antd";
// import { FaUser } from 'react-icons/fa'
import { useNavigate,Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '../redux/features/alertSlice';
// import { message } from 'antd';
import { toast } from 'react-toastify';
import axios from "axios";

function Register() {
const navigate = useNavigate()
const dispatch = useDispatch()

const onfinishHandler= async(values)=>{
  try {
     dispatch(showLoading())
     const res = await axios.post('/api/users/register',values)
     dispatch(hideLoading())
     if(res.data.success){
      message.success("Registered Successfully!")
      navigate('/login')
     }
     else{
      message.error(res.data.message)
     }




  } catch (error) {
    dispatch(hideLoading())
    console.log(error)
    toast.error("Something Went Wrong") 
  }

}

  return (
    <>
      <div className="form-container ">
        <Form
          layout="vertical"
          onFinish={onfinishHandler}
          className="register-form"
        >
          <h3 className="text-center">Register From</h3>
          <Form.Item label="Name" name="name">
            <Input type="text" required />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <Link to="/login" className="m-2">
            Already user login here
          </Link>
          <button className="btn auth_btn" type="submit">
            Register
          </button>
        </Form>
      </div>
    </>
  )
}

export default Register