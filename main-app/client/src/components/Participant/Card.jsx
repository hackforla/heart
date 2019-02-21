import React from 'react';
import './Card.scss';
import UserInfoItems from './UserInfoItems';
import UserNameItems from './UserNameItems';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      btnText: 'Edit',
      localUserInfo: {},
    };
  }
  componentDidMount() {
    this.initializeFormState();
  }
  toggleEditView = () => {
    let { editing } = this.state;
    this.setState({
      editing: !editing,
      btnText: !editing ? 'Save' : 'Edit',
    });
  }
  editHandler = (e) => {
    let { name, value } = e.currentTarget;
    let { localUserInfo } = this.state;
    localUserInfo[name] = value;
    this.setState({ localUserInfo: localUserInfo });
  }
  initializeFormState = () => {
    const { user } = this.props;
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
      localUserInfo[field] = user[field];
    })
    this.setState({ localUserInfo });
  }
  render() {
    let { editing, btnText, localUserInfo } = this.state;
    return (
      <div className='user-card--container'>
        <button 
          type='button' 
          onClick={() => this.toggleEditView()} 
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