import {handleActions} from 'redux-actions';
import * as actionTypes from '../config/actionTypes';


const inintialState = null;

export default handleActions({
  [actionTypes.UPDATE_RESULT]: (state, {payload}) => ({
    ...payload
  }),
}, inintialState);
