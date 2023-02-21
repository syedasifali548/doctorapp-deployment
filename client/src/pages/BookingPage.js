import React,{useState} from 'react'
import Layout from '../components/Layout'
import axios from 'axios';
import { DatePicker, message, TimePicker } from "antd";
import moment from "moment";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { hideLoading, showLoading } from '../redux/features/alertSlice';
import { toast } from 'react-toastify';


const BookingPage = () => {
   const [doctors,setDoctors] = useState([])
   const [date,setDate] = useState("")
   const [time,setTime] = useState("")
   const [isAvailable,setIsAvailable] = useState()
   const params = useParams()
   const dispatch = useDispatch()
   const {user} = useSelector((state)=>state.user)


   const getUserData =async()=>{
     try{
      const res = await axios.post('/api/doctor/getDoctorById',
      {doctorId:params.doctorId},
      {
        headers:{
          Authorization: "Bearer " + localStorage.getItem("token"),
        }
      }
      )
      if(res.data.success){
        setDoctors(res.data.data)
      }
     }
     catch(error){
       console.log(error)
      }
    }

    //book an Appointemnt 
    const handleBooking = async () => {
      try {
        setIsAvailable(true);
        if(!date && !time){
          return alert("Date and time required!")
        }
        dispatch(showLoading());
        const res = await axios.post(
          "/api/users/book-appointment",
          {
            doctorId: params.doctorId,
            userId: user._id,
            doctorInfo: doctors,
            userInfo: user,
            date: date,
            time: time,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        dispatch(hideLoading());
        if (res.data.success) {
          message.success(res.data.message);
        }
      } catch (error) {
        dispatch(hideLoading());
        console.log(error);
      }
    };


  // Booking Availibility
  const handleAvailability = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/users/booking-availability",
        { doctorId: params.doctorId, date, time },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        setIsAvailable(true);
        console.log(isAvailable);
        message.success(res.data.message);
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
    }
  };





  useEffect(()=>{
getUserData()
  },[])

  return (
    <Layout>
      <Row>
        <Col>
        <h3 className='text-center mt-2'>Booking page</h3>
        </Col>
        <Col md={6}>
          {doctors&& (
         <div className="doctor_list_wrapper">
          
          <div className="doctor_list_header">
            <h3>Dr:{doctors?.firstName} {doctors?.lastName}</h3>
          </div>
          <div className="doctor_list_body">
          <Row>
            <Col md={5}>
              <h5>Fee:</h5>
            </Col>
            <Col md={7}>
              <p>{doctors?.feesPerCunsaltation}</p>
            </Col>
            <Col md={5}>
              <h5>Timings:</h5>
            </Col>
            <Col md={7}>
              <p>{doctors?.timings && doctors?.timings[0]}-{""}
              {doctors?.timings && doctors?.timings[1]}
              </p>
            </Col>
           <Col md={5}>
           <DatePicker
                className="m-2"
                format="DD-MM-YYYY"
                onChange={(value) =>
                  setDate(moment(value).format("DD-MM-YYYY"))
                }
              />
               </Col>
               <Col md={7}>
               <TimePicker
                format="HH:mm"
                className="m-2"
                onChange={(value) => {
                  setTime(moment(value).format("HH:mm"));
                }}
              />
               </Col>
            <Col md={5}>
            <button className="btn btn-primary mt-4"
            onClick={handleAvailability}
            >
                Check Availability
              </button>
            </Col>
            <Col md={7}>
            <button className="btn btn-dark mt-4"
            onClick={handleBooking}
            >
                Book Now
              </button>
            </Col>
          </Row>
          </div>
         </div>

          )}

    </Col>
      </Row>

    </Layout>
  )
}

export default BookingPage