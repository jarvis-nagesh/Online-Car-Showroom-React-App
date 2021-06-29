import React from 'react';
import { Link } from 'react-router-dom';

class PageGetStarted extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
    
            seg : [],
            model : [],
            manufacturer : [],
            min2:'',
            modelId:[],
            selectedSegment : '--Choose Segmnet--',
            selectedManufacturer : '--Choose Manufacturer--',
            selectedModel : '--Choose Model--',
            URL1 : '',
            sModel:{
              segid:'',
              manid:'',
              mid:'',
              modelId:''
            }
        };
             this.handleSegChange = this.handleSegChange.bind(this);
             this.handleManuChange = this.handleManuChange.bind(this);
             this.handleModelChange = this.handleModelChange.bind(this);
             this.handleQtyChange = this.handleQtyChange.bind(this);
             this.handleSubmit = this.handleSubmit.bind(this);
    }
        componentDidMount() {
            fetch("http://localhost:8081/TVS/Segment")
            .then(res => res.json())
            .then(
              (result) => {
                this.setState({
                  seg: result
                });
              }
            );
           
        }
        handleSegChange(event) {
          this.setState({selectedSegment: event.target.value});
          this.state.sModel.segid=event.target.selectedIndex;
          console.log(this.state.sModel.segid)
          //  FETCH MANUFACTURER BASED ON SELECTED SEGMENT
        fetch("http://localhost:8080/S4KVR_Hibernate/menu/"+this.state.sModel.segid)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
                manufacturer: result
            });
          }
          
        );
        fetch("http://localhost:8080/S4KVR_Hibernate/seg/minQ/"+this.state.sModel.segid)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              min2: result
            });
          }
        );
      }
         handleManuChange(event) {
                  	this.setState({selectedManufacturer: event.target.value});
            this.state.sModel.manid=event.target.selectedIndex;
            console.log(this.state.sModel.manid)
            var u="http://localhost:8080/S4KVR_Hibernate/model/"
            fetch(u+this.state.sModel.segid+"/"+this.state.sModel.manid)
            .then(res => res.json())
            .then(
              (result) => {
                this.setState({
                    model: result
                   
                });
              }
              
            );
          
          
       }
         handleModelChange(event) {
                     	this.setState({selectedModel: event.target.value});     
               this.state.sModel.mid=event.target.selectedIndex;
               console.log(this.state.sModel.mid)
    
               fetch("http://localhost:8080/S4KVR_Hibernate/model/id/"+this.state.sModel.segid+"/"+this.state.sModel.mid)
               .then(res => res.json())
               .then(
                 (result) => {
                   this.setState({
                       modelId: result
                      
                   });
                 }
                 
               );
               
        }
        handleQtyChange(event) {
                         	this.setState({selectedQty: event.target.value});
                   // console.log(this.state.selectedQty)
                    this.state.sModel.minQty=event.target.value;
                    console.log(this.state.sModel.minQty)
                    console.log(this.state.sModel)
                    this.state.URL1="http://localhost:8080/S4KVR_Hibernate/model/"+this.state.sModel.segid+"/"+this.state.sModel.manid//+"/"+this.state.sModel.manid
                      console.log(this.state.URL1)
           
                    console.log("Getting model id"+this.state.modelId.id);
               this.state.sModel.modelId=this.state.modelId.id;
               this.state.URL1= this.state.sModel.modelId;
               console.log("from smodel: "+ this.state.URL1)
              
                    }
         handleSubmit(event) {
          
          event.preventDefault();
           
            }

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-6 offset-md-4">
                        
                    <div style={{height: 100}}></div>
                        
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <h4>Segment:</h4>
                                </div>
                                <div className="form-group col-md-6">
                                <select placeholder="segment" value={this.state.selectedSegment} onChange={this.handleSegChange} class="custom-select sources" > 
                                    <option>--Choose Segment--</option>
                                    {this.state.seg.map((e) => {
                                    return <option key={e.id}>{e.segType}</option>;
						            })}
                                </select>
                                </div>


                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <h4>Manufacturer:</h4>
                                </div>
                                <div className="form-group col-md-6">
                                {/*<select placeholder="manufacturer" value={this.state.selectedManufacturer} onChange={this.handleManuChange} class="custom-select sources" >
                                    <option>--Choose Manufacturer--</option>
                                    {this.state.manufacturer.map((e1) => {
							        return <option key={e1.id}>{e1.manuName}</option>;
						            })}
					            </select>*/}
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <h4>Varient:</h4>
                                </div>
                                <div className="form-group col-md-6">
                                <select  required={true} placeholder="model" value={this.state.selectedModel} onChange={this.handleModelChange} class="custom-select sources" >
                                  <option>--Choose Model--</option>
                                            {this.state.model.map((e1) => {
                                                return <option key={e1.id}>{e1.modelName}</option>;
                                            })}
                                </select>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <h4>Quantity:</h4>
                                </div>
                                <div className="form-group col-md-6">
                                    <select className="form-control" name="city" onChange={this.handleInputChange}>
                                        <option selected>Select Quantity</option>
                                        <option value="1">10</option>
                                        <option value="2">15</option>
                                        <option value="3">20</option>
                                        <option value="4">25</option>
                                    </select>
                                </div>
                            </div>

                            

                        
                            <div style={{height: 20}}></div>
                            <div className="form-row">
                                <div className="form-group col-md-3">
                                </div>
                                <div className="form-group col-md-6">
                                <Link to="./CarDetails"  type="submit" style={{width: 250, marginLeft:100}} className="btn btn-primary" onClick={()=>this.submit()} >Submit</Link>
                                </div>
                            </div>
                        
                    </div>
                </div>
            </div>
       )
    }
 }export default PageGetStarted;
