import { createElementHook, createPathHook, createContainerComponent } from "@react-leaflet/core"
import { antPath } from "leaflet-ant-path";
import PropTypes from "prop-types";

function createAntPath(props, context) {
  const instance = antPath(props.positions, props.options)
  return { instance, context: { ...context, overlayContainer: instance } }
}

function updateAntPath(instance, props, prevProps) {
  if (prevProps.positions !== props.positions) {
    instance.setLatLngs(props.positions);
  }
  instance.setStyle({ ...prevProps.options, ...props.options });
}


const useAntPathElement = createElementHook(createAntPath, updateAntPath)
const useAntPath = createPathHook(useAntPathElement)
const AntPath = createContainerComponent(useAntPath)


AntPath.propTypes = {
  positions: PropTypes.array.isRequired,
  options: PropTypes.object
};

AntPath.defaultProps = {};

export default AntPath
