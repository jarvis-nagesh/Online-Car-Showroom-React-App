import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class SignUp extends Component {
    constructor(props) {
      super(props);
      this.state = { company_name: '', username: '' , password: '',
      customer_name: '', designation: '', email_id : '',address_line_1 : '',address_line_2 : '',city : '',state : '',
      pincode : '', company_tel  : '',customer_mob   : '',
       };
    }
  
    handleChange = (event) => {
      this.setState( {  [event.target.company_name]: event.target.value,
        [event.target.username]: event.target.value  ,
        [event.target.password]: event.target.value ,
        [event.target.customer_name]: event.target.value  ,
        [event.target.designation]: event.target.value  ,
        [event.target.email_id]: event.target.value  ,
        [event.target.address_line_1]: event.target.value  ,
        [event.target.address_line_2]: event.target.value  ,
        [event.target.city]: event.target.value  ,
        [event.target.state]: event.target.value  ,
        [event.target.pincode]: event.target.value  ,
        [event.target.company_tel]: event.target.value  ,
        [event.target.customer_mob]: event.target.value  ,
      
    }  );
    
}
  
    handleSubmit = (event) => {
     

        let response =  fetch('http://localhost:8080/S4KVR_Hibernate/cust/addCustomer', {
          method: 'post',
         
         headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
          // We convert the React state to JSON and send it as the POST body
          body:  JSON.stringify({
            cname :  this.state.name,
             email: this.state.email,  
             caddr: this.state.addr,   
             telephone: this.state.contact,   
             fax: this.state.fax,   
             holding: this.state.holding,   
             authperson: this.state.authperson,   
             designation: this.state.designation   ,
             gstno: this.state.gstno,  
             panno: this.state.panno,   
             username : this.state.username,
             password: this.state.password
      
    }),
        });
         if (response) { 
            alert('Your form submitted: ' + this.state.cname +'\n Please Login with Username and Password');
                this.props.history.push('./Login');
        }
      event.preventDefault();
  }
  
    render() {
        return (
          <form id="myform"  className="container signup ">
               <br></br>
               <br></br>
               <br></br>
               <br></br>
               <br></br>
               <h1 className = "login  ">SIGNUP</h1>
<br></br>      <br></br>          
                <div className="row">
            
                       <div className= "col-sm-12 col-md-6 col-lg-6 ">
                
                <div className="form-group ">
                    
                    <input type="text" className="form-control "  name="name" value={this.state.value} placeholder="Enter Company Name"  onChange={this.handleChange}/>
                </div>  
                 </div>  
                
            
                    <div className= "col-sm-12 col-md-6 col-lg-6 ">
                  
                <div className="form-group ">
                    
                    <input type="email"  name="email" value={this.state.value} required="true" className="form-control " placeholder="Enter User Name"  onChange={this.handleChange}/>
                </div>
                </div>

                <div className= "col-sm-12 col-md-6  mx-auto ">
                  
                <div className="form-group">
                    
                    <input type="text"name="addr" value={this.state.value} required="true" className="form-control " placeholder="Enter Password"  onChange={this.handleChange}/>
                </div>  
                </div>


                   <div className= "col-sm-12 col-md-6  mx-auto ">
                  
                <div className="form-group">
                    
                    <input type="text" name="contact" value={this.state.value} required="true" className="form-control " placeholder="Enter Customer Name"  onChange={this.handleChange}/>
                </div>
                </div>
                   <div className= "col-sm-12 col-md-6  mx-auto ">
                  
                <div className="form-group">
                    
                    <input type="text" name="fax" value={this.state.value} className="form-control " required="true" placeholder="Enter Designation" onChange={this.handleChange} />
                </div>
                </div>
                   <div className= "col-sm-12 col-md-6  mx-auto ">
                  
                <div className="form-group">
                    
                    <input type="text" name="holding" value={this.state.value} className="form-control " required="true" placeholder="Enter Email Id"  onChange={this.handleChange}/>
                </div>
                </div>
                   <div className= "col-sm-12 col-md-6  mx-auto ">
                  
                <div className="form-group">
                    
                    <input type="text" name="authperson" value={this.state.value} className="form-control " required="true" placeholder="Enter Address 1"  onChange={this.handleChange}/>
                </div>
                </div>
                   <div className= "col-sm-12 col-md-6  mx-auto ">
                  
                <div className="form-group">
                    
                    <input type="text" name="designation" value={this.state.value} className="form-control " required="true" placeholder="Enter Address 2"  onChange={this.handleChange}/>
                </div>
                </div>
                   <div className= "col-sm-12 col-md-6  mx-auto ">
                  
                <div className="form-group">
                    
                    <input type="text" name="gstno" value={this.state.value} className="form-control "required="true"  placeholder="Enter City"  onChange={this.handleChange}/>
                </div>
                </div>
                   <div className= "col-sm-12 col-md-6  mx-auto ">
                  
                <div className="form-group">
                    
                    <input type="text" name="panno" value={this.state.value} className="form-control " required="true" placeholder="Enter State"  onChange={this.handleChange}/>
                </div>
                </div>
                   <div className= "col-sm-12 col-md-6  mx-auto ">
    
                <div className="form-group">
                    
                    <input type="text"name="username" value={this.state.value}  className="form-control " required="true" placeholder="Enter Pincode"  onChange={this.handleChange}/>
                </div>
                </div>
                  <div className= "col-sm-12 col-md-6  mx-auto ">
                  
                <div className="form-group">
                    
                    <input type="password" name="password" value={this.state.value} className="form-control " required="true" placeholder="Enter Company Tel."  onChange={this.handleChange}/>
                </div>
                </div>

                <div className= "col-sm-12 col-md-6  mx-auto ">
                  
                <div className="form-group">
                    
                    <input type="password" name="password" value={this.state.value} className="form-control " required="true" placeholder="Enter Customer Mob."  onChange={this.handleChange}/>
                </div>
                </div>

                
                
                <br></br>
                <div className= "col-sm-7 mx-auto">  
                <br></br>
               
               <button style={{width: 210, marginLeft:240}} type="button" className="btn btn-primary" onClick={()=>this.submit()}>Register</button>
               </div>  
             
                </div>
                <div style={{height:100}}></div>
               
            </form>

            
            
            
        );
    }
}
