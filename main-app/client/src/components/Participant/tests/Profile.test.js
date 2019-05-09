import React from "react";
import Profile from "../Profile";
import { mount } from "enzyme";
import axios from "axios";

jest.mock("axios");

// calls for API and saves user data
describe("Profile - API", () => {
  let renderedComponent = mount(<Profile />);
  const mockResults = {
    status: 200,
    data: [{ first_name: "first_user" }, { first_name: "second_user" }]
  };
  const mockItems = mockResults.data[0];
  const mockError = { message: "Test Error" };

  beforeEach(() => {
    renderedComponent = mount(<Profile />);
  });

  afterEach(() => {
    renderedComponent.unmount();
  });

  it("saves results to state after making successful query", () => {
    axios.get.mockResolvedValueOnce(() => {
      return renderedComponent
      .instance()
      .getParticipant(1)
      .then(res => {
        expect(res).toEqual(mockResults);
        expect(renderedComponent.state("user")).toEqual(mockItems);
        expect(renderedComponent.state("error")).toEqual(null);
      });
    });
  });

  it("does not make API call if there is no ID", () => {
    renderedComponent.instance();
    expect(renderedComponent.state("user")).toEqual(null);
    expect(renderedComponent.state("error")).toEqual(
      "Please add a participant ID to the route."
    );
  });

  it("saves error to state after API call error", () => {
    axios.get.mockRejectedValueOnce(() => {
      return renderedComponent
      .instance()
      .getParticipant(1)
      .then(res => {
        expect(res).toEqual(mockError);
        expect(renderedComponent.state("user")).toEqual(null);
        expect(renderedComponent.state("error")).toEqual(mockError.message);
      });
    });
  });
});
