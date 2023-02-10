import Layout from "antd/es/layout/layout";
import React from "react";
import Sidebar from "../components/Sidebar";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { BsFillBellFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import ApplyDoctor from "./ApplyDoctor";
import { Avatar, Badge, Space } from "antd";
const HomePage = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate()
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
                <div className="main_body">{children}</div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomePage;
