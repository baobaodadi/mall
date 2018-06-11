import {combineReducers} from 'redux';
import globle from './globle';
import detail from './detail';
import pay from './pay';
import scan from './scan';
import result from './result';


export default combineReducers({
  globle,
  detail,
  pay,
  scan,
  result
});
