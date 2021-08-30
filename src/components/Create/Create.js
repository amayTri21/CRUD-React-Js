import React, { useState, useContext } from "react";
import "./Create.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";

const Create = () => {
 

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const [users, setUser] = useContext(UserContext);

  const updateId = (e) => {  
    setId(e.target.value);
    console.log(id)
  };

 function validation(){   
   console.log("hello")
  
 }
  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updateContact = (e) => {
    setContact(e.target.value);
  };

  const addUser = (e) => {
 
    var name1 = document.getElementById("name").value;
    var id1 = document.getElementById("id").value;
    const value = users.filter((el)=>el.id == id1)
    console.log("amay",value);
    if(name1=="" || id1==""){
      alert("empty field")
    }
    else if (value.length==1){
      alert("users exist")
      return false;
    }
    else{
      alert("new id")
      e.preventDefault();
      setUser([...users, {id:id,  name:name, email:email, contact:contact}])
      
    }

  

 
  }
  return (

    <div className="create">
      <h1 align="center"> Create User</h1>
      <br/>

      <form>
        <label>Enter id </label><br></br>
        <input type="text" id="id" value={id} onChange={updateId}></input><br></br>
        <label>Enter name </label><br></br>
        <input type="text" id="name" value={name} onChange={updateName} ></input><br></br>
        <label>Enter email  </label><br></br>
        <input type="text" id="email"value={email} onChange={updateEmail} ></input><br></br>
        <label>Enter contact  </label><br></br>
        <input type="text" id="number" value={contact} onChange={updateContact} ></input><br></br>
      </form>
        <br></br>
        <Button className="action_btn"  variant="primary" type="submit" onClick={addUser} >
          Create User
        </Button>
        <Link to="/">
          <Button className="action_btn" id="button1" variant="info" >
            Back to Home
          </Button>
        </Link>
     
    </div>
  );
};

export default Create;
