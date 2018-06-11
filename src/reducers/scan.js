import {handleActions} from 'redux-actions';
import * as actionTypes from '../config/actionTypes';


const inintialState = null;

export default handleActions({
  [actionTypes.UPDATE_SCAN]: (state, {payload}) => ({
    ...payload
  }),
}, inintialState);
