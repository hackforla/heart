import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import Loader from '../UI/Loader';
import Error from '../UI/Error';
import './Profile.scss';
import getParticipant from './getParticipant.api';

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
    if (this.props.match && this.props.match.params.id) {
      let { id } = this.props.match.params;
      return this.getParticipant(id);
    } else {
      this.onError('Please add a participant ID to the route.')
    }
  }
  getParticipant = (id) => {
    this.setState({ error: null, loading: true });
    return getParticipant(id, this.onSuccess, this.onError);
  }
  onSuccess = (data) => {
    this.setState({ user: data, loading: false })
  }
  onError = (errorMessage) => {
    this.setState({ error: errorMessage, loading: false });
  }
  render() {
    let { user, loading, error } = this.state;
    return (
        <div className='user-profile--container'>
          { loading && <Loader /> }
          { error && <Error error={error} /> }
          <a href={'/participants'} className='user-profile--nav'>Back to Index</a>
          { user && <Card user={user} /> }
        </div>
    )
  }
}

export default ParticipantProfile;