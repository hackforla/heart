import React from 'react';
import './Card.scss';
import UserInfoItems from './UserInfoItems';
import UserNameItems from './UserNameItems';
import updateParticipant from './updateParticipant.api';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      btnText: 'Edit',
      localUserInfo: {},
      changeInFormState: false,
      error: null,
      loading: false,
    };
  }
  componentDidMount() {
    let { user } = this.props;
    if (user) {
      this.initializeFormState(user);
    }
  }
  toggleEditMode = () => {
    let { editing, localUserInfo, changeInFormState } = this.state;
    let { id } = this.props.user;
    if (editing && changeInFormState) {
      this.postFormData(id, localUserInfo);
    }
    this.setState({
      editing: !editing,
      btnText: !editing ? 'Save' : 'Edit',
      changeInFormState: false,
    });
  }
  onSuccess = (data) => {
    this.initializeFormState(data);
    this.setState({ loading: false })
  }
  onError = (errorMessage) => {
    this.setState({ error: errorMessage, loading: false });
  }
  postFormData = (id, formData) => {
    this.setState({ loading: true, error: null });
    // currently API call is erroring out
    return updateParticipant({ id, data: formData });
  }
  editHandler = (e) => {
    let { name, value } = e.currentTarget;
    let { localUserInfo } = this.state;
    localUserInfo[name] = value;
    this.setState({ localUserInfo: localUserInfo, changeInFormState: true });
  }
  initializeFormState = (initialData) => {
    let { localUserInfo } = this.state;
    const fields = [
      'first_name', 
      'last_name', 
      'aka', 
      'dob', 
      'email', 
      'phone', 
      'created_at', 
      'clinic', 
      'dl'
    ];
    fields.forEach(field => {
      localUserInfo[field] = initialData[field];
    })
    this.setState({ localUserInfo });
  }
  render() {
    let { editing, btnText, localUserInfo } = this.state;
    return (
      <div className='user-card--container'>
        <button 
          type='button' 
          onClick={() => this.toggleEditMode()} 
          className={`user-card--edit-btn edit-btn-${!editing ? 'edit' : 'save'}`}
        >
          {btnText}
        </button>
        <UserNameItems
          localUserInfo={localUserInfo}
          editHandler={this.editHandler}
          editing={editing}
        />
        <UserInfoItems 
          localUserInfo={localUserInfo}
          editHandler={this.editHandler} 
          editing={editing}
        />
      </div>
    )
  }
}

export default Card;