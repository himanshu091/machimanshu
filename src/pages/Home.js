import React, { Component } from "react";
import "../App.css";
import Axios from "axios";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { Link } from "react-router-dom";

export default class Home extends Component {
  componentDidMount() {
    M.Tabs.init(this.Tabs);
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: "8123462610",
      assignedClusters: "2283996d-7a99-4cbe-8399-6d7a995cbebd",
      title: "",
      Message: "",
    };
  }
  onChangeTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  onChangeMessage = (e) => {
    this.setState({
      Message: e.target.value,
    });
  };

  getMerchants = () => {
    const token =
      "jdbsuhvbsduvysbbuiwivbsbsdfiyeuiqh74567qfbi1y3r7138ry8713gfubvheufu2by82b823yf2u23vf2v3fuyv23yufv";
    Axios.post(
      "http://3.7.201.98/api/ChangePay/SupportAgent/v1/getMerchantsInCluster",
      {
        headers: {
          Authorization: `Basic ${token}`,
        },
        data: {
          phoneNumber: this.state.phoneNumber,
          assignedClusters: this.state.assignedClusters,
        },
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
    return (
      <div>
        <div class="row">
          <button class="accordion">
            <h4>Banner Board</h4>
          </button>
          <div class="panel">
            <div class="card">
              <div class="row">
                <div class="col s12 col xl6">
                  <h5 className="center-align">Notify Merchants</h5>
                  <input
                    type="text"
                    className="input-field"
                    value={this.state.title}
                    placeholder="Title"
                    onChange={this.onChangeTitle}
                  />
                  <input
                    type="text"
                    className="input-field"
                    value={this.state.Message}
                    placeholder="Message"
                    onChange={this.onChangeMessage}
                  />
                  <div className="center-align">
                    <button
                      class="button send mr"
                      onClick={() => {
                        this.getMerchants();
                      }}
                    >
                      <span>Send Notification</span>
                    </button>
                  </div>
                </div>
                <div class="  col s12 col xl6">
                  <h5 className="center-align">Statistics </h5>
                  <span className="orderStats">Total Orders : 567</span>
                  <br />
                  <span className="orderStats">Total Revenue : $6785</span>
                  <br />
                  <span className="orderStats">
                    Total Delivered Orders : 64
                  </span>
                  <br />
                  <span className="orderStats">
                    Total Cancelled Orders : 10
                  </span>
                  <br />
                  <Link to="/AllOrders">
                    <button class="button">
                      <span>View All Orders </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <button class="accordion">
            <h4>Merchant Board</h4>
          </button>
          <div class="panel">
            <div class="col-lg 3 col-md-3 col-sm-12 col-xs-12">
              <button class="accordion">
                Shop Name 1
                <div>
                  <a class="waves-effect waves-light btn edit">Edit</a>
                </div>
              </button>

              <div class="panel">
                <div class="card">
                  <div class="row">
                    <div class="col s12 col xl6">
                      <h5 className="center-align">Live Order Stats </h5>
                      <span className="orderStats">
                        Owner Name: Ramesh Kumar{" "}
                      </span>
                      <br />
                      <span className="orderStats">
                        Phome Number: 8767565454{" "}
                      </span>
                      <br />
                      <span className="orderStats">Timings: 3:00 PM </span>
                      <br />
                      <span className="orderStats">
                        Service Offered: product delivery
                      </span>
                      <br />

                      <div className="noti">
                        <input
                          type="text"
                          className="input-field"
                          value={this.state.title}
                          placeholder="Title"
                          onChange={this.onChangeTitle}
                        ></input>
                        <input
                          type="text"
                          className="input-field"
                          value={this.state.Message}
                          placeholder="Message"
                          onChange={this.onChangeMessage}
                        ></input>
                        <div className="center-align">
                          <button class="button send mr">
                            <span>Notify Merchants</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="  col s12 col xl6">
                      <h5 className="center-align">Live Order Stats </h5>
                      <span className="orderStats">Unconfirmed Orders : </span>
                      <br />
                      <span className="orderStats">confirmed Orders: </span>
                      <br />
                      <span className="orderStats">Ready for delivery: </span>
                      <br />

                      <Link to="/AllOrders">
                        <button class="button">
                          <span>View All Orders </span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <center>
              <Link to="./AddNewMerchantAgent">
                <a class="waves-effect waves-light btn col-xl2 ">
                  Add New Merchant
                </a>
              </Link>
            </center>
          </div>

          <button class="accordion">
            <h4>Delivery Board</h4>
          </button>
          <div class="panel">
            <ul
              ref={(Tabs) => {
                this.Tabs = Tabs;
              }}
              id="tabs-swipe-demo"
              className="tabs tabbing"
            >
              <li className="tab col s12 col xl6">
                <a href="#test-swipe-1">Delivery agents</a>
              </li>
              <li className="tab col s12 col xl6">
                <a href="#test-swipe-2">Smart box</a>
              </li>
            </ul>

            <div id="test-swipe-1" className="col s12 col xl12 ">
              <button class="accordion">Delivery Agent Name</button>
              <div class="panel">
                <div class="card">
                  <div class="row">
                    <div class="col s12 col xl6">
                      <h5 className="center-align">Notify Merchants</h5>
                      <span className="orderStats">
                        Phone Number : 9879878964
                      </span>
                      <br />
                      <span className="orderStats">Merchants: 6</span>
                      <br />
                      <div className="center-align margin">
                        <button
                          class="button send mr"
                          onClick={() => {
                            this.getMerchants();
                          }}
                        >
                          <span>Send Notification</span>
                        </button>
                      </div>
                    </div>
                    <div class="  col s12 col xl6">
                      <h5 className="center-align">Statistics </h5>
                      <span className="orderStats">Order Delivered : 56</span>
                      <br />
                      <span className="orderStats">Current Order: 6</span>
                      <br />
                      <div className="margin">
                        <Link to="/AllOrders">
                          <button class="button">
                            <span>View All Orders </span>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="test-swipe-2" className="col s12 col xl12">
              <button class="accordion">Smart Box name 1</button>
              <div class="panel">
                <div class="card">
                  <table className="responsive-table highlight">
                    <thead>
                      <tr>
                        <th>Compartment</th>
                        <th>Status</th>
                        <th>Customer No.</th>
                        <th>Order Id</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>
                          <label>
                            <input type="checkbox" />
                            <span>1</span>
                          </label>
                        </td>
                        <td>3:00 PM</td>
                        <td>8767654654</td>
                        <td> 404-0121524-590191</td>
                      </tr>
                      <tr>
                        <td>
                          <label>
                            <input type="checkbox" />
                            <span>1</span>
                          </label>
                        </td>
                        <td>3:00 PM</td>
                        <td>8767654654</td>
                        <td> 404-0121524-590191</td>
                      </tr>
                      <tr>
                        <td>
                          <label>
                            <input type="checkbox" />
                            <span>1</span>
                          </label>
                        </td>
                        <td>3:00 PM</td>
                        <td>8767654654</td>
                        <td> 404-0121524-590191</td>
                      </tr>
                      <tr>
                        <td>
                          <label>
                            <input type="checkbox" />
                            <span>1</span>
                          </label>
                        </td>
                        <td>3:00 PM</td>
                        <td>8767654654</td>
                        <td> 404-0121524-590191</td>
                      </tr>
                    </tbody>
                  </table>
                  <center>
                    <a class="waves-effect waves-light btn col-xl2 bottomButton ">
                      Open
                    </a>
                    <a class="waves-effect waves-light btn col-xl2 bottomButton ">
                      Clear
                    </a>
                    <a class="waves-effect waves-light btn col-xl2 bottomButton ">
                      Deactivate
                    </a>
                  </center>
                </div>
              </div>
            </div>

            <center>
              <Link to="./AddNewDeliveryAgent">
                <a class="waves-effect waves-light btn col-xl2 ">
                  Add New Delivery Agents
                </a>
              </Link>
            </center>
          </div>
        </div>
      </div>
    );
  }
}
