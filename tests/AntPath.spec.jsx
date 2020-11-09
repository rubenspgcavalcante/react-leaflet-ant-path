import React from "react";
import { MapContainer } from "react-leaflet";
import { mount } from "./enzyme";
import { spy } from "sinon";
import AntPath from "../src/AntPathContainer";

describe("Follow the react-leaflet component rules", () => {
  const antPathSpy = spy(AntPath, "render");

  beforeEach(() => {
    antPathSpy.resetHistory();
  });

  it("Should instantiate a ant-path when rendered inside a map", () => {
    mount(
      <MapContainer>
        <AntPath positions={[]} options={{}} />
      </MapContainer>
    );
    expect(antPathSpy.calledOnce).toBe(true);
  });

  it("Should pass the components props to the and-path instance", () => {
    const positions = [[1, 2], [3, 4]];
    const options = { color: "red", pulseColor: "#FFF", delay: 100 };

    const wrapper = mount(
      <MapContainer>
        <AntPath positions={positions} options={options} />
      </MapContainer>
    );
    
    expect(wrapper.childAt(0).childAt(0).props()).toEqual({ positions, options });
  });
});
