import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div>
        <div class="card">
          <div class="card-image">
            <img src="https://images.unsplash.com/photo-1538370965046-79c0d6907d47?ixlib=rb-1.2.1&w=1000&q=80" />
            <span class="card-title">Card Title</span>
          </div>
          <div class="card-content">
            <p>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively.
            </p>
          </div>
          <div class="card-action">
            <a href="#">This is a link</a>
          </div>
        </div>
      </div>
    );
  }
}
