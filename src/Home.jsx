import React , {useState,useEffect} from "react";
import axios from "axios";
//  import web from "../src/images/hero-img.png";
import Common from "./Common";
import { Link } from "react-router-dom";


export const Home = () => {
  const [users, setUser] = useState([]);

   useEffect(()=>{
    loadUsers();
  },[]);
  
  const loadUsers  = async ()=>{
    const result = await axios.get("http://localhost:3002/users");
    
    setUser(result.data);  
  } 
  return (
    
    <>    
    <div className="container">
     <h1>Home Page</h1>
     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
     when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the 
     leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
     Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
     

     
     <table style={{marginLeft:"5em"}} className="table border shadow   col-md-10">
     
  <thead  className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((user,index) =>(
          <tr> 
           <th scope="row">{index + 1}</th>
           <td>{user.name}</td>
           <td>{user.username}</td>
           <td>{user.email}</td>
           <td>
            <Link className="btn btn-primary" to= {`/crud/viewuser/${user.id}`}>View</Link>
            <Link className="btn btn-outline-primary"  to={`/crud/edituser/${user.id}`} >Edit</Link>
            <Link className="btn btn-danger">Delete</Link>
           </td>

           </tr>
        ))
    }
  </tbody>
</table>
</div>
     </>
  );
};
