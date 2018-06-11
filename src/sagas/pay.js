/**
 * Created by dady on 2018/6/8.
 */
import {takeLatest, put} from 'redux-saga/effects';
import service from '../utils/service';
import API from '../config/api';
import * as actionTypes from '../config/actionTypes';
import { ENTITY_PAY} from '../config/constants';


function* fetchPay(action) {
  const {payload} = action;
  try {
    const data = yield service.post(API[ENTITY_PAY],{
      containerNo:payload.containerNo,
      boxNo:payload.boxNo,
    });
    if(data){
      window.location.href=data.redirectUrl;
    }else{
      window.location.href=`http://localhost/error?msg=${data}`;
    }

  }
  catch (e) {
    window.location.href=`http://localhost/error?msg=${e.message}`;
  }
}

export default function* () {
  yield [
    takeLatest(actionTypes.FETCH_PAY, fetchPay),
  ];
}
