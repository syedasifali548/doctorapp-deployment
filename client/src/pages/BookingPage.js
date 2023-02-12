import React,{useState} from 'react'
import Layout from '../components/Layout'
import axios from 'axios';
import { DatePicker, message, TimePicker } from "antd";
import moment from "moment";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';


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
               format="HH-mm"
               onChange={(value)=>{setDate(moment(value).format("DD-MM-YYYY"))}}              
              />
               </Col>
               <Col md={7}>
                
              <TimePicker
               format="DD-MM-YYYY"
               onChange={(value)=>{setTime(moment(value).format("HH-mm"))}}              
               />              
               </Col>
            <Col md={5}>
            <button className="btn btn-primary mt-4">
                Check Availability
              </button>
            </Col>
            <Col md={7}>
            <button className="btn btn-dark mt-4">
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