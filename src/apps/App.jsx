/**
 * Created by dady on 2018/6/8.
 */

import React, {Component} from 'react';
import Detail from './page/detail/index.jsx';
import Result from './page/result/index.jsx';
import Scan from './page/scan/index.jsx';
import Open from './page/open/index.jsx';
import Error from './page/error/index.jsx';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';


class App extends Component {

  render() {

    return (
        //<BrowserRouter basename='/pub/mall/static/'>
        <BrowserRouter>
          <Switch>
            <Route  exact path="/detail" component={Detail}/>
            <Route  exact path="/result" component={Result}/>
            <Route  exact path="/scan" component={Scan}/>
            <Route  exact path="/open" component={Open}/>
            <Route  exact path="/error" component={Error}/>
            <Redirect from="/" to="/detail" />
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;