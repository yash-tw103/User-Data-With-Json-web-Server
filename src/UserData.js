import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function UserData({ users }) {
  const[userdata , setuserdata] = useState([]);
  const Navigate = useNavigate();
  const Api = "http://localhost:8000/user/";

  const LoadEdit =(id)=>{
    Navigate('user/edit/'+id);
  }

  const LoadDetail=(id)=>{
    Navigate('user/detail/'+id);
  }

  const LocalDelete = (id)=>{
    fetch(Api+id,{
      method :"DELETE"
    }).then((res)=>{
      alert("Removed Succesfully");
      window.location.reload();
    }).catch((err)=>{
      
    })
  }
  const fetchUser =async(url)=>{
    try{
      const res =await fetch(url);
      const data =await res.json();
    console.log(data);
    setuserdata(data);
  }catch(err){
    console.error(err);
  }
  }

  useEffect(()=>{
    fetchUser(Api);
  },[])
  return (
    <>
    <div className="card" style={{width: "90%" , margin:"auto"}}>
    
  <div className="card-body">
  <Link to={'/user/create'} className='btn btn-success'>Add New(+)</Link>
  <br/><br/>
  <table className="table table-bordered " >
        <thead className="table-dark">
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Address</td>
            <td>Phone</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {userdata.map((user)=>{
            return(
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>{user.phone}</td>
                <td> &nbsp;<button onClick={e=>LoadEdit(user.id)} className='btn btn-sm btn-primary'>Edit</button>
                &nbsp; <button onClick={e=>LocalDelete(user.id)} className='btn btn-sm btn-danger'>Delete</button>
                &nbsp;  <button onClick={e=>LoadDetail(user.id)} className='btn btn-sm btn-warning'>Details</button> </td>
              </tr>
            )
          })}
        </tbody>
      </table>
  </div>
</div>
      
    </>
  )
}

export default UserData
