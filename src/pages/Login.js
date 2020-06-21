import React, { Component } from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: "8123462610",
      otp: "",
    };
  }

  onChangeNumber = (e) => {
    this.setState({
      phoneNumber: e.target.value,
    });
  };
  onChangeotp = (e) => {
    this.setState({
      otp: e.target.value,
    });
  };
  onSendOtp = (phoneNumber) => {
    console.log(this.state.phoneNumber);
    axios
      .post("http://3.7.201.98/api/ChangePay/SupportAgent/v1/getClusterDetails", {
        phoneNumber: this.state.phoneNumber,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  onLogin = (phoneNumber) => {
    console.log(this.state.phoneNumber);
    axios
      .post("http://3.7.201.98/api/ChangePay/SupportAgent/v1/Login", {
        phoneNumber: this.state.phoneNumber,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { phoneNumber, otp } = this.state;
    return (
      <div>
        <h2 className="black-text center-align"> LOGIN SUPPORT AGENT </h2>
        <center>
      
        <div class="valign-wrapper row login-box pull-l1">
        <div class ="col xl4  m3"></div>
          <div class=" col  card hoverable s12 pull xl6 m6 pull xl4">
            <form onSubmit={this.onSendOtp}>
              <div class="card-content">
                <span class="card-title">Enter Login details</span>
                <div class="row">
                  <div class="input-field col s12">
                    <label>Mobile Number</label>
                    <input
                      id="first_name"
                      type="number"
                      class="validate"
                      value={phoneNumber}
                      onChange={this.onChangeNumber}
                    />
                  </div>

                  <div className="center-align">
                    <a
                      class="waves-effect waves-light btn "
                      type="submit"
                      onClick={() => {
                        this.onSendOtp();
                      }}
                    >
                      Send Otp
                    </a>
                  </div>
                  <div class="input-field col s12">
                    <label for="email">Otp</label>
                    <input
                      type="number"
                      class="validate"
                      name="number"
                      value={otp}
                      onChange={this.onChangeotp}
                    />
                  </div>
                  <div className="center-align">
                    <a class="waves-effect waves-light btn ">Login</a>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class ="col xl4  m3"></div>
        </div>
        
        </center>
      </div>
    );
  }
}
