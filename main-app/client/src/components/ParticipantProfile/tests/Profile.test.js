import React from 'react';
import Profile from '../ParticipantProfile';
import { shallow } from 'enzyme';

import getParticipant from 'api/getParticipant.api';
jest.mock('api/getParticipant.api');

describe('Profile', () => {
  const getProfileWrapper = props => shallow(<Profile {...props} />);
  const getProfileInstance = (props = {}) =>
    getProfileWrapper(props).instance();

  describe('componentDidMount', () => {
    describe('when match.params.id is present', () => {
      it('gets the participant data with id', () => {
        const profileId = 1;
        const match = { params: { id: profileId } };
        const profile = getProfileInstance({ match });

        jest.spyOn(profile, 'getParticipant').mockImplementation();
        profile.componentDidMount();
        expect(profile.getParticipant).toBeCalledWith(profileId);
      });
    });

    describe('when match.params.id is not present', () => {
      it('calls onError', () => {
        const profile = getProfileInstance();

        jest.spyOn(profile, 'onError').mockImplementation();
        profile.componentDidMount();
        expect(profile.onError).toBeCalledWith(
          'Please add a participant ID to the route.'
        );
      });
    });
  });

  describe('getParticipant', () => {
    let profile;

    beforeEach(() => {
      profile = getProfileInstance();
    });

    afterEach(() => {
      profile = null;
    });

    it('delegates to getParticipant api', () => {
      const profileId = 1;
      profile.getParticipant(profileId);

      expect(getParticipant).toBeCalledWith(
        profileId,
        profile.onSuccess,
        profile.onError
      );
    });

    it('correctly sets the default loading state', () => {
      profile.getParticipant();

      expect(profile.state).toEqual(
        expect.objectContaining({
          error: null,
          loading: true,
        })
      );
    });
  });

  describe('onSuccess', () => {
    it('sets the user state correctly', () => {
      const userData = { first_name: 'Mario' };
      const profile = getProfileInstance();
      profile.onSuccess(userData);

      expect(profile.state).toEqual(
        expect.objectContaining({
          user: userData,
          loading: false,
        })
      );
    });
  });

  describe('onError', () => {
    it('sets the error state correctly', () => {
      const errorMessage = 'oopsies';
      const profile = getProfileInstance();
      profile.onError(errorMessage);

      expect(profile.state).toEqual(
        expect.objectContaining({
          error: errorMessage,
          loading: false,
        })
      );
    });
  });
});
