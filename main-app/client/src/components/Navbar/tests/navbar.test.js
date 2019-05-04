import React from "react";
import { shallow } from "enzyme";
import Navbar from "../navbar";
import { Link } from "react-router-dom";
import { UserAuth } from "../../../utilities/auth";

describe("<Navbar /> unAuthorized", () => {
  let wrapper;
  let instance;
  const baseProps = {
    onLogout: jest.fn()
  };

  beforeEach(() => {
    UserAuth.loggedIn = jest.fn(() => false);
    wrapper = shallow(<Navbar {...baseProps} />);
    instance = wrapper.instance();
  });

  it("shallow snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should be a class component", () => {
    expect(instance).toBeInstanceOf(Navbar);
  });

  it("renders atleast one link with route to login", () => {
    expect(wrapper.find(Link)).toHaveLength(1);
    expect(wrapper.find(Link).prop("to")).toEqual("/login");
  });

  it("renders a login Link when NOT Authorized", () => {
    expect(UserAuth.loggedIn).toHaveBeenCalledTimes(1);
    expect(
      wrapper.containsMatchingElement(<Link to="/login">Login</Link>)
    ).toBeTruthy();
  });

  describe("<Navbar /> Authorized", () => {
    beforeEach(() => {
      UserAuth.loggedIn = jest.fn(() => true);
      wrapper = shallow(<Navbar {...baseProps} />);
    });

    it("onlogout event was called once", () => {
      expect(UserAuth.loggedIn).toHaveBeenCalledTimes(1);
    });

    it("renders a logout Link when Authorized", () => {
      expect(
        wrapper.containsMatchingElement(<Link to="/login"> Log out </Link>)
      ).toBeTruthy();
    });
  });
});
