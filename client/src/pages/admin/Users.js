import React from 'react'
import HomePage from './../HomePage';
import { useState } from 'react';
import { useEffect } from 'react';
import  axios  from 'axios';
import { Table } from "antd";

const Users = () => {
   const [users,setUsers] = useState([])
    
//getUsers
const getUsers = async () => {
  try {
    const res = await axios.get("/api/admin/getAllUsers", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (res.data.success) {
      setUsers(res.data.data);
    }
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  getUsers();
}, []);

  // antD table col
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Doctor",
      dataIndex: "isDoctor",
      render: (text, record) => <span>{record.isDoctor ? "Yes" : "No"}</span>,
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <div className="d-flex">
          <button className="btn btn-danger">Block</button>
        </div>
      ),
    },
  ];
  return (
    <HomePage>
      <h2 className="text-center m-2">Users List</h2>
      <Table columns={columns} dataSource={users} />
    </HomePage>
  )
}

export default Users