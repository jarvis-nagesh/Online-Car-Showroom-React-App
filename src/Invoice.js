import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function TransitionsModal(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    
    // props.setModifiedPrice();
    return (
        <div>
            <div>
                <button  type="button" style={{ width: 210 }} className="btn btn-primary" onClick={handleOpen}>
                    Confirm Order
                </button>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <div className={classes.paper}>
                            {
                                props.variant.map(car => {
                                    let invoice;
                                    let aPrice = 0;
                                    let bPrice = 0;
                                    if (props.variant_id == car.variant_id) {
                                        invoice = (<>
                                            <h1 id="transition-modal-title">Invoice</h1>
                                            <p id="transition-modal-description"><span style={{ fontWeight: "bold" }}>Variant Name:</span> {car.variant_name}</p>
                                            <p id="transition-modal-description"><span style={{ fontWeight: "bold" }}>Variant Price:</span>  {car.price}</p>
                                            <p id="transition-modal-description"><span style={{ fontWeight: "bold" }}>Variant Quantity:</span>  {props.qty}</p>

                                            <h4>Modification: </h4>
                                            <h6 style={{ fontWeight: "bold" }}>Interior Modification</h6>
                                            {
                                                props.interior[0].choices.map(choice => {
                                                    let content;
                                                    {
                                                        if (choice.choice_name == props.airBagChoice && choice.price !== 0) {
                                                            content = <h6><span >{choice.choice_name}:</span> Rs.{choice.price}</h6>
                                                        }
                                                    }
                                                    return content
                                                })
                                            }
                                            {
                                                props.interior[1].choices.map(choice => {
                                                    let content;
                                                    {
                                                        if (choice.choice_name == props.seatCoverChoice && choice.price !== 0) {
                                                            content = <h6><span>{choice.choice_name}:</span> Rs.{choice.price}</h6>
                                                        }
                                                    }
                                                    return content
                                                })
                                            }
                                            <h6 style={{ fontWeight: "bold" }}>Exterior Modification</h6>
                                            {
                                                props.exterior[0].choices.map(choice => {
                                                    // choice.choice_name==props.mirrorChoice && setExteriorPriceA(10)
                                                    let content;
                                                    {
                                                        if (choice.choice_name == props.mirrorChoice && choice.price !== 0) {
                                                            content = <h6><span>{choice.choice_name}:</span> Rs.{choice.price}</h6>
                                                        }
                                                    }
                                                    return content
                                                })
                                            }
                                            {
                                                props.exterior[1].choices.map(choice => {
                                                    // choice.choice_name==props.wheelCoverChoice && setExteriorPriceB(10)
                                                    let content;
                                                    {
                                                        if (choice.choice_name == props.wheelCoverChoice && choice.price !== 0) {
                                                            content = <h6><span>{choice.choice_name}:</span> Rs.{choice.price}</h6>
                                                        }
                                                    }
                                                    return content
                                                })
                                            }

                                            {
                                                props.interior.map(int => {
                                                    let a = 0;
                                                    let b = 0;
                                                    props.interior[0].choices.map(choice => {
                                                        if (choice.choice_name == props.airBagChoice) {
                                                            a = choice.price
                                                        }
                                                    })
                                                    props.interior[1].choices.map(choice => {
                                                        if (choice.choice_name == props.seatCoverChoice) {
                                                            b = choice.price
                                                        }
                                                    })
                                                    aPrice = a+b
                                                })
                                            }
                                            {
                                                props.exterior.map(int => {
                                                    let a =0 ;
                                                    let b =0;
                                                    props.exterior[0].choices.map(choice => {
                                                        if (choice.choice_name == props.mirrorChoice) {
                                                            a = choice.price
                                                        }
                                                    })
                                                    props.exterior[1].choices.map(choice => {
                                                        if (choice.choice_name == props.wheelCoverChoice) {
                                                            b = choice.price
                                                        }
                                                    })
                                                    bPrice = a+b
                                                })
                                            }
                                            <hr />
                                            <h6>Interior Modification Price: {aPrice} </h6>
                                            <h6>exterior Modification Price: {bPrice}</h6>
                                            <h6>Variant Price: {car.price}</h6>
                                            <h3 style={{ marginTop: "20px" }}>Final Price: {car.price * props.qty + aPrice + bPrice}</h3>
                                            <div class="row" style={{ marginTop:20 }}>
                                                <div class="col-sm-6">
                                                    <Link style={{ width: 210 }} type="submit" className="btn btn-primary" onClick={() => handleClose()}>Cancel</Link>
                                                </div>
                                                <div class="col-sm-6">
                                                    <Link to="/OrderSuccessfull" style={{ width: 210 }} type="submit" className="btn btn-primary" onClick={() => { }}>PLace Order</Link>
                                                </div>
                                            </div>
                                        </>
                                        )
                                    }
                                    return invoice
                                })}
                        </div>
                    </Fade>
                </Modal>
            </div>
        </div>

    );
}
