import React from 'react'
// import HomePage from './Layout'
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const DoctorList = ({doctor}) => {
  const navigate = useNavigate()
  return (
    <>
    <Col md={6}>
         <div className="doctor_list_wrapper"
         onClick={()=>navigate(`/doctor/book-appointment/${doctor._id}`)}
         >
          <div className="doctor_list_header">
            <h3>Dr:{doctor?.firstName} {doctor?.lastName}</h3>
          </div>
          <div className="doctor_list_body">
          <Row>
            <Col md={5}>
              <h5>Email:</h5>
            </Col>
            <Col md={7}>
              <p>{doctor?.email}</p>
            </Col>
            <Col md={5}>
              <h5>Phone:</h5>
            </Col>
            <Col md={7}>
            <p>{doctor?.phone}</p>
            </Col>
            <Col md={5}>
              <h5>Experience:</h5>
            </Col>
            <Col md={7}>
            <p>{doctor?.experience}</p>
            </Col>
            <Col md={5}>
            <h5>Specialization:</h5>
            </Col>
            <Col md={7}>
            <p>{doctor?.specialization}</p>
            </Col>
            <Col md={5}>
              <h5>Timings:</h5>
            </Col>
            <Col md={7}>
            <p>{doctor?.timings[0]}-{doctor?.timings[1]}</p>
            </Col>
            <Col md={5}>
              <h5>Fee:</h5>
            </Col>
            <Col md={7}>
            <p>{doctor?.feesPerCunsaltation}</p>
            </Col>
      
          </Row>
         
            {/* <div className="docto_list_item">
            </div> */}
          </div>
         </div>

    </Col>
    </>
  )
}

export default DoctorList