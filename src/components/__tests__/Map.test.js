import React from "react";
import { shallow } from "enzyme";
import Map from "../Map";

describe("Map", function() {
    let mountedMap;

    beforeEach(() => {
        mountedMap = shallow(<Map />);
    });

    it("renders without crashing", () => {
        shallow(<Map />);
    });

    it("contains an image", () => {
        let image = mountedMap.find("img");
        expect(image.length).toBe(1);
    });

    it("displays the none map when no params are given", () => {
        const defaultMap = mountedMap.find('img[src="images/none.png"]');
        expect(defaultMap.length).toBe(1);
    });
});
