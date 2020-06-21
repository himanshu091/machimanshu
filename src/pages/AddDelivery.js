import React, { Component } from "react";

export default class AddDelivery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
    };
    this.onPick = this.onPick.bind(this);
  }

  onPick = (image) => {
    this.setState({ image });
  };
  componentDidMount() {
    const M = window.M;
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll("select");
      var instances = M.FormSelect.init(elems, {});
    
      
    });
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.timepicker');
      var instances = M.Timepicker.init(elems, {});
    });
    
  }
  render() {
    return (
      <div>
        <h2 className="black-text center-align"> Add New Delivery Agents </h2>

        <div class="valign-wrapper row login-box pull-l1">
          <div class="col xl4  m3"></div>
          <div class=" col  card hoverable s12 pull xl6 m6 pull xl4">
            <form>
              <div class="card-content">
                <span class="card-title">Enter details</span>
                <div class="row">
                  <div class="input-field col s12">
                    <input id="password" type="password" class="validate" />
                    <label for="password">Phone Number</label>
                  </div>
                  <div class="input-field col s12">
                    <input id="password" type="password" class="validate" />
                    <label for="password">Delivery Agent Name</label>
                  </div>
                  <div class="input-field col s12">
                    <select multiple>
                      <option value="" disabled selected>
                        Choose Merchant
                      </option>
                      <option value="1">Option 1</option>
                      <option value="2">Option 2</option>
                      <option value="3">Option 3</option>
                    </select>
                    <label>Associated Merchants</label>
                  </div>
                  <div class="input-field col s12">
                  <span>DP of delivery agent</span><br/>
                    <input
                      type="file"
                      onInput={this.onPick}
                      type="file"
                      name="photo"
                      accept="image"
                    />
                  </div>
                  <label>Opening Time</label>
                  <input type="text" class="timepicker" />
                  <label>Closing Time</label>
                  <input type="text" class="timepicker" />

                  <div className="center-align" style={{ marginTop: "5%" }}>
                    <a class="waves-effect waves-light btn ">
                      Add Delivery Agents
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
