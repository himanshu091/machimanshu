import React, { Component } from "react";
import ImagePicker from "react-image-picker";
import "react-image-picker/dist/index.css";

export default class AddMerchant extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: null
    }
    this.onPick = this.onPick.bind(this)
  }
 
  onPick = (image) => {
    this.setState({image})
  }

  componentDidMount() {
    const M = window.M;
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".timepicker");
      var instances = M.Timepicker.init(elems, {});
    });
  }
  render() {
    return (
      <div>
        <h2 className="black-text center-align"> Add New Merchant </h2>

        <div class="valign-wrapper row login-box pull-l1">
          <div class="col xl4  m3"></div>
          <div class=" col  card hoverable s12 pull xl6 m6 pull xl4">
            <form onSubmit={this.onSendOtp}>
              <div class="card-content">
                <span class="card-title">Enter details</span>
                <div class="row">
                  <div class="input-field col s12">
                    <input id="password" type="password" class="validate" />
                    <label for="password">Phone Number</label>
                  </div>
                  <div class="input-field col s12">
                    <input id="password" type="password" class="validate" />
                    <label for="password">Shop Name</label>
                  </div>
                  <div class="input-field col s12">
                    <input id="password" type="password" class="validate" />
                    <label for="password">Owner Name</label>
                  </div>
                  <span class="card-title">Address</span>
                  <div class="input-field col s12">
                    <input id="password" type="password" class="validate" />
                    <label for="password">Line 1</label>
                  </div>
                  <div class="input-field col s12">
                    <input id="password" type="password" class="validate" />
                    <label for="password">Line 2</label>
                  </div>
                  <div class="input-field col s12">
                    <input id="password" type="password" class="validate" />
                    <label for="password">Land Mark</label>
                  </div>
                  <label>Opening Time</label>
                  <input type="text" class="timepicker" />
                  <label>Closing Time</label>
                  <input type="text" class="timepicker" />
                </div>
                <span class="card-title">Flags</span>
                <label style={{ margin: "5%" }}>
                  <input type="checkbox" />
                  <span>COD</span>
                </label>
                <label style={{ margin: "5%" }}>
                  <input type="checkbox" />
                  <span>Online</span>
                </label>
                <label style={{ margin: "5%" }}>
                  <input type="checkbox" />
                  <span>Delivery</span>
                </label>
                
                <label className="btn btn-block btn-success" style={{marginTop:"4%", marginBottom:"4%"}}>
                  <input
                    onInput={this.onPick}
                    type="file"
                    name="photo"
                    accept="image"
                    placeholder="choose a file"
                  />
                </label>
                <span class="card-title">Sevice Offered</span>
                <label style={{ margin: "5%" }}>
                  <input type="checkbox" />
                  <span>COD</span>
                </label>
                <label style={{ margin: "5%" }}>
                  <input type="checkbox" />
                  <span>Online</span>
                </label>
                <label style={{ margin: "5%" }}>
                  <input type="checkbox" />
                  <span>Delivery</span>
                </label>
                <div class="row" style={{marginTop:"5%"}}>
                  <div className="center-align">
                    <a class="waves-effect waves-light btn ">
                      Add New Merchant
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="col xl4  m3"></div>
        </div>
      </div>
    );
  }
}
