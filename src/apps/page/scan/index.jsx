/**
 * Created by dady on 2018/6/8.
 */
import React, {Component} from 'react';
import '../../../style/swiper.less'
import scan from '../../../images/scan.png'

const callbackName = 'scanCodeCallback_';  
window[callbackName] = function(rsp) {
  delete window[callbackName];
  window.location.href=`https://puboa.sogou-inc.com/pub/mall/static/open?sn=${rsp.content}`;
};

class Scan extends Component {

  componentDidMount() {
      document.title='资产柜';
  }

  render() {
      return (
        <div className="back">
        <div className="scan">
          <img src={scan} alt=""
               onClick={()=>{
                    window.xiaopAPI_ScanCode.webScanCode(JSON.stringify({callBack: callbackName}));
               }}
          />
          <div className='bu'>
            点击扫码补货
          </div>
        </div>
        </div>
      )

  }
}


export default Scan;