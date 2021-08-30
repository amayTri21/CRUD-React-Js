import React, { useContext } from "react";
import "./Home.css";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";

const Home = () => {
  const [users, setUser] = useContext(UserContext);

  return (
    <div className="amay">
      <h1 align="center"> Home Page</h1>
      <body>
       
     <hr/>
      <Link to="/create">
        <Button className="create__btn" variant="primary">
          Create User
        </Button><br></br>
      </Link>
    
      <Link to ="/login">   <Button className="create__btn" variant="primary">
        Login 
      </Button>
      </Link>
      <Link to ="/signup">   <Button className="create__btn" variant="primary">
       SignUp
      </Button>
      </Link>

      <Table striped bordered>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>contact</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          
          {
          
          
          users.map((user) => (
            <tr>
            
            
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.contact}</td>
              <td>
                <Link to={"/read/"+user.id}>
                  {/* <Button className="action__btn" variant="success">
                    Read
                  </Button> */}
                </Link>
                <Link to={"/edit/"+user.id}>
                <Button className="action__btn" variant="info">
                  Edit
                </Button>
                </Link>
                <Link to={"/delete/"+user.id}>
                <Button className="action__btn" variant="danger">
                  Delete
                </Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      </body>
    </div>
  );
};

export default Home;
