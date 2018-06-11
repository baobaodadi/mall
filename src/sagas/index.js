import {spawn} from 'redux-saga/effects';
import detail from './detail';
import pay from './pay';
import scan from './scan';
import result from './result';

export default function* () {
  yield [
    spawn(detail),
    spawn(pay),
    spawn(scan),
    spawn(result),
  ];
}