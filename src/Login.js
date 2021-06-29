import React, { Component } from "react";
import Footer from './Footer';
import './App.css';
export default class Login extends Component {
    constructor(props) {
              super(props);
              
              this.state = {
                Message: ''
              };
            }
    loginClicked=()=>{      let logD={
                    		 "username":this.refs.username.value,
                   		  "password":this.refs.password.value
                   		 
        };
          let d= JSON.stringify(logD);
                  console.log(JSON.parse(d));
        let response =  fetch("http://localhost:8080/S4KVR_Hibernate/cust/validate",
         {method: 'POST',  headers:{'Content-type':'application/json'},     body: d
         } );
    
    if (response) { 
    alert("success"); 
        this.props.history.push('./Welcome');
  } else {
    alert("HTTP-Error: " + response.status);

              }
    }
    render() {
        return (
            
            <div className ="container loginbg" >
            <form>
              <br></br>         
               
<div className ="row">
<div className ="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
<img className ="loginimg" src= 'https://image.freepik.com/free-vector/rental-car-service-abstract-concept-illustration_335657-1846.jpg'  />
</div>
<div className ="col-xs-6 col-sm-6 col-md-3 col-lg-3  m-5">
<br></br>
        <h1 className = "login mt-5">LOGIN</h1>
                <div className="form-group">
                    <input type="email" className="form-control d-block" ref="username"required="true" placeholder="Enter username" active/>
                </div>               
                  
                <div className="form-group  ">
                    <input type="password" className="form-control " ref="password" required="true" placeholder="Enter password" />
                </div>
               <div className="form-group  ">
               <button type="button" onClick={this.loginClicked} className="btn btn-danger button ">Login</button>
                <p className="forgot-password" >
                    Forgot <a href="#">password?</a>
                </p>  
                </div>
          </div>
       </div>  
                   </form>
                
                  
</div>
        );
    }
}