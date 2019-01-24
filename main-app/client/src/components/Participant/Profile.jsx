import React from 'react';
import { API_ENDPOINT } from './../../get_uri';
const axios = require('axios');

class ParticipantProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      error: null,
      loading: true,
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
      let { data } = res;
      this.setState({ user: data, loading: false })
    })
    .catch(err => {
      console.error(err);
      let { message } = err;
      this.setState({ error: message, loading: false });
      return err;
    })
  }
  render() {
    let { user, loading, error } = this.state;
    return (
        <div className='user-profile--container'>
          { loading && <div id='loader'><i className='fas fa-spinner'></i></div> }
          { user && user }
        </div>
    )
  }
}

export default ParticipantProfile;