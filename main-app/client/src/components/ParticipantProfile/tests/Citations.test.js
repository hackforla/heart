import React from 'react';
import Citations from '../components/Citations';
import { mount } from 'enzyme';
import axios from 'axios';

jest.mock('axios');

describe('Citations - API Calls', () => {
  let wrapper = mount(<Citations />);
  const citations = {
    citation_number: '1123-322',
    citation_status: 'warrant',
    court_code: 'CC 1235',
    created_at: '2019-03-25T23:12:52.217Z',
    id: 2,
    participant_id: 1,
    updated_at: '2019-03-25T23:12:52.217Z',
    violations: ['VN 1235'],
  };
  const mockResults = {
    status: 200,
    data: {
      citations: [
        {
          citations,
        },
      ],
    },
  };
  const mockItems = mockResults.data.citations[0];
  const mockError = { message: 'Test Citations Error Message' };

  beforeEach(() => {
    wrapper = mount(<Citations />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders', () => {
    expect(wrapper).toEqual(wrapper);
  });

  // it("calls API when hitting save and there is a change", () => {
  //   axios.get.mockResolvedValueOnce(mockResults);
  //   return wrapper
  //     .instance()
  //     .postFormData(citations)
  //     .then(res => {
  //       expect(res).toEqual(mockResults);
  //       expect(wrapper.state("citations")).toEqual(mockItems);
  //       expect(wrapper.state("error")).toEqual(null);
  //       expect(wrapper.state("loading")).toEqual(false);
  //     });
  // });
});
