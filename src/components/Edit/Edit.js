import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import "./Edit.css";
import { useState } from "react";

const Edit = () => {

  
  const [users, setUser] = useContext(UserContext);
  const { id } = useParams();
  const user = users.filter((user) => user.id == id);

  const [name, setName] = useState(user[0].name);
  const [email, setEmail] = useState(user[0].email);
  const [contact, setContact] = useState(user[0].contact);
  

  const editName = (e) => {
    setName(e.target.value);
    const edited_name = name;
    user[0].name = edited_name;
   
  };

  const editEmail = (e) => {
    setEmail(e.target.value);
    var  edited_email = email;
    user[0].email = edited_email;
  };

  const editContact = (e) => {
    setContact(e.target.value);
    const edited_contact = contact;
    user[0].contact = edited_contact;
  };

  const editUser = (e) => {
    e.preventDefault();
    setUser([...users]);
  };

  return (
    <div className="edit">

<form>
         <h1>ID NO: {user[0].id}</h1> <br></br>
        
        <label>Enter name </label><br></br>
        <input type="text" id="name " value={name} onChange={editName} placeholder={user[0].name} ></input><br></br>
        <label>Enter email  </label><br></br>
        <input type="text" id="email"value={email} onChange={editEmail} placeholder={user[0].email} ></input><br></br>
        <label>Enter contact  </label><br></br>
        <input type="text" id="number" value={contact} onChange={editContact} placeholder={user[0].contact} ></input><br></br>
      </form>
     
        <br></br>
        <Link to="/">
          <Button onSubmit={()=>editUser} variant="primary" type="submit">
            Edit User
          </Button>
          <Button className="action_btn" variant="info">
            Back to Home
          </Button>
        </Link>
      {/* </Form> */}
    </div>
  );
};

export default Edit;
