import Layout from "antd/es/layout/layout";
import React from "react";
import Sidebar from "../components/Sidebar";
import { Container,Row,Col} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import {BsFillBellFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';

const HomePage = () => {
  const {user} = useSelector(state=>state.user)
  return (
  <section>
    <Container fluid>
      <Row>
        <Col md={3}>
    <Sidebar/>
        </Col>
        <Col md={9}>
          <Row>
            <Col md={12}>
              <div className="topbar">
              <div className="topbar_container">
                <BsFillBellFill size={22}/>
                <Link to='/profile'>
                <h5>{user?.name}</h5>
                </Link>
              </div>
              </div>
            </Col>
            <Col md={12}>
              <div className="main_body">
             main body

              </div>
            </Col>
          </Row>
        </Col>
      </Row>

    </Container>
  </section>
  );
};

export default HomePage;
