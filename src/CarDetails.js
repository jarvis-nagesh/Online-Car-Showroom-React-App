import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import companyLogo from './assets/images/1.jpg';
import { Link } from 'react-router-dom';
//for table
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Invoice from "./Invoice"
import PageModification from "./PageModification"

//for table
const useStyles = makeStyles(theme => ({
    table: {
        minWidth: 650,
        maxWidth: 700,
        marginLeft: 250,
    },
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


function CarD(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let interiorModificationPrice = 0
    let exteriorModificationPrice = 0

    props.interior.map(item => {
        item.choices.map(price => {
            if (price.choice_name == props.airBagChoice || price.choice_name == props.seatCoverChoice) {
                interiorModificationPrice = interiorModificationPrice + price.price
            }
        })
    })
    props.exterior.map(item => {
        item.choices.map(price => {
            if (price.choice_name == props.mirrorChoice || price.choice_name == props.wheelCoverChoice) {
                exteriorModificationPrice = exteriorModificationPrice + price.price
            }
        })
    })
    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <img src={companyLogo} class="rounded mx-auto d-block" alt="BigCo Inc. logo" width="500" />
                </div>
            </div>

            <div class="row">
                <div class="col-md-12">
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            {
                                props.carDetails.map((car) => {
                                    let carName;
                                    if (props.variant_id == car.variant_id && car.spec_type == "name") {
                                        carName = (
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell align="left"><h2>{`Key Specification Of ${car.car_name}`} </h2></TableCell>
                                                </TableRow>
                                            </TableHead>
                                        )
                                    }
                                    return carName
                                })
                            }
                            <TableBody>
                                {
                                    props.carDetails.map((car) => {
                                        let cars;
                                        if (props.variant_id == car.variant_id && car.spec_type == "default") {
                                            cars = (<TableRow key={car.spec_id}>
                                                <TableCell component="th" scope="row">
                                                    {car.spec_name}
                                                </TableCell>
                                            </TableRow>)
                                        }
                                        return cars
                                    })
                                }
                            </TableBody>
                        </Table>

                        {
                            <> <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left"><h2>Interior Specifications</h2></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    {
                                        props.carDetails.map((car) => {
                                            let cars
                                            if (props.variant_id == car.variant_id && car.spec_type == "interior") {
                                                cars = (
                                                    <TableRow key={car.spec_id}>
                                                        <TableCell component="th" scope="row">
                                                            {car.spec_name}
                                                        </TableCell>
                                                    </TableRow>)
                                            }
                                            return cars
                                        })
                                    }

                                </TableBody>
                            </Table>

                                <Table className={classes.table} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="left"><h2>Exterior Specifications</h2></TableCell>

                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {props.carDetails.map((car) => {
                                            let cars;
                                            if (props.variant_id == car.variant_id && car.spec_type == "exterior") {
                                                cars = (<TableRow key={car.spec_id}>
                                                    <TableCell component="th" scope="row">
                                                        {car.spec_name}
                                                    </TableCell>
                                                </TableRow>)
                                            }
                                            return cars
                                        })}
                                    </TableBody>
                                </Table> </>
                        }
                    </TableContainer>
                </div>
            </div>

            <div style={{ height: 100 }}></div>

            <div style={{ borderStyle: "solid" }}>
                <div className="row" style={{}}>
                    <div className="col-md-3" style={{}}>

                    </div>
                    <div className="col-md-3" style={{}}>

                    </div>
                    <div className="col-md-3" style={{}}>
                        <h5>Base Price:</h5>
                    </div>
                    <div className="col-md-3" style={{}}> {props.variant.map(price => {
                        let pr;
                        if (props.variant_id == price.variant_id) {
                            pr = <h6>{price.price}</h6>
                        }
                        return pr
                    })}
                    </div>
                </div>

                <div className="row" style={{}}>
                    <div className="col-md-3" style={{}}>
                    </div>
                    <div className="col-md-3" style={{}}>

                    </div>
                    <div className="col-md-3" style={{ borderBottomStyle: "dotted", width: "10px" }}>
                        <h6>Quantity</h6>
                    </div>
                    <div className="col-md-3" style={{ borderBottomStyle: "dotted", width: "6px" }}>
                        {props.qty}
                    </div>
                </div>

                <div className="row" style={{}}>
                    <div className="col-md-3" style={{}}>
                        <h1>Total</h1>
                    </div>
                    <div className="col-md-3" style={{}}>

                    </div>
                    <div className="col-md-3" style={{}}>

                    </div>
                    <div className="col-md-3" style={{}}> {props.variant.map(price => {
                        let pr;
                        if (props.variant_id == price.variant_id) {
                            pr = <h1>{price.price * props.qty}</h1>
                        }
                        return pr
                    })}
                    </div>
                </div>
            </div>
            <div class="row" style={{ marginTop: 80, marginBottom: 80 }}>
                <div class="col-sm-6">
                    {
                        <Link style={{ width: 210, marginLeft: 350 }} type="submit" className="btn btn-primary" onClick={() => handleOpen(true)}>{open ? "Save Modify" : "Modify"}</Link>
                    }
                </div>
                <div class="col-sm-6">
                    <Invoice qty={props.qty} successVariantData={props.successVariantData} interior={props.interior} exterior={props.exterior} airBagChoice={props.airBagChoice} seatCoverChoice={props.seatCoverChoice} mirrorChoice={props.mirrorChoice} wheelCoverChoice={props.wheelCoverChoice} variant={props.variant} variant_id={props.variant_id} />
                </div>
            </div>
            <div style={{ height: 100 }}></div>
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
                }}>
                <Fade in={open}>
                    <PageModification handleClose={handleClose} onClickMirrorChoice={props.onClickMirrorChoice} onWheelCoverChoice={props.onWheelCoverChoice} onClickSeatCoverChoice={props.onClickSeatCoverChoice} onClickAirBagChoice={props.onClickAirBagChoice} selectInterior={props.selectInterior} saveModify={setOpen} interior={props.interior} exterior={props.exterior} variant_id={props.variant_id} />
                </Fade>
            </Modal>
        </div>
    );
}
export default CarD;

