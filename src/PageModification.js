import React, { useState } from 'react';

const PageModification = props => {
    return (
        <div style={{ backgroundColor: "white", width: "80%", height: "500px", padding: "50px" }}>
            <div className="row" style={{}}>
                <div className="col-md-6" style={{ marginTop: 50, marginBottom: 30 }}>
                    <h2 style={{ marginLeft: 20 }}>Interior Features</h2>
                    <div style={{ marginTop: 50 }}>
                        {
                            <div style={{ display: "flex", flexDirection: "column", marginRight: 20 }}>
                                {
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <h4>{props.interior[0].modif_name}</h4>
                                        <select class="custom-select sources" style={{ width: "65%", marginBottom: 30 }} onChange={event => props.onClickAirBagChoice(event.target.value)} placeholder="manufacturer">
                                            <option key="h" value="h">--Choose Airbag--</option>
                                            {
                                                props.interior[0].choices.map(choice => {
                                                    return <option key={choice.choice_id} value={choice.choice_name}>{choice.choice_name}</option>
                                                })
                                            }
                                        </select>
                                    </div>

                                }
                                {
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <h4>{props.interior[1].modif_name}</h4>
                                        <select class="custom-select sources" style={{ width: "65%" }} onChange={event => props.onClickSeatCoverChoice(event.target.value)} placeholder="manufacturer">
                                            <option key="h" value="h">--Choose Seat Cover--</option>
                                            {
                                                props.interior[1].choices.map(choice => {
                                                    return <option key={choice.choice_id} value={choice.choice_name}>{choice.choice_name}</option>
                                                })
                                            }
                                        </select>
                                    </div>

                                }

                            </div>
                        }
                    </div>

                </div>
                <div className="col-md-6" style={{ marginTop: 50, marginBottom: 30 }}>
                    <h2>Exterior Features</h2>
                    <div className="row" style={{ marginTop: 50 }}>
                        {
                            <div className="form-group " style={{ display: "flex", display: 'flex', flexDirection: "column" }}>
                                {
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <h4>{props.exterior[0].modif_name}</h4>
                                        <select class="custom-select sources" style={{ width: "65%", marginBottom: 30 }} onChange={event => props.onClickMirrorChoice(event.target.value)} placeholder="manufacturer">
                                            <option key="h" value="h">--Choose Mirrors--</option>
                                            {
                                                props.exterior[0].choices.map(choice => {
                                                    return <option key={choice.choice_id} value={choice.choice_name}>{choice.choice_name}</option>
                                                })
                                            }
                                        </select>
                                    </div>

                                }
                                {
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <h4>{props.exterior[1].modif_name}</h4>
                                        <select class="custom-select " name="manufacturer" style={{ width: "65%" }} onChange={event => props.onWheelCoverChoice(event.target.value)} placeholder="manufacturer">
                                            <option key="h" value="h">--Choose Wheel Cover--</option>
                                            {
                                                props.exterior[1].choices.map(choice => {
                                                    return <option key={choice.choice_id} value={choice.choice_name}>{choice.choice_name}</option>
                                                })
                                            }
                                        </select>
                                    </div>

                                }

                            </div>
                        }
                    </div>
                </div>
            </div>

            <div style={{ height: 20 }}></div>
            <div class="row" style={{ marginTop: 80, marginBottom: 80 }}>
                <div style={{ margin: "auto" }}>
                    <button type="submit" className="btn btn-primary" onClick={() => props.handleClose()}>Cancel</button>
                    <button type="submit" style={{ marginLeft: 50 }} className="btn btn-primary" onClick={() => props.saveModify()}>Save Modify</button>
                </div>
            </div>
        </div>
    )
}
export default PageModification;