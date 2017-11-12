import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  TEST
} from './types';

export const test = () => {
  return {type: TEST, payload: "test working"};
};
  
