/**
 * Created by dady on 2018/6/8.
 */
import React, {Component} from 'react';
import Swiper from 'react-id-swiper';
import '../../../style/swiper.less'
import {connect} from "react-redux";
import * as actionTypes from "../../../config/actionTypes";

const queryString = require('query-string');
import fail from '../../../images/fail.png'

const defaultState = {};

const params = {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
};


class Detail extends Component {

  constructor(props) {
    super(props);
    this.state = {...defaultState};
  }

  componentDidMount() {
    document.title = '糖猫内购';
    const parsed = queryString.parse(location.search);
    this.props.fetchDetail({containerNo: parsed.cotainerNo, boxNo: parsed.boxNo})
  }

  render() {
    const {detail} = this.props;

    if (!detail) {
      return (
        <div className="loading">
          页面加载中。。。
        </div>
      )
    } else if (detail.containerId == -1) {
      return (
        <div className="result">
          <img src={fail} alt=""/>
          <div className="status2"> 柜子不存在</div>
          <div className="chat">取货时遇到问题请联系8000解决</div>
        </div>
      )
    } else if (!detail.goodsInfo) {
      return (
        <div className="result">
          <img src={fail} alt=""/>
          <div className="status2"> 物品不存在</div>
          <div className="chat">取货时遇到问题请联系8000解决</div>
        </div>
      )
    } else {

      return (
        <div>
          <div className="mallTop">
            <Swiper  {...params}>
              {
                detail.goodsInfo && detail.goodsInfo.banners.map((item, i) => {
                  return (
                    <div key={i}>
                      <img src={item}/>
                    </div>
                  )
                })
              }
            </Swiper>
          </div>

          <div className="title">
            {detail.prdName}
          </div>

          <div className="price">
            <div>
              <span>¥</span>
              {detail.price}
            </div>
            <div>
              <del>{detail.originPrice}</del>
            </div>
          </div>

          <div className="detail">
            <div className="name">商品详情</div>
            <div className="images">
              {
                detail && detail.goodsInfo.details.map((item, i) => {
                  return (
                    <img src={item} key={i}/>
                  )
                })
              }
            </div>
          </div>

          <div className="foot" onClick={() => {
            const parsed = queryString.parse(location.search);
            this.props.fetchPay({
              containerNo: parsed.cotainerNo, boxNo: parsed.boxNo
            })
          }}>
            点击购买
          </div>

        </div>

      )
    }
  }
}

const mapStateToProps = state => ({
  detail: state.detail,
});

const mapDispatchToProps = dispatch => ({
  fetchDetail: (payload) => dispatch({
    type: actionTypes.FETCH_DETAIL,
    payload
  }),
  fetchPay: (payload) => dispatch({
    type: actionTypes.FETCH_PAY,
    payload
  }),

});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);