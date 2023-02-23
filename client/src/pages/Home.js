
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import DoctorList from "../components/DoctorList";
import Layout from '../components/Layout'
// import DoctorsList from "../components/DoctorList";

const Home = () => {
    const [doctors, setDoctors] = useState([]);
    // login user data
    const getUserData = async () => {
      try {
        const res = await axios.get(
          "/api/users/getAllDoctors",
  
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        if (res.data.success) {
          setDoctors(res.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getUserData();
    }, []);


    useEffect(() => {
        getUserData();
      }, []);   
  return (
    <Layout>
      <Row className="doctor_row">
        {doctors && doctors.map((doctor,index) => <DoctorList doctor={doctor} key={index}/>)}
      </Row>
    </Layout>
  )
}

export default Home