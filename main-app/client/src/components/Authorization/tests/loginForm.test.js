import React from 'react';
import { mount } from 'enzyme';
import { LoginForm } from '../LoginForm';
import { UserAuthApi } from '../../../api/userAuth.api';

describe('<LoginForm />', () => {
  let wrapper;
  let usernameInput;
  let passwordInput;
  let username = 'tester';
  let password = 'secret';
  let usernameInputValues = { target: { name: 'username', value: username } };
  let passwordInputValues = { target: { name: 'password', value: password } };
  const baseProps = {
    location: {
      hash: '',
      key: '',
      pathname: '',
      search: '',
      state: {
        from: {
          hash: '',
          pathname: '',
          search: '',
        },
      },
    },
    onNewLogin: jest.fn(),
  };

  beforeEach(() => {
    wrapper = mount(
      <LoginForm
        location={baseProps.location}
        onNewLogin={baseProps.onNewLogin}
      />
    );
    usernameInput = wrapper.find('input').first();
    passwordInput = wrapper.find('input').last();
  });

  it('mounts', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has an input element with attribute name of username', () => {
    expect(usernameInput.props().name).toEqual('username');
  });

  it('has an input element with attribute name of password', () => {
    expect(passwordInput.props().name).toEqual('password');
  });

  it('has a submit button', () => {
    expect(wrapper.find('button')).toHaveLength(1);
  });

  it('updates the username on form update', () => {
    usernameInput.simulate('change', usernameInputValues);
    expect(wrapper.state('username')).toBe('tester');
  });

  it('updates the password on form update', () => {
    passwordInput.simulate('change', passwordInputValues);
    expect(wrapper.state('password')).toBe('secret');
  });

  it('prevents form submission with no username && password', () => {
    wrapper.find('form').simulate('submit');
    expect(wrapper.state('submitted')).toBe(true);
  });

  it('enables LoginBtn when not loading', () => {
    const loginBtn = wrapper.find('button').last();
    expect(loginBtn.props().disabled).toEqual(false);
  });

  it('disables LoginBtn when loading', () => {
    usernameInput.simulate('change', usernameInputValues);
    passwordInput.simulate('change', passwordInputValues);
    wrapper.find('form').simulate('submit');
    const loginBtn = wrapper.find('button').last();
    expect(loginBtn.props().disabled).toEqual(true);
  });

  it('updates submitted state with valid username && password', () => {
    usernameInput.simulate('change', usernameInputValues);
    passwordInput.simulate('change', passwordInputValues);
    wrapper.find('form').simulate('submit');
    expect(wrapper.state('submitted')).toBe(true);
  });

  it('returns error msg on failed login', () => {
    return expect(UserAuthApi.loginApi()).rejects.toMatch(
      'Unable to login, please try again'
    );
  });

  // may need more tests such as redirect on login and form validation.
});
