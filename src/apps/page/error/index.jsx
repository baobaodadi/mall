/**
 * Created by dady on 2018/6/8.
 */
import React, {Component} from 'react';
import fail from '../../../images/fail.png'
const queryString = require('query-string');

class Error extends Component {

  render() {

    const parsed = queryString.parse(location.search);

      return (
        <div className="result">
          <img src={fail} alt=""/>
          <div className='get1'>{parsed.msg}</div>
          <div className='chat'>有任何疑问请联系8000解决</div>
        </div>
      )

  }
}

export default Error;