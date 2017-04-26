import {PropTypes} from "react";
import {Path} from "react-leaflet";
import {antPath} from "leaflet-ant-path";

export default class AntPathComponent extends Path {
    static defaultProps = {};

    static propTypes = {
        positions: PropTypes.array.isRequired,
        options: PropTypes.object
    };

    createLeafletElement(props) {
        const {positions, options} = props;
        return antPath(positions, options);
    }

    updateLeafletElement(fromProps, toProps) {
        if (toProps.positions !== fromProps.positions) {
            this.leafletElement.setLatLngs(toProps.positions)
        }
        this.leafletElement.setStyle({...fromProps.options, ...toProps.options});
    }
}