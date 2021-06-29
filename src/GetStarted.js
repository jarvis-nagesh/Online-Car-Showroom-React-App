import React from 'react';
import { Link } from 'react-router-dom';

const GetStarted = props => {
  return (
    <div>
      <div className="row">
        <div className="col-md-6 offset-md-4">
          <div style={{ height: 100 }}></div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <h4>Segment:</h4>
            </div>
            <div className="form-group col-md-6">
              <select class="custom-select sources" name="segment" onClick={props.onSegClick} onChange={event => props.onClickSegment(event.target.value)} placeholder="segment">
                <option>--Choose Segment--</option>
                {props.segment.map((seg) =>
                  <option key={seg.seg_id} value={seg.seg_id}>{seg.seg_name}</option>)}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-4">
              <h4>Manufacturer:</h4>
            </div>
            <div className="form-group col-md-6">
              <select class="custom-select sources" name="manufacturer" onClick={props.onManuFactClick} onChange={event => props.onClickManufacturer(event.target.value)} placeholder="manufacturer">
                <option >--Choose Manufacturer--</option>
                {
                  props.manufacturer.map((mfg) => {
                    let manuFact;
                    if (props.seg_id == mfg.seg_id) {
                      manuFact = <option key={mfg.mfg_id} value={mfg.mfg_id}  >{mfg.mfg_name}</option>
                    }
                    return manuFact
                  })
                }
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-4">
              <h4>Varient:</h4>
            </div>
            <div className="form-group col-md-6">
              <select class="custom-select sources" name="variant" onClick={props.onVarientClick} onChange={event => props.onClickVariant(event.target.value)} placeholder="variant">
                <option>--Choose Variant--</option>
                {
                  props.variant.map((seg) => {
                    let vari;
                    if (props.seg_id == seg.seg_id && props.mfg_id == seg.mfg_id) {
                      vari = <option key={seg.variant_id} value={seg.variant_id}  >{seg.variant_name}</option>
                    }
                    return vari
                  }
                  )}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-4">
              <h4>Quantity:</h4>
            </div>
            <div className="form-group col-md-6">
              <input className="custom-select" type="number" value={props.qty} onChange={event => props.carQty(event.target.value)} />
            </div>
          </div>
          <div style={{ height: 20 }}></div>
          <div className="form-row">
            <div className="form-group col-md-3">
            </div>
            <div className="form-group col-md-6">
              <Link to="./CarDetails"><button  type="submit" style={{ width: 250, marginLeft: 100 }} className="btn btn-primary" disabled={(props.qty) == undefined ? true:false}>Submit</button></Link> 
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default GetStarted;
