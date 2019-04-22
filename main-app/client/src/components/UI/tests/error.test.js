import React from "react";
import Error from "../Error";
import { shallow } from "enzyme";

describe("<Error />", () => {
  let wrapper;

  it("matches snapshot", () => {
    wrapper = <Error />;
    expect(wrapper).toMatchSnapshot();
  });

  it("renders single div without error prop", () => {
    wrapper = shallow(<Error error={null} />);
    expect(wrapper.find("div")).toHaveLength(1);
    expect(wrapper.find("div").prop("className")).toEqual("error-container");
  });

  it("renders error when error received", () => {
    wrapper = shallow(<Error error="err msg" />);
    let errDiv = wrapper.find("div").last();
    expect(errDiv.prop("className")).toEqual("error-message");
    expect(errDiv.text()).toEqual("err msg");
  });
});
