import Layout from "antd/es/layout/layout";
import React, { useState,useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { Container, Row, Col } from "react-bootstrap";
import DoctorList from "../components/DoctorList";
import { useSelector } from "react-redux";
import { BsFillBellFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
// import ApplyDoctor from "./ApplyDoctor";
import { Badge } from "antd";
import  axios  from 'axios';


const HomePage = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate()
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

  return (

    <section>
      <Container fluid>
        <Row>
          <Col md={2}>
            <Sidebar />
          </Col>
          <Col md={10}>
            <Row>
              <Col md={12}>
                <div className="topbar">
                  <div className="topbar_container">
                    <Badge count={user && user?.notification.length}
                    onClick={()=>navigate('/notification')}
                    >
                    <BsFillBellFill size={22} 
                    style={{color:'white',cursor:'pointer'}}
                    />
                    </Badge>
                    <Link to="/profile">
                      <h5>{user?.name}</h5>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col md={12}>
                <div className="main_body">
                  <h2 className="text-center p-2">Home Page</h2>
                  <Row>
                    {doctors?.map((doctor)=><DoctorList doctor={doctor}/>)}
                  </Row>
                  {children}</div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomePage;
