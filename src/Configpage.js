import React from 'react'
import Footer from './Footer'
import './config.css';
class Configpage extends React.Component {
    render() {
        return (
                <div>
                <div className = "container defaultpage ">

                    <br/>   <br/>   <br/>
                    <div className = "row mx-auto">

                        <div className = "col-sm-12 col-md-12 col-lg-6 mt-5">
                            <img className = "selectedcar img-hover-zoom" src= "https://imgd.aeplcdn.com/1056x594/n/cw/ec/21497/kuv100-nxt-exterior-right-front-three-quarter-64047.jpeg?q=85"/>
                            <div className="card  cardefault p-3 text-align-center img-hover-zoom mx-auto" >

                    <div className="card-body">

                        <h5 className="card-title text-primary">DEFAULT FEATURES</h5>

                        <p className="card-text">• 3-Point Seat Belts at all Seating Positions   <br/>
                            • Front 3-Point Seat Belts with Automatic Tensioning System   <br/>
                            • Dual-Stage, Dual Threshold Front Airbags (SRS)   <br/>
                            • Advanced Compatibility Engineering™ (ACE™) body structure   <br/>
                            `	• Four-wheel Disc Brakes   <br/>
                            • Anti-Lock Braking System (ABS)   <br/>   <br/>
                            • Lower Anchors and Tethers for Children (LATCH)
                            • Child-Seat Tether Anchor (Rear-Center)
                            • Emergency Trunk Opener
                        </p>

                    </div>
                </div>
                        </div>


                        <div className = "col-sm-12 col-md-12 col-lg-6 mx-auto configform ">
                            <br/>
                            <br/>
                            <br/>
                            <form>
                                <div className="form-row mx-auto">
                                    <br/>
                                    <br/>
                                    <label className="mx-auto">SEAT BELT</label>
                                    <div className="col-sm-12 mx-auto">
                                        <label className="sr-only" htmlFor="inlineFormInputName">Name</label>
                                        <input type="text" className="form-control mx-auto w-50" id="inlineFormInputName"
                                               placeholder="Jane Doe"/>
                                      </div>
                                    <br/>
                                    <br/>
                                    <label  className="mx-auto">AIR BAGS</label>
                                    <div className="col-sm-12 mx-auto">
                                        <label className="sr-only" htmlFor="inlineFormInputName">Name</label>
                                        <input type="text" className="form-control  mx-auto w-50" id="inlineFormInputName"
                                               placeholder="Jane Doe"/>
                                    </div>

                                    <br/>
                                    <br/>
                                    <label  className="mx-auto">GPS NAVIGATION</label>
                                    <div className="col-sm-12 mx-auto">
                                        <label className="sr-only" htmlFor="inlineFormInputName">Name</label>
                                        <input type="text" className="form-control  mx-auto w-50" id="inlineFormInputName"
                                               placeholder="Jane Doe"/>
                                    </div>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <div className="form-check mx-auto">
                                        <input className="form-check-input " type="checkbox" value=""
                                               id="flexCheckChecked" />
                                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                                TIRE PRESSING MONITORING
                                            </label>
                                    </div>
                                    </div>
                            </form>
                        </div>


                    </div>
                    <br/><br/>
                    <button type="button" className="btn btn-danger  m-3">STD.FEATURE</button>
                    <button  type="button" className="btn btn-danger m-3">INTERIOR</button>
                    <button  type="button" className="btn btn-danger m-3">EXTERIOR</button>
                    <button  type="button" className="btn btn-danger m-3">ACCESSORIES</button>
                    <button  type="button" className="btn btn-danger m-3">CONFIRM</button>
                    <button  type="button" className="btn btn-danger m-3">CANCLE</button>

                    </div>
                    <Footer></Footer>
                </div>

            )
    }
}
export default Configpage;