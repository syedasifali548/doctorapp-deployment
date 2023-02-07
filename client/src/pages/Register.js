import React, { useEffect, useState } from "react";
import "../styles/RegiserStyles.css";
// import { Form, Input, message } from "antd";
// import axios from "axios";
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { register, reset } from "../redux/features/userReducer";
import Spinner from "../components/Spinner";
const Register = () => {
  const [formData , setFormData] = useState({
    name:'',
    email:'',
    password:'',
    password2: '',
  })
  const {name ,email , password , password2} = formData;
  
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const {user,isLoading,isError,isSuccess,message} = useSelector(
    (state)=>state.user
  )
  
 useEffect(()=>{
  if(isError){
    toast.error(message)
  }
  if(isSuccess){
    navigate('/login')
  }
  dispatch(reset())
},[isError,isLoading,isSuccess,message,dispatch])

if(isSuccess){
  return toast.success("User Created Successfully!")
}

 const handleChange = (e) => {
  setFormData((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
  }))
}

const submitForm=(e)=>{
  e.preventDefault();
  if(password !== password2){
    toast.error("Passsword Does not match")
  }
  else{
    const userData={
      name,email,password
    }
    dispatch(register(userData))
  }

}
if(isError){
  return <Spinner/>
}


  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className='form'>
        <form onSubmit={submitForm}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              placeholder='Enter your name'
              value={name}
              onChange={handleChange}
         
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              placeholder='Enter your email'
              value={email}
              onChange={handleChange}
         
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              placeholder='Enter password'
              value={password}
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
          <input
              type='password'
              className='form-control'
              id='password2'
              name='password2'
              value={password2}
              placeholder='Confirm password'
              onChange={handleChange}
            />
          </div>
         
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
            <Link to='/login'>Have an account?</Link>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;


  // /form handler
  // const onfinishHandler = async (values) => {
  //   try {
  //     const res = await axios.post("/api/users", values);
  //     if (res.data.success) {
  //       message.success("Register Successfully!");
  //       navigate("/");
  //     } else {
  //       message.error(res.data.message);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     message.error("Something Went Wrong");
  //   }
  // };