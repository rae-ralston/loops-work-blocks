import React from "react";
import { shallow } from "enzyme";
import Button from "../Button";

describe("Button Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Button> hi </Button>);
  });

  it("outputs with default settings", () => {
    expect(wrapper.html()).toEqual("<button class=\"btn primary\" type=\"button\"> hi </button>");
  });
});
