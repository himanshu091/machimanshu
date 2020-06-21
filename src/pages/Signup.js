import React, { Component } from "react";
import Axios from "axios";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: "8123462610",
      assignedClusters: ["2283996d-7a99-4cbe-8399-6d7a995cbebd"],
    };
  }
  onChangeNumber = (e) => {
    this.setState({
      phoneNumber: e.target.value,
    });
  };
  onChangeCluster = (e) => {
    this.setState({
      assignedClusters: e.target.value,
    });
  };
  onRegister = () => {
    console.log(this.state);
    Axios.post(
      "http://3.7.201.98/api/ChangePay/SupportAgent/v1/registerNewSupportAgent",
      {
        phoneNumber: this.state.phoneNumber,
        assignedClusters: this.state.assignedClusters,
      }
    )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { phoneNumber, assignedClusters } = this.state;
    return (
      <div>
        <h2 className="black-text center-align"> REGISTER SUPPORT AGENT </h2>
        <div class="valign-wrapper row login-box">
        <div class ="col xl4  m3"></div>
          <div class=" col  card hoverable s12 pull xl6 m6 pull xl4">
            <form onSubmit={this.onRegister}>
              <div class="card-content">
                <span class="card-title">Enter Signup details</span>
                <div class="row">
                  <div class="input-field col s12">
                    <input
                      id="first_name"
                      type="number"
                      class="validate"
                      value={this.state.phoneNumber}
                      onChange={this.onChangeNumber}
                    />
                    <label for="first_name">Mobile Number</label>
                  </div>

                  <div class="input-field col s12">
                    <label for="email">assignedClusters</label>
                    <input
                      type="text"
                      class="validate"
                      name="number"
                      value={this.state.assignedClusters}
                      onChange={this.onChangeCluster}
                    />
                  </div>
                  <div className="center-align">
                    <a
                      class="waves-effect waves-light btn "
                      type="submit"
                      onClick={() => {
                        this.onRegister();
                      }}
                    >
                      Signup
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class ="col xl4  m3"></div>
        </div>
      </div>
    );
  }
}
