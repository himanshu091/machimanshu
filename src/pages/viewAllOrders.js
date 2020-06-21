import React, { Component } from "react";
import "../App.css";

export default class viewAllOrders extends Component {
  componentDidMount() {
    const M = window.M;
    M.Tabs.init(this.Tabs);
  }
  render() {
    return (
      <div>
        <h4 className="center-align">Merchant Name</h4>
        <h5 className="center-align">Ph No-8785546567</h5>
        <ul
          class="tabs tabs-fixed-width tab-demo z-depth-1"
          ref={(Tabs) => {
            this.Tabs = Tabs;
          }}
          id="tabs-swipe-demo"
        >
          <li class="tab">
            <a href="#test1">Unconfirmed</a>
          </li>
          <li class="tab">
            <a class="active" href="#test2">
              Confirmed
            </a>
          </li>
          <li class="tab">
            <a href="#test3">Ready For Delivery</a>
          </li>
        </ul>
        <div id="test1" class="col s12">
          <table className="responsive-table">
            <thead>
              <tr>
                <th>
                  Select
                  <label style={{ margin: "5%" }}>
                    <input type="checkbox" />
                  </label>
                </th>
                <th>OTP</th>
                <th>Items</th>
                <th>Customer ph No</th>
                <th>Placed At</th>
                <th>Merchant Name</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <label style={{ margin: "5%" }}>
                    <input type="checkbox" />
                    <span>COD</span>
                  </label>
                </td>
                <td>235345</td>
                <td>Alvin</td>
                <td>8767565454</td>
                <td>3:00 PM</td>
                <td>Ramesh</td>
              </tr>
              <tr>
                <td>
                  <label style={{ margin: "5%" }}>
                    <input type="checkbox" />
                    <span>COD</span>
                  </label>
                </td>
                <td>34545</td>
                <td>Alan</td>
                <td>8767565454</td>
                <td>3:00 PM</td>
                <td>Ramesh</td>
              </tr>
              <tr>
                <td>
                  <label style={{ margin: "5%" }}>
                    <input type="checkbox" />
                    <span>COD</span>
                  </label>
                </td>
                <td>43554</td>
                <td>Jonathan</td>
                <td>8767565454</td>
                <td>3:00 PM</td>
                <td>Ramesh</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="test2" class="col s12">
          <table className="responsive-table">
            <thead>
              <tr>
                <th>
                  Select
                  <label style={{ margin: "5%" }}>
                    <input type="checkbox" />
                  </label>
                </th>
                <th>OTP</th>
                <th>Items</th>
                <th>Customer ph No</th>
                <th>Placed At</th>
                <th>Merchant Name</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <label style={{ margin: "5%" }}>
                    <input type="checkbox" />
                    <span>COD</span>
                  </label>
                </td>
                <td>235345</td>
                <td>Alvin</td>
                <td>8767565454</td>
                <td>3:00 PM</td>
                <td>Ramesh</td>
              </tr>
              <tr>
                <td>
                  <label style={{ margin: "5%" }}>
                    <input type="checkbox" />
                    <span>COD</span>
                  </label>
                </td>
                <td>34545</td>
                <td>Alan</td>
                <td>8767565454</td>
                <td>3:00 PM</td>
                <td>Ramesh</td>
              </tr>
              <tr>
                <td>
                  <label style={{ margin: "5%" }}>
                    <input type="checkbox" />
                    <span>COD</span>
                  </label>
                </td>
                <td>43554</td>
                <td>Jonathan</td>
                <td>8767565454</td>
                <td>3:00 PM</td>
                <td>Ramesh</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="test3" class="col s12">
          <table className="responsive-table">
            <thead>
              <tr>
                <th>
                  Select
                  <label style={{ margin: "5%" }}>
                    <input type="checkbox" />
                  </label>
                </th>
                <th>OTP</th>
                <th>Items</th>
                <th>Customer ph No</th>
                <th>Placed At</th>
                <th>Merchant Name</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <label style={{ margin: "5%" }}>
                    <input type="checkbox" />
                    <span>COD</span>
                  </label>
                </td>
                <td>235345</td>
                <td>Alvin</td>
                <td>8767565454</td>
                <td>3:00 PM</td>
                <td>Ramesh</td>
              </tr>
              <tr>
                <td>
                  <label style={{ margin: "5%" }}>
                    <input type="checkbox" />
                    <span>COD</span>
                  </label>
                </td>
                <td>34545</td>
                <td>Alan</td>
                <td>8767565454</td>
                <td>3:00 PM</td>
                <td>Ramesh</td>
              </tr>
              <tr>
                <td>
                  <label style={{ margin: "5%" }}>
                    <input type="checkbox" />
                    <span>COD</span>
                  </label>
                </td>
                <td>43554</td>
                <td>Jonathan</td>
                <td>8767565454</td>
                <td>3:00 PM</td>
                <td>Ramesh</td>
              </tr>
            </tbody>
          </table>
        </div>
        <center>
          <a class="waves-effect waves-light btn col-xl2 bottomButton ">
            Confirm Order
          </a>
          <a class="waves-effect waves-light btn col-xl2 bottomButton ">
            Cancel Order
          </a>
          <a class="waves-effect waves-light btn col-xl2 bottomButton ">
            Refund
          </a>
        </center>
        <div className="row">
        <div class="col s12 col xl6">
          <h5 className="center-align">Notify Merchants</h5>
          <input type="text" className="input-field" placeholder="Title" />
          <input type="text" className="input-field" placeholder="Message" />
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
        </div>
      </div>
    );
  }
}
