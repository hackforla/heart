import React from "react";
import { shallow } from "enzyme";
import LoginPage from "../loginPage";
import LoginForm from "../loginForm";

describe("<LoginPage />", () => {
  let wrapper;
  const baseProps = {
    location: {
      hash: "",
      key: "",
      pathname: "",
      search: "",
      state: {
        from: {
          hash: "",
          pathname: "",
          search: ""
        }
      }
    },
    onNewLogin: jest.fn()
  };

  beforeEach(() => {
    wrapper = shallow(
      <LoginPage
        location={baseProps.location}
        onNewLogin={baseProps.onNewLogin}
      />
    );
  });

  it("shallow renders", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("renders a LoginForm Component", () => {
    expect(wrapper.find(LoginForm)).toHaveLength(1);
  });
  
});
