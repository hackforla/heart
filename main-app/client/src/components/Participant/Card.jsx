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
    this.setState({ localUserInfo: localUserInfo }, () => { console.log(this.state.localUserInfo) })
  }
  render() {
    let { editing, btnText, localUserInfo } = this.state;
    let { user } = this.props;
    return (
      <>
        <div className='user-card--container'>
          <button 
            type='button' 
            onClick={() => this.toggleEditView()} 
            className={`user-card--edit-btn edit-btn-${!editing ? 'edit' : 'save'}`}
          >
            {btnText}
          </button>
          <UserNameItems
            user={user}
            localUserInfo={localUserInfo}
            editHandler={this.editHandler}
            editing={editing}
          />
          <UserInfoItems 
            user={user} 
            localUserInfo={localUserInfo}
            editHandler={this.editHandler} 
            editing={editing}
          />
        </div>
      </>
    )
  }
}

export default Card;