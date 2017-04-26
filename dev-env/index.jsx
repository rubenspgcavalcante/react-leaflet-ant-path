import React from "react";
import {render} from  "react-dom";

import "materialize-css/dist/css/materialize.min.css";
import "leaflet/dist/leaflet.css";
import "./style/dev-env.sass";
import App from "./App";



render(<App/>, document.getElementById("app"));