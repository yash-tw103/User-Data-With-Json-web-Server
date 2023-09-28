import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function UserDetail() {
  const{uid} = useParams();
  const [userdata,setuserdata] =useState({});

  const API = "http://localhost:8000/user/";

  const fetchUser =async(url)=>{
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setuserdata(data);
  }


  useEffect(()=>{
    fetchUser(API+uid);
  },[])
  return (
    <div>
      <br /> <br />
      <h3>The User name is : <b>{userdata.name} </b></h3>
      <h3>The User Email is : {userdata.email } </h3>
      <h5>The User Address is : {userdata.address } </h5>
      <h5>The User Phone is : {userdata.phone } </h5>
      <Link to='/' className='btn btn-danger'>Back</Link>
    </div>
  )
}

export default UserDetail
