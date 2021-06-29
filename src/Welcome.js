import React from "react";
import background from "./hero-bg.png";

function App() {
  return (
    <div style={{ backgroundImage: `url(${background})`, height:700 }}>
      
      <div class="container">
        <div style={{height: 125}}></div>
          <div class="row">
            <div class="col-sm-6" style={{ backgroundColor:"yellow"}}>
              <h1>Let's Find a Great Deal For Your Business!</h1>
            </div>
            <div class="col-sm-6"></div>
          </div>

          <div style={{height: 30}}></div>

          <div class="row">
            <div class="col-sm-6" style={{ WebkitTextFillColor:"white"}}>
              <h3>We welcome you to become our next satisfied customer.</h3>
            </div>
            <div class="col-sm-6"></div>
          </div>

          <div style={{height: 20}}></div>
          
          <div class="row">
            <div class="col-sm-6" style={{ WebkitTextFillColor:"white"}}>
              <button type="submit" style={{height:45, fontSize:16, fontStyle:"italic"}} className="btn btn-primary" onClick={()=>this.submit()}>Get Started</button>
            </div>
            <div class="col-sm-6"></div>
          </div>
          
        </div>


    </div>
  );
}

export default App;