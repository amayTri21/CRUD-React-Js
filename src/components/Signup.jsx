import React, { Component, useState } from 'react';

import { Link } from "react-router-dom";
 
export default class Signup extends Component {

   DATA;

    constructor(props) 
    
    {
        super(props);
        this.eventName = this.eventName.bind(this);
        this.eventEmail = this.eventEmail.bind(this);
        this.eventContact = this.eventContact.bind(this);
        this.eventPassword = this.eventPassword.bind(this);

        this.onFormSubmit = this.onFormSubmit.bind(this);

     
       this.state = {
            name: '',
            email: '',
            contact: '',
            password: ''
        }
    }
    
      //  Event handlers
    
      eventName(event) {
        this.setState({ name: event.target.value })
    }

    eventEmail(event) {

        this.setState({ email: event.target.value })
    }

    eventContact(event) {
        this.setState({ contact: event.target.value })
    }

    eventPassword(event) {
        this.setState({ password: event.target.value })
    }  
 

    handleformvalidation(){

        var lname=document.getElementById("name").value;  
        var number=document.getElementById("contact").value;  
        var email=document.getElementById("email").value; 
        var password = document.getElementById("password").value; 

        var letters = /^[A-Za-z]+$/;  

             var phoneno = /^[6-9]\d{0,10}$/;

     
             if( lname==='' || number==='' || email===''){  

                alert("ALL FIELDS ARE COMPULSORY"); 
                return false; 
                }

        else if(!letters.test(lname))   
            {  
             alert('Names should contain Letters only');  
             return false; 
            }  
    
        else if(!phoneno.test(number))  
            {  
            alert("Enter a number starting from 6 8 7 9");  
    
            }  
            else{
         alert("registeration sucess");
         return true;
   
            } 
    }
    onFormSubmit(event) {
        if (this.handleformvalidation()){
            event.preventDefault();
           
        }
      
    }


    componentDidMount() {
        this.DATA = JSON.parse(localStorage.getItem('contact_form'));

        if (localStorage.getItem('contact_form')) {
            this.setState({
                     
                name: this.DATA.name,
                email: this.DATA.email,
                contact: this.DATA.contact,
                password: this.DATA.password
            })
        }

         else {
            this.setState({
                name: '',
                email: '',
                contact: '',
                password: ''
            })
        }
   var myData = localStorage.getItem('contact_form');
        console.log(myData);
    
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('contact_form', JSON.stringify(nextState));
    }
    
    render() {
        var logindata = this.state.logindata;
        return (
            <div className="container">
                 <div className="card">
                     <div className="card-body">
                        <form ref="myform" onSubmit={this.onFormSubmit} >
                            <div className="form-group mb-3">
                            <h1 class="heading"> Registeration </h1>
                                <label><strong>Name</strong></label><hr></hr>
                                <input type="text" ref ="name" className="form-control" id="name"  value={this.state.name} onChange={this.eventName} />
                            </div>
                            <div className="form-group mb-3">
                                <label><strong>Email</strong></label><hr></hr>
                                <input type="email" ref="email" className="form-control" id="email"  value={this.state.email} onChange={this.eventEmail} />
                            </div>
                            <div className="form-group mb-3">
                                <label><strong>Contact</strong></label><hr></hr>
                                <input type="text" ref="contact"className="form-control" id="contact" value={this.state.contact} onChange={this.eventContact} />
                            </div>
                            <div className="form-group mb-3">
                                <label><strong>Password</strong></label><hr></hr>
                                <input type="password" ref="password" className="form-control" id="password" value={this.state.password} onChange={this.eventPassword} />
                            </div>
                            <div className="d-grid mt-3">
                                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                            </div>
                        </form>
                       
                        </div>
                        <br></br>
                      </div>
                  <p> my Form </p>
                  </div>
               
                  
        )
    }
}