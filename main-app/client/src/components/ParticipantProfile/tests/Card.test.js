import React from 'react';
import Card from '../components/Card';
import { mount } from 'enzyme';
import axios from 'axios';

jest.mock('axios');

describe('Card - Internals', () => {
  it('clicking edit button toggles edit mode', () => {
    const wrapper = mount(<Card />);
    const button = wrapper.find('.user-card--edit-btn');
    button.simulate('click');
    expect(wrapper.state().editing).toEqual(true);
    button.simulate('click');
    expect(wrapper.state().editing).toEqual(false);
  });

  it('saves user input correctly in state while in Edit Mode', () => {
    const wrapper = mount(<Card />);
    wrapper.setState({ editing: true });
    const input = wrapper.find('#input-first_name');
    input.instance().value = 'test';
    input.simulate('change');
    expect(wrapper.state().localUserInfo).toMatchObject({ first_name: 'test' });
  });

  it('does not save user input in non-Edit Mode', () => {
    const wrapper = mount(<Card />);
    wrapper.setState({ editing: false });
    const input = wrapper.find('#input-first_name');
    expect(input).toHaveLength(0);
  });

  it('changeInFormState is true when there is a change', () => {
    const wrapper = mount(<Card />);
    wrapper.setState({ editing: true });
    const input = wrapper.find('#input-first_name');
    input.instance().value = 'test';
    input.simulate('change');
    expect(wrapper.state().changeInFormState).toEqual(true);
  });

  it('changeInFormState is false when there is no change', () => {
    const wrapper = mount(<Card />);
    wrapper.setState({ editing: true });
    expect(wrapper.state().changeInFormState).toEqual(false);
  });
});

describe('Card - API Calls', () => {
  let wrapper = mount(<Card />);
  const originalUser = {
    address: '123 some st',
    age: '28',
    aka: ['Mitch'],
    chronic_homeless: false,
    clinic: null,
    created_at: '2019-03-25T23:12:52.210Z',
    dl: null,
    dob: '1990-08-06T00:00:00.000Z',
    email: 'email@email.com',
    ethnicity: 'caucasian',
    family_status: 'single',
    first_name: 'Mitchell',
    gender: 'male',
    housing_status: 'rent',
    id: 1,
    income_range: '1-1000000',
    income_source: 'work',
    last_name: 'Andrews',
    middle_name: 'W',
    phone: '1231231234',
    race: 'white',
    services: ['service1', 'service2'],
    status: 'status',
    updated_at: '2019-03-25T23:12:52.210Z',
    urgent: false,
    veteran_status: 'not veteran',
  };
  const mockResults = {
    status: 200,
    data: {
      participants: [
        {
          address: '123 some st',
          age: '28',
          aka: ['Mitch'],
          chronic_homeless: false,
          clinic: null,
          created_at: '2019-03-25T23:12:52.210Z',
          dl: null,
          dob: '1990-08-06T00:00:00.000Z',
          email: 'email@email.com',
          ethnicity: 'caucasian',
          family_status: 'single',
          first_name: 'Mitchell',
          gender: 'male',
          housing_status: 'rent',
          id: 1,
          income_range: '1-1000000',
          income_source: 'work',
          last_name: 'Andrews',
          middle_name: 'W',
          phone: '1231231234',
          race: 'white',
          services: ['service1', 'service2'],
          status: 'status',
          updated_at: '2019-03-25T23:12:52.210Z',
          urgent: false,
          veteran_status: 'not veteran',
        },
      ],
    },
  };
  const mockItems = mockResults.data.participants[0];
  const mockError = { message: 'Test Error' };

  beforeEach(() => {
    wrapper = mount(<Card />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('calls API when hitting save and there is a change', () => {
    wrapper.instance().initializeFormState(originalUser);
    wrapper.instance().toggleEditMode();
    const input = wrapper.first('.user-card-name');
    input.instance().value = 'Mitch';
    input.simulate('change');

    axios.get.mockResolvedValueOnce(() => {
      return wrapper
        .instance()
        .postFormData(1, mockItems)
        .then(res => {
          expect(res).toEqual(mockResults);
          expect(wrapper.state('localUserInfo')).toEqual([]);
          expect(wrapper.state('error')).toEqual(null);
          expect(wrapper.state('loading')).toEqual(false);
        });
    });
  });
});

// thunk as middleware in react for testing

// on api call success, the returned result matches the user input saved in local state
// clears local storage

// on api call error, sets an error message and saves the local state to
// localStorage -- asking to save later.

// on new api call, resets the error message

// aka is saved correctly (split into array when ',' is found), other wise, single string in an array
