import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

function UserEdit() {
  const {uid} =useParams();
  const API =  "http://localhost:8000/user/";

  const [id , setid] = useState();
  const [email , setemail] = useState();
  const [name , setname] = useState();
  const [address , setaddress] = useState();
  const [phone , setphone] = useState();
  const Navigate = useNavigate();

  useEffect(()=>{
    fetch(API+uid).then((res)=>{
      return res.json();
    }).then((resp)=>{
        setid(resp.id);
        setemail(resp.email);
        setname(resp.name);
        setaddress(resp.address);
        setphone(resp.phone);
    }).catch((err)=>{
      console.log(err.message);
    })
   },[]);
  const handleSubmit = (e)=>{
    e.preventDefault();
   const empdata = {id , email , name , address , phone};
   fetch(API+uid,{
    method :"PUT",
    headers:{"Content-type" : "application/json"},
    body:JSON.stringify(empdata)
  }).then((res)=>{
    alert("Saved sucessfully");
    Navigate('/');
  }).catch((err)=>{
    console.log(err);
  })
    
   
  }
  return (
    <div>
      <div className="card" style={{width : "25rem" , margin:"auto" ,textAlign:"left" ,backgroundColor:"grey", fontSize:"1rem", fontWeight:"bold"}}>
  <h2><center>Edit User</center></h2>
  <div className="card-body">
  <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label for="id" className="form-label">ID</label> 
     <input  value={id} disabled="disabled" type="text" className="form-control" id="id"  />
    
  </div>
  <div className="mb-3">
    <label for="name" className="form-label">Name</label>
    <input value={name} onChange={e=>setname(e.target.value)} type="text" className="form-control" id="name"  />
    
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input value={email} onChange={e=>setemail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1"  />
    
  </div>
  <div className="mb-3">
    <label for="phone" className="form-label">Address</label>
    <input value={address} onChange={e=>setaddress(e.target.value)} type="text" className="form-control" id="phone"  />
    
  </div>
  <div className="mb-3">
    <label for="phone" className="form-label">Phone</label>
    <input value={phone} onChange={e=>setphone(e.target.value)} type="text" className="form-control" id="phone"  />
    
  </div>
  
 
  <button type="submit" className="btn btn-primary" >Edit</button>
  &nbsp;<Link to={'/'}className='btn btn-warning' >Back</Link>
</form>
  </div>
</div>
      
    </div>
  )
}

export default UserEdit
