import React from 'react';
import dateFormatter from '../../utilities/dateFormatter';
import './UserInfoItems.scss';

const UserInfoItems = ({ user, editing, editHandler}) => {
  let { dob, email, phone, created_at  } = user;
  let dobText = dob ? dateFormatter(Date.parse(dob)) : 'N/A';
  let emailText = email ? email : 'N/A';
  let phoneText = phone ? phone : 'N/A';
    
  let infoArray = [
    {
      label: 'Date of Birth',
      value: dobText,
      name: 'dob',
    },
    {
      label: 'Phone Number',
      value: phoneText,
      name: 'phone',
    },
    {
      label: 'Email Address',
      value: emailText,
      name: 'email',
    },
  ];

  const renderItems = () => {
    return infoArray.map((info, idx) => {
        return (
          <div key={idx} className='user-card-info-unit'>
            <input 
              className='user-card-info--value' 
              value={info.value}
              disabled={!editing}
              name={info.name}
              onChange={(e) => editHandler(e)}
            />
            <div className='user-card-info--label'>{info.label}</div>
          </div>
        )
      })
  }
  return (
    <div className='user-card-info--container'>
      {renderItems()}
    </div>
  )
}

export default UserInfoItems;