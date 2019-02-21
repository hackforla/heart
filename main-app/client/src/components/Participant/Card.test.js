import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import { shallow, mount } from 'enzyme';
import axios from 'axios';

jest.mock('axios');

// togglingBtn changes edit mode
it('saves user input correctly in state in Edit Mode', () => {
  const wrapper = mount(<Card />);
  wrapper.instance().toggleEditView();
  expect(wrapper.state().editing).toEqual(true)
  wrapper.instance().toggleEditView();
  expect(wrapper.state().editing).toEqual(false)
})

// initializes form data in state correctly
it('saves user input correctly in state in Edit Mode', () => {
  const wrapper = mount(<Card />);
  wrapper.setState({ editing: true });
  const input = wrapper.find('#input-first_name');
  input.instance().value = 'test';
  input.simulate('change');
  expect(wrapper.state().localUserInfo).toMatchObject({ first_name: 'test' })
})


// does not save user input in non-Edit Mode



// hitting save triggers an API call when there is a change

// on api call success, the returned result matches the user input saved in local state
// clears local storage

// on api call error, sets an error message and saves the local state to 
// localStorage -- asking to save later.

// on new api call, resets the error message

// hitting save does NOT trigger an API call if there is NO change

// 