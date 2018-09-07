import React, { Component } from "react";
import { Map, TileLayer } from "react-leaflet";

import AntPath from "../src/AntPath";
import Logger from "./utils/Logger";
import path from "./sample-path.json";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      path,
      options: { color: "red" },
      messages: ["Waiting change"]
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState(() => ({ options: { color: "blue" } }));
      this.setState(() => ({ messages: [this.state.options] }));
    }, 3000);
  }

  render() {
    return (
      <div>
        <nav className="top-nav blue darken-1">
          <div className="nav-wrapper">
            <a className="brand-logo title">React AntPath Dev Env</a>
          </div>
        </nav>
        <div id="container" className="row">
          <Map
            center={[-3.75094, -38.576687]}
            zoom={10}
            className="map-container"
          >
            <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
            <AntPath positions={this.state.path} options={this.state.options} />
          </Map>
        </div>
        <div className="row" id="log-container">
          {this.state.messages.map((msg, idx) => (
            <Logger key={idx} message={msg} />
          ))}
        </div>
      </div>
    );
  }
}
