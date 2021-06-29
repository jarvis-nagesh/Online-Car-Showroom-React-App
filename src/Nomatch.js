import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Nomatch extends React.Component{
    render() {
        return(
            <div>   <br></br><br></br> <br></br><br></br> <br></br><br></br>
            <center> <h1>You Entered Wrong URL</h1><br></br><br></br>
            <h3>Click Here to Go <a href='/'> Home </a> </h3></center>
           
       </div>
           
        )
    }
}
export default Nomatch;