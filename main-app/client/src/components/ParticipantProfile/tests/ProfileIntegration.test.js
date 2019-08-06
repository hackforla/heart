import React from 'react';
import Profile from '../ParticipantProfile';
import { shallow } from 'enzyme';

import axios from 'axios';
jest.mock('axios');

describe('Profile - API Integration', () => {
  describe('when match.params.id is present', () => {
    it('sets user state after successful request', async () => {
      const participants = [{ first_name: 'Luigi' }];
      axios.get.mockResolvedValueOnce({ data: participants });

      const match = { params: { id: 323 } };
      const profileWrapper = shallow(<Profile match={match} />);

      await axios.get;

      expect(profileWrapper.state()).toEqual(
        expect.objectContaining({
          user: participants[0],
          loading: false,
          error: null,
        })
      );
    });

    it('sets errorMessage when request is rejected', async () => {
      const errorMessage = 'oopsies';
      axios.get.mockRejectedValueOnce({ message: errorMessage });

      const match = { params: { id: 213 } };
      const profileWrapper = shallow(<Profile match={match} />);

      await axios.get;

      expect(profileWrapper.state()).toEqual(
        expect.objectContaining({
          user: null,
          loading: false,
          error: errorMessage,
        })
      );
    });
  });

  describe('when match.params.id is not present', () => {
    it('does not make a request', () => {
      axios.get.mockClear();
      shallow(<Profile />);
      expect(axios.get).not.toBeCalled();
    });
  });
});
