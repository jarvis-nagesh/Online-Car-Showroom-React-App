
import React from 'react';
import './footer.css';
// import SimpleReactFooter from "simple-react-footer";
import Container from 'bootstrap/dist/css/bootstrap.min.css'

class Footer extends React.Component {

    render() {
        return(
            <div style={{backgroundColor:"#272c34", color:"white", marginTop:50, paddingTop:25, paddingBottom:15, paddingLeft:50, paddingRight:50}}>
    <div className="row" style={{}}>
		<h2>Vehical Configurator</h2>
		<p>Car Configurator is a tool that allows you to design and customize your car, use genuine accessories.
Welcome to AutoBot - India's largest auto media vehicle. AutoBot has always striven to serve car buyers and owners in the most comprehensive and convenient way possible. We provide a platform where car buyers and owners can research, buy and come together to discuss and talk about their cars.</p>
	</div>
	
	<div className="row" style={{marginTop:20}}>
		<div className="col-md-3" style={{}}>
			<h6>Link 1</h6>
		</div>
		<div className="col-md-3" style={{}}>
			<h6>Link 1</h6>
		</div>
		<div className="col-md-3" style={{}}>
			
		</div>
		<div className="col-md-3" style={{}}>
		
		</div>
	</div>
	
	<div className="row" style={{}}>
		<div className="col-md-3" style={{}}>
			<h6>Link 1</h6>
		</div>
		<div className="col-md-3" style={{}}>
			<h6>Link 1</h6>
		</div>
		<div className="col-md-3" style={{}}>
			
		</div>
		<div className="col-md-3" style={{}}>
			
		</div>
	</div>
	
	<div className="row" style={{marginTop:20}}>
		<p style={{marginLeft:400}}>© Copyright SM-VITA. All Rights Reserved.</p>
	</div>
</div>
        );
    };

}


export default Footer ;