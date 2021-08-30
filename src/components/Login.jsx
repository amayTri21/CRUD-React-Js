import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
class Login  extends React.Component {  
      
    constructor(){  
        super();
    }
      
    render() {
        const amay = JSON.parse(window.localStorage.getItem('contact_form'));
        console.log(amay);
        console.log(amay.email);
        
        
        const loginVal = () => {

            var name2 = amay.name;
            var password2 = amay.password;
            console.log(name2); 
            var name1 = document.getElementById("name").value;
            var password1 = document.getElementById("password").value;
           
       if(name1===name2 && password1===password2){
           alert("sucess")
           return <Link to='/signup'  />
       }
          else{
              alert("failure")
          }
           
        }
        
        return (
        
        <form> 
            <hr>
            </hr>
            <label> Name </label><br></br>
            <input type="text" id="name" className="name" ></input><br></br>

            <label> Password</label><br></br>
            <input type="password" id="password" className="pass"></input><br></br>
            <input type="submit" value="submit" onClick={loginVal}></input><br></br>
        </form> 

       )
    }   
}
export default Login;