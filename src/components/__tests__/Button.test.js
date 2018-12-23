import React from "react";
import { shallow } from "enzyme";
import Button from "../Button";

describe("Button", function() {
    let mountedButton;
    beforeEach(() => {
        mountedButton = shallow(<Button />);
    });

    it("renders without crashing", () => {
        shallow(<Button />);
    });

    it("renders a button", () => {
        const button = mountedButton.find("button");
        expect(button.length).toBe(1);
    });

    it("call a function passed to it when clicked", () => {
        const mockCallback = jest.fn();
        const mountedButtonWithCallback = shallow(
            <Button handleClick={mockCallback} />
        );
        mountedButtonWithCallback.find("button").simulate("click");
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});

describe("When a location is passed to it", () => {
    let mountedButton;
    let props;

    beforeEach(() => {
        props = {
            location: "Location1"
        };
        mountedButton = shallow(<Button {...props} />);
    });

    it("displays the location", () => {
        const locName = mountedButton.find(".location-button");
        expect(locName.text()).toEqual("Location1");
    });
});

describe("When no location is passed in", () => {
    let mountedButton;
    let props;

    beforeEach(() => {
        props = {
            location: undefined
        };
        mountedButton = shallow(<Button {...props} />);
    });

    it("displays the location", () => {
        const locName = mountedButton.find(".location-button");
        expect(locName.text()).toEqual("All Locations");
    });
});
