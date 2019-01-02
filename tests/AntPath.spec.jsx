import React from "react";
import { Map } from "react-leaflet";
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
      <Map>
        <AntPath positions={[]} options={{}} />
      </Map>
    );
    expect(antPathSpy.calledOnce).toBe(true);
  });

  it("Should pass the components props to the and-path instance", () => {
    const positions = [[1, 2], [3, 4]];
    const options = { color: "red", pulseColor: "#FFF", delay: 100 };

    const wrapper = mount(
      <Map>
        <AntPath positions={positions} options={options} />
      </Map>
    );
    
    expect(wrapper.childAt(0).childAt(0).props()).toEqual({ positions, options });
  });
});
