/**
 * Created by dady on 2018/6/8.
 */
import {takeLatest, put} from 'redux-saga/effects';
import service from '../utils/service';
import API from '../config/api';
import * as actionTypes from '../config/actionTypes';
import { ENTITY_RESULT} from '../config/constants';


function* fetchResult(action) {
  const {payload} = action;
  try {
    const data = yield service.post(API[ENTITY_RESULT],{
      orderNo:payload.orderNo,
    });

    yield put({
      type: actionTypes.UPDATE_RESULT,
      payload: data,
    });

  }
  catch(e){
    window.location.href=`http://localhost/error?msg=${e.message}`;
  }
}
export default function* () {
  yield [
    takeLatest(actionTypes.FETCH_RESULT, fetchResult),
  ];
}
