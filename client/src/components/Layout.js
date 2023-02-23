import React, { useState,useEffect } from "react";
import Sidebar from "./Sidebar";
import { Container, Row, Col } from "react-bootstrap";
import DoctorList from "./DoctorList";
import { useSelector } from "react-redux";
import { BsFillBellFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
// import ApplyDoctor from "./ApplyDoctor";
import { Badge } from "antd";
import  axios  from 'axios';


const Layout = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate()
  const [doctors, setDoctors] = useState([]);
  // login user data
  // const getUserData = async () => {
  //   try {
  //     const res = await axios.get(
  //       "/api/users/getAllDoctors",

  //       {
  //         headers: {
  //           Authorization: "Bearer " + localStorage.getItem("token"),
  //         },
  //       }
  //     );
  //     if (res.data.success) {
  //       setDoctors(res.data.data);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getUserData();
  // }, []);

  return (

    <section>
      <Container fluid>
        <Row>
          <Col md={3}>
            <Sidebar />
          </Col>
          <Col md={9}>
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
              <div className="body">{children}</div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Layout;
