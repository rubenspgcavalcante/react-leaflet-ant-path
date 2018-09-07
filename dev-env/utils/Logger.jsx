import React, {Component} from "react";
import {oneOfType, string, object} from "prop-types";

export default class Logger extends Component {
    static propTypes = {
        message: oneOfType([string, object])
    };

    _format(msg) {
        return typeof msg === "string" ? msg : JSON.stringify(msg, null, 2);
    }

    render() {
        return (
            <div className="col m6 s12">
                <div className="card">
                    <div className="card-content">
                        <span className="card-title">Logger output</span>
                        <pre>{this._format(this.props.message)}</pre>
                    </div>
                </div>
            </div>
        )
    }
}

