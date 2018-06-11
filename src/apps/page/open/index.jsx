/**
 * Created by dady on 2018/6/8.
 */
import React, {Component} from 'react';
import '../../../style/swiper.less'
import * as actionTypes from "../../../config/actionTypes";
import {connect} from "react-redux";
const queryString = require('query-string');

const defaultState = {
  open:0
};

class Open extends Component {

  constructor(props) {
    super(props);
    this.state = {...defaultState};
  }

  componentDidMount() {
    const parsed = queryString.parse(location.search);
    this.props.fetchScan({sn:parsed.sn})
  }

  render() {
    const {scan}=this.props;
    return (
      scan?
      <div className="open">
        <img src={scan.img} alt="" className='display'/>
        <div className="gui">
          <div className="name">
            <span className='ford'>商品名称:</span>
            <span className='bad'>{scan.prdName}</span>
          </div>
          <div className="sn">
            <span className='ford'>商品SN号:</span>
            <span className='bad'>{scan.sn}</span>
          </div>
          <div className="no">
            <span className='ford'>商城柜编号:</span>
            <span className='bad'>{scan.container.containerNo}柜{scan.container.boxNo}箱子</span>
          </div>
        </div>
        {
          !this.state.open?
          <div className="button" onClick={() => {
            this.setState({open: 1});
            this.props.fetchOpen({
              containerNo:scan.container.containerNo,
              boxNo:scan.container.boxNo,
            });
          }}>
            开门
          </div>:
            <div className="two" onClick={() => {
               this.props.fetchBuhuo({
                 sn:scan.sn,
                 containerNo:scan.container.containerNo,
                 boxNo:scan.container.boxNo,
               });
                this.props.history.push('/scan');
                }}>补货完成
            </div>
        }
      </div>:null
    )

  }
}

const mapStateToProps = state => ({
  scan:state.scan
});

const mapDispatchToProps = dispatch => ({
  fetchScan: (payload) => dispatch({
    type: actionTypes.FETCH_SCAN,
    payload
  }),
  fetchBuhuo: (payload) => dispatch({
    type: actionTypes.FETCH_BUHUO,
    payload
  }),
  fetchOpen: (payload) => dispatch({
    type: actionTypes.FETCH_OPEN,
    payload
  }),

});

export default connect(mapStateToProps, mapDispatchToProps)(Open);