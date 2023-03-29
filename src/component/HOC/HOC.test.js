import React from "react";
import { shallow } from "enzyme";
import HOC from "./HOC.js";

describe("Test the HOC component", () => {
  const list = ["Car", "Bike", "Plane", "Pluto"];
  const MockListComponent = () => {
    return <div></div>;
  };
  const WrapperComponent = HOC(<MockListComponent />);
  test("Should render the list properly", () => {
    const wrapper = shallow(<WrapperComponent data={list} />);
    expect(wrapper).not.toBe(null);
  });

  test("Should filter the term properly", () => {
    const wrapper = shallow(<WrapperComponent data={list} />);
    wrapper
      .find("input")
      .at(0)
      .simulate("change", { target: { value: "a" } });
    const listItems = wrapper.find(".list");
    expect(listItems.find(".list")).to.have.lengthOf(2);
  });
});
