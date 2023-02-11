import React from 'react'
import HomePage from '../pages/HomePage'
import { Col } from 'react-bootstrap';

const DoctorsList = ({doctor}) => {
  return (
    <>
    <Col md={4}>
         <div className="card-header">
          Dr. {doctor.firstName} {doctor.lastName}
         <p>{doctor.experience}</p>
        </div>

    </Col>
    </>
  )
}

export default DoctorsList