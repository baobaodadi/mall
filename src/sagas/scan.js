/**
 * Created by dady on 2018/6/8.
 */
import {takeLatest, put} from 'redux-saga/effects';
import service from '../utils/service';
import API from '../config/api';
import * as actionTypes from '../config/actionTypes';
import { ENTITY_SCAN,ENTITY_BUHUO,ENTITY_OPEN} from '../config/constants';


function* fetchScan(action) {
  const {payload} = action;
  try {
    const data = yield service.post(API[ENTITY_SCAN],{
      sn:payload.sn,
    });

    yield put({
      type: actionTypes.UPDATE_SCAN,
      payload: data,
    });

  }
  catch(e){
    window.location.href=`http://localhost/error?msg=${e.message}`;
  }
}

function* fetchBuhuo(action) {
  const {payload} = action;
  try {
    const data = yield service.post(API[ENTITY_BUHUO],{
      sn:payload.sn,
      containerNo:payload.containerNo,
      boxNo:payload.boxNo,
    });

  }
  catch(e){
    window.location.href=`http://localhost/error?msg=${e.message}`;
  }
}

function* fetchOpen(action) {
  const {payload} = action;
  try {
    const data = yield service.post(API[ENTITY_OPEN],{
      containerNo:payload.containerNo,
      boxNo:payload.boxNo,
    });

  }
  catch(e){
    window.location.href=`http://localhost/error?msg=${e.message}`;
  }
}

export default function* () {
  yield [
    takeLatest(actionTypes.FETCH_SCAN, fetchScan),
    takeLatest(actionTypes.FETCH_BUHUO, fetchBuhuo),
    takeLatest(actionTypes.FETCH_OPEN, fetchOpen),
  ];
}
