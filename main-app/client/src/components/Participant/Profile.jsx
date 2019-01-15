import React from 'react';
import { API_ENDPOINT } from './../../get_uri';
const axios = require('axios');

class ParticipantProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    }
  }
  componentDidMount() {
    let { id } = this.props.match.params;
    axios({
      method: 'get',
      url: `${API_ENDPOINT}/participants/${id}`,
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }
  render() {
    let { user } = this.state;
    return (
      <div className='user-profile--container'>
        { user && user }
      </div>
    )
  }
}

export default ParticipantProfile;