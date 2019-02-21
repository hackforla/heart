import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import { shallow, mount } from 'enzyme';
import axios from 'axios';

jest.mock('axios');

// initializes form data in state correctly

it('saves user input correctly in state in Edit Mode', () => {
  const wrapper = mount(<Card />);
  // set edit mode to true
  // const input = wrapper.find('#query-input');
  // input.instance().value = 'test';
  // input.instance().name = 'input';
  // input.simulate('change');
  // expect(wrapper.state().input).toEqual('test')
})

it('does not save user input in non-Edit Mode', () => {
  const wrapper = mount(<Card />);
  // set edit mode to false
  // const input = wrapper.find('#query-input');
  // input.instance().value = 'test';
  // input.instance().name = 'input';
  // input.simulate('change');
  // expect(wrapper.state().input).toEqual('test')
})

// hitting save triggers an API call when there is a change

// on api call success, the returned result matches the user input saved in local state
// clears local storage

// on api call error, sets an error message and saves the local state to 
// localStorage -- asking to save later.

// on new api call, resets the error message

// hitting save does NOT trigger an API call if there is NO change

// 