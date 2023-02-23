import React from 'react'
import Layout from '../components/Layout'
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import dp from '../images/dp.png'


const UserProfile = () => {
    const {user} = useSelector((state)=>state.user)
//     const [getusers,setGetusers] = useState([])
//     const getUserData = async()=>{
//        try {
//         const res = await axios.get("/api/users/getAllDoctors",
//         {
//             headers:{
//                 Authorization: `Bearer ${localStorage.getItem("token")}`
//             }
//         })
//         if(res.data.success){
//                setGetusers(res.data.data)
//         }
        
//        } catch (error) {
//         console.log(error);
//        }
//     }
// useEffect(()=>{
//     getUserData()
// },[])
  return (
    <Layout>
             <div className="doctor_list_header">
            <div className="dp_image">
              <img src={dp} alt="dp" />
            </div>
        <h3>Username: {user.name}</h3>
          </div>
    </Layout>
  )
}

export default UserProfile