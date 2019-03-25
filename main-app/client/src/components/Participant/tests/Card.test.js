// import React from "react";
// import Card from "../components/Card";
// import { mount } from "enzyme";

// jest.mock("axios");

// it("clicking edit button toggles edit mode", () => {
//   const wrapper = mount(<Card />);
//   const button = wrapper.find(".user-card--edit-btn");
//   button.simulate("click");
//   expect(wrapper.state().editing).toEqual(true);
//   button.simulate("click");
//   expect(wrapper.state().editing).toEqual(false);
// });

// it("saves user input correctly in state while in Edit Mode", () => {
//   const wrapper = mount(<Card />);
//   wrapper.setState({ editing: true });
//   const input = wrapper.find("#input-first_name");
//   input.instance().value = "test";
//   input.simulate("change");
//   expect(wrapper.state().localUserInfo).toMatchObject({ first_name: "test" });
// });

// it("does not save user input in non-Edit Mode", () => {
//   const wrapper = mount(<Card />);
//   wrapper.setState({ editing: false });
//   const input = wrapper.find("#input-first_name");
//   expect(input).toHaveLength(0);
// });

// it("changeInFormState is true when there is a change", () => {
//   const wrapper = mount(<Card />);
//   wrapper.setState({ editing: true });
//   const input = wrapper.find("#input-first_name");
//   input.instance().value = "test";
//   input.simulate("change");
//   expect(wrapper.state().changeInFormState).toEqual(true);
// });

// it("changeInFormState is false when there is no change", () => {
//   const wrapper = mount(<Card />);
//   wrapper.setState({ editing: true });
//   expect(wrapper.state().changeInFormState).toEqual(false);
// });

// it("save does NOT trigger an API call if there is NO change in state", () => {});

// // hitting save triggers an API call when there is a change

// // on api call success, the returned result matches the user input saved in local state
// // clears local storage

// // on api call error, sets an error message and saves the local state to
// // localStorage -- asking to save later.

// // on new api call, resets the error message

// // aka is saved correctly (split into array when ',' is found), other wise, single string in an array
