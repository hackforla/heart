import React from "react";
import Card from "./components/Card";
import Loader from "../UI/Loader";
import Error from "../UI/Error";
import "./Profile.scss";
import getParticipant from "api/getParticipant.api";
import Citations from "./components/Citations";
import Notes from './components/Notes';
import Status from './components/Status';

class ParticipantProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      error: null,
      loading: true
    };
  }
  componentDidMount() {
    if (this.props.match && this.props.match.params.id) {
      let { id } = this.props.match.params;
      return this.getParticipant(id);
    } else {
      this.onError("Please add a participant ID to the route.");
    }
  }
  getParticipant = id => {
    this.setState({ error: null, loading: true });
    return getParticipant(id, this.onSuccess, this.onError);
  };
  onSuccess = data => {
    this.setState({ user: data, loading: false });
  };
  onError = errorMessage => {
    this.setState({ error: errorMessage, loading: false });
  };
  render() {
    let { user, loading, error } = this.state;
    console.log(user)
    return (
      <div className="user-profile--container">
        {loading && <Loader />}
        {error && <Error error={error} />}
        {
          !loading && (
            <div className="user-profile--content-container">
            <a href={"/participants"} className="user-profile--nav">
              <i className="fas fa-arrow-left"></i>
              Back to Index
            </a>
            <Card user={user} />
            <Notes user={user} />
            <Citations user={user} />
            <Status user={user} />
          </div>
          )
        }
      </div>
    );
  }
}

export default ParticipantProfile;
