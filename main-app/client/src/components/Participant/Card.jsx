import React from 'react';
import './Card.scss';
import dateFormatter from '../../utilities/dateFormatter';

const Card = ({ user }) => {
  let { first_name, last_name, aka, dob, email, phone } = user;
  let firstNameText = first_name ? first_name : 'N/A';
  let lastNameText = last_name ? last_name : 'N/A';
  let akaText = aka && aka.join(', ');
  let dobText = dob ? dateFormatter(Date.parse(dob)) : 'N/A';
  let emailText = email ? email : 'N/A';
  let phoneText = phone ? phone : 'N/A';

  let infoArray = [
    {
      label: 'Date of Birth',
      value: dobText,
    },
    {
      label: 'Email Address',
      value: emailText,
    },
    {
      label: 'Phone Number',
      value: phoneText,
    },
  ]
  return (
    <div className='user-card--container'>
      <img 
        className='user-card--avatar' 
        alt='user-avatar' 
        src={require('../../assets/blank-image.png')}
      />
      <div className='user-card-name--container'>
        <div className='user-card-name'>{`${firstNameText} ${lastNameText}`}</div>
        { aka && <div className='user-card-aka'>AKA {akaText}</div>}
      </div>
      <div className='user-card-info--container'>
        {
          infoArray.map((info, idx) => {
            return (
              <div key={idx} className='user-card-info-unit'>
                <div className='user-card-info--value'>{info.value}</div>
                <div className='user-card-info--value'>{info.label}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Card;