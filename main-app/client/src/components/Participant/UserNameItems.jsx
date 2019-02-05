import React from 'react';
import './UserNameItems.scss';

const UserNameItems = ({ user, editing, editHandler }) => {
  const { first_name, last_name, aka } = user;
  let firstNameText = first_name ? first_name : 'N/A';
  let lastNameText = last_name ? last_name : 'N/A';
  let akaText = aka ? aka.join(', ') : 'N/A';

  let nameArray = [
    {
      value: firstNameText,
      name: 'first_name',
    },
    {
      value: lastNameText,
      name: 'last_name',
    },
    {
      value: akaText,
      name: 'aka',
    },
  ]
  
  const renderItems = () => {
    return nameArray.map((info, idx) => {
      return (
        <input 
          key={idx}
          className='user-card-name' 
          disabled={!editing} 
          value={info.value}
          name={info.name}
          onChange={(e) => {editHandler(e)}}
        />
      )
    });
  }
  return (
    <div className='user-card--container'>
      <img 
        className='user-card--avatar' 
        alt='user-avatar' 
        src={require('../../assets/blank-image.png')}
      />
      <div className='user-card-name--container'>
        {renderItems()}
      </div>
    </div>
  )
}

export default UserNameItems;