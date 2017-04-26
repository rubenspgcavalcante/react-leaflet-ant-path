import React, {Component, PropTypes} from "react";

export default class Logger extends Component {
    static propTypes = {
        message: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
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

