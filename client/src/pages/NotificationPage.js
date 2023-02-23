import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { message, Tabs } from "antd";
import axios from 'axios'
import HomePage from "../components/Layout";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { hideLoading, showLoading } from "../redux/features/alertSlice";

const NotificationPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {user} = useSelector(state=>state.user)
    //   handle read notification
  const handleMarkAllRead = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/users/get-all-notification",
        {
          userId: user._id,
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
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("somthing went wrong");
    }
  };
    //   handle delete notification

  const handleMarkDeleteAll= async()=>{
    try{
        dispatch(showLoading())
        const res = await axios.post('/api/users/delete-all-notification',
        { userId:user._id},
        {headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }})
        dispatch(hideLoading())
        if(res.data.success){
            message.success("Notifications deleted successfully!")
        }
        else{
            message.error(res.data.error)
        }
    }
    catch(error){
        dispatch(hideLoading())
        console.log(error)
        error.message("Something went wrongs to delete notifications")
    }
  }
  

  return (
    <HomePage>
      <Container>
        <Row>
          <Col md={12}>
            <div className="notification_header">
              <h2>Notification Page</h2>
            </div>
          </Col>
          <Col md={12}>
            <Tabs>
              <Tabs.TabPane tab="Un Read" key={0}>
                <div className="d-flex justify-content-end">
                  <h5 className="p-2"
                  onClick={handleMarkAllRead}
                  style={{ cursor: "pointer" }}
                  >Mark All Read</h5>
                </div>
                {user?.notification.map((notificationMsg,index)=>(
                <div className="card" style={{ cursor: "pointer" }} key={index}>
                  <div className="card-text"
                  onClick={()=>navigate(notificationMsg.onClickPath)}
                  >
                    {notificationMsg.message}
                  </div>
                </div>
                ))}
              </Tabs.TabPane>
              <Tabs.TabPane tab="Read" key={1}>
                <div className="d-flex justify-content-end">
                  <h5 className="p-2"
                  style={{ cursor: "pointer" }}
                  onClick={handleMarkDeleteAll}
                  >Delete All Read</h5>
                </div>
                {user?.seennotification.map((notificationMsg,index)=>(
                <div className="card" style={{ cursor: "pointer" }} key={index}>
                  <div className="card-text"
                  onClick={()=>navigate(notificationMsg.onClickPath)}
                  >
                    {notificationMsg.message}
                  </div>
                </div>
                ))}
              </Tabs.TabPane>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </HomePage>
  );
};

export default NotificationPage;
