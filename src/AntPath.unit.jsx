import React from "react";
import {Map} from "react-leaflet";
import {renderIntoDocument} from "react-dom/test-utils";
import AntPathModule from "leaflet-ant-path";
import AntPath from "./AntPath.jsx";

describe("Follow the react-leaflet component rules", () => {
    let exposedPath, exposedOptions;

    beforeEach(() => {
        exposedPath = null;
        exposedOptions = null;

        spyOn(AntPathModule, "antPath").and.callFake(
            function fakeFactory(path, options) {
                exposedPath = path;
                exposedOptions = options;
                return {path, options};
            }
        );
    });

    it("Should instantiate a ant-path when rendered inside a map", () => {
        renderIntoDocument(<Map><AntPath positions={[]} options={{}}/></Map>);
        expect(AntPathModule.antPath.calls.count()).toEqual(1);
    });

    it("Should pass the components props to the and-path instance", () => {
        const positions = [[1, 2], [3, 4]];
        const opts = {color: "red", pulseColor: "#FFF", delay: 100};

        renderIntoDocument(<Map><AntPath positions={positions} options={opts}/></Map>);
        expect(positions).toEqual(exposedPath);
        expect(opts).toEqual(exposedOptions);
    });
});
