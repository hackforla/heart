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
    };
  }
  toggleEditView = () => {
    let { editing } = this.state;
    this.setState({
      editing: !editing,
      btnText: !editing ? 'Save' : 'Edit',
    })
  }
  render() {
    let { editing, btnText } = this.state;
    let { user } = this.props;
    return (
      <>
        <button 
          type='button' 
          onClick={() => this.toggleEditView()} 
          className={`user-card--edit-btn edit-btn-${!editing ? 'edit' : 'save'}`}
        >
          {btnText}
        </button>
        <UserNameItems
          user={user}
          editHandler={this.editHandler}
          editing={editing}
        />
        <UserInfoItems 
          user={user} 
          editHandler={this.editHandler} 
          editng={editing}
        />
      </>
    )
  }
}

export default Card;