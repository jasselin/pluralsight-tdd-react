import React from "react";
import { shallow } from "enzyme";
import Map from "../Map";

describe("Map", function() {
    let mountedMap;
    let props;

    beforeEach(() => {
        props = {
            location: undefined,
            imageName: "testmap.png"
        };
        mountedMap = shallow(<Map imageName={props.imageName} />);
    });

    it("renders without crashing", () => {
        shallow(<Map />);
    });

    it("contains an image", () => {
        let image = mountedMap.find("img");
        expect(image.length).toBe(1);
    });

    it("displays the none map when no params are given", () => {
        let defaultMap = shallow(<Map />);
        const defaultImage = defaultMap.find('img[src="images/none.png"]');
        expect(defaultImage.length).toBe(1);
    });

    it("displays the map imageName passed to it", () => {
        const testMap = mountedMap.find("img[src='images/testmap.png']");
        expect(testMap.length).toBe(1);
    });
});
