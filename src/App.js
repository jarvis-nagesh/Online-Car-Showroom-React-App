import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import CarDetails from './CarDetails';
import PageHeader from './PageHeader';
import AboutUs from './AboutUs';
import Login from './Login';
import GetStarted from './GetStarted';
import Footer from './Footer';
import ContactUs from './ContactUs';
import Welcome from './Welcome';
import Signup from './Signup';
import Bookorder from './Bookorder';
import Nomatch from './Nomatch';
import HeaderMenu from './HeaderMenu';
import Menu from './components/Navbar/Menu';
import PageModification from './PageModification';
import OrderSuccessfull from './OrderSuccessfull'

const App = () => {
  const [segment, setSegment] = useState([])
  const [manufacturer, setManufacturer] = useState([])
  const [variant, setVariant] = useState([])
  const [qty, set_qty] = useState()
  const [seg_id, set_seg_id] = useState()
  const [mfg_id, set_mfg_id] = useState()
  const [variant_id, set_variant_id] = useState()
  const [carDetails, setCarDetails] = useState([])
  const [interior, setInterior] = useState([])
  const [exterior, setExterior] = useState([])
  const [checkedInterior, setCheckedInterior] = useState([])
// For Interior Modified Specification
  const [airBagChoice, setAirBagChoice] = useState()
  const [seatCoverChoice, setSeatCoverChoice] = useState()
// For Exterior Modified Specification
  const [mirrorChoice, setMirrorChoice] = useState()
  const [wheelCoverChoice, setWheelCoverChoice] = useState()
// For SuccessFull Order Data
  const [varianDetails, setVarianDetails] = useState([])
// For Unabled/Disabled Submit Button on Get Started Page
  const [unabled, setUnabled] = useState(false)
// Modified Specification
  const [modifiedPrice, setModifiedPrice] = useState([])

  const successVariantData = data => {
    setVarianDetails(data)
  }


  // For Fetch Interior Modification Details
  useEffect(() => {
    const url = "http://localhost:3000/interior.json"
    fetch(url)
      .then(res => res.json())
      .then(result => setInterior(result));
  }, [])

  // For Fetch Exterior Modification Details
  useEffect(() => {
    const url = "http://localhost:3000/exterior.json"
    fetch(url)
      .then(res => res.json())
      .then(result => setExterior(result));
  }, [])

  // For Fetch Car Details
  useEffect(() => {
  }, [])

  // For Fetch Segment
  useEffect(() => {
    // fetch("http://localhost:8081/TVS/Segment")
    const url = "http://localhost:3000/segment.json"
    fetch(url)
      .then(res => res.json())
      .then(result => setSegment(result));
  }, [])

  const onSegClick = () => {
    // fetch(`http://localhost:8081/TVS/Manufacturer/search/${seg_id}`)
    const url = `http://localhost:3000/manufact.json`
    fetch(url)
      .then(res => res.json())
      .then(result => setManufacturer(result));
  }

  const onManuFactClick = () => {
    // fetch(`http://localhost:8081/TVS/Variant/search/${seg_id}/${mfg_id}`)
    fetch(`http://localhost:3000/varient.json`)
      .then(res => res.json())
      .then(result => {
        var temp = JSON.parse(JSON.stringify(result));
        setVariant(temp);
      });
  }

  const onVarientClick = () => {
    // fetch(http://localhost:8081/TVS/Specification/search/1)
    const url = "http://localhost:3000/car.json"
    fetch(url)
      .then(res => res.json())
      .then(result => setCarDetails(result));
    // set_qty(variant_id)
  }
  const onClickSegment = (segIdValue) => {
    set_seg_id(segIdValue)
    set_qty()
  }

  const onClickManufacturer = (mfgIdValue) => {
    set_mfg_id(mfgIdValue)
  }

  const onClickVariant = (varientIdValue) => {
    set_variant_id(varientIdValue)
  }

  const selectInterior = value => {
    setCheckedInterior([...checkedInterior, value])
  }

  // For Interior Modified Specification
  const onClickAirBagChoice = choiceId => {
    setAirBagChoice(choiceId)
  }
  const onClickSeatCoverChoice = choiceId => {
    setSeatCoverChoice(choiceId)
  }

  // For Exterior Modified Specification
  const onClickMirrorChoice = choiceId => {
    setMirrorChoice(choiceId)
  }
  const onWheelCoverChoice = choiceId => {
    setWheelCoverChoice(choiceId)
  }

  const carQty = value => {
    set_qty(value)
    if(qty !== ""){
      setUnabled(true)
    }
  }

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/GetStarted">Get Started</Link></li>
            <li><Link to="/CarDetails">Car Details</Link></li>
            <li><Link to="/PageModification">Modification</Link></li>
            <li><Link to="/AboutUs">About Us</Link></li>
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="/Signup">Signup</Link></li>

            <li><Link to="/ContactUs">Contact Us</Link></li>

          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/"><Welcome /></Route>{/*Nothing */}
          <Route exact path="/GetStarted"><GetStarted
            onClickSegment={onClickSegment}
            onClickManufacturer={onClickManufacturer}
            onClickVariant={onClickVariant}
            onSegClick={onSegClick}
            onManuFactClick={onManuFactClick}
            onVarientClick={onVarientClick}
            seg_id={seg_id}
            mfg_id={mfg_id}
            variant_id={variant_id}
            segment={segment}
            manufacturer={manufacturer}
            variant={variant}
            unabled={unabled}
            carQty={carQty}
            qty={qty}
          />
          </Route>
          <Route exact path="/CarDetails"><CarDetails
            successVariantData={successVariantData}
            wheelCoverChoice={wheelCoverChoice}
            mirrorChoice={mirrorChoice}
            airBagChoice={airBagChoice}
            seatCoverChoice={seatCoverChoice}
            onWheelCoverChoice={onWheelCoverChoice}
            onClickMirrorChoice={onClickMirrorChoice}
            onClickAirBagChoice={onClickAirBagChoice}
            onClickSeatCoverChoice={onClickSeatCoverChoice}
            checkedInterior={checkedInterior}
            selectInterior={selectInterior}
            interior={interior}
            exterior={exterior}
            carDetails={carDetails}
            variant_id={variant_id}
            variant={variant}
            qty={qty} 
            setModifiedPrice={setModifiedPrice}
            /></Route>
          <Route exact path="/PageModification" component={() => <PageModification />} />
          <Route exact path="/PageHeader"><PageHeader /></Route>
          <Route exact path="/AboutUs"><AboutUs /></Route>
          <Route exact path="/Login"><Login /></Route>

          <Route exact path="/ContactUs"><ContactUs /></Route>

          <Route exact path="/Signup"><Signup /></Route>
          <Route exact path="/Bookorder"><Bookorder /></Route>
          <Route exact path="/Nomatch"><Nomatch /></Route>
          <Route exact path="/HeaderMenu"><HeaderMenu /></Route>
          <Route exact path="/components/Navbar/Menu"><Menu /></Route>
          <Route exact path="/OrderSuccessfull"><OrderSuccessfull varianDetails={varianDetails} /></Route>

        </Switch>
      </div>
      <Footer />
    </Router>
  );

}

export default App