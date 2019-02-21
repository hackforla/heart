import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile';
import { shallow, mount } from 'enzyme';
import axios from 'axios';

jest.mock('axios');

// calls for API and saves user data 
