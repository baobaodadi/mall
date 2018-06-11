/**
 * Created by dady on 2018/6/8.
 */
import React, {Component} from 'react';
import '../../../style/swiper.less'
import suc from '../../../images/suc.png'
import fail from '../../../images/fail.png'
import * as actionTypes from "../../../config/actionTypes";
import {connect} from "react-redux";
const queryString = require('query-string');


class Result extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const parsed = queryString.parse(location.search);
    this.props.fetchResult({orderNo:parsed.orderNo})
  }

  render() {
    const {result}=this.props;
    if(result){
      return (
        <div className="result">
          <img src={suc} alt=""/>
          <div className='status1'>购买成功</div>
          <div className='get1'>{result.goodsDetail.boxInfo}</div>
          <div className='chat'>有任何疑问请联系8000解决</div>
        </div>
      )
    }else{
      return (
        <div className="result">
          <img src={fail} alt=""/>
          <div className='status2'>购买失败</div>
          <div className='get2'>若您已经支付，该笔付款将返还到您的账户</div>
          <div className='chat'>有任何疑问请联系8000解决</div>
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  result:state.result
});

const mapDispatchToProps = dispatch => ({
  fetchResult: (payload) => dispatch({
    type: actionTypes.FETCH_RESULT,
    payload
  }),

});

export default connect(mapStateToProps, mapDispatchToProps)(Result);