/**
 * Created by Acer on 2017/3/22.
 */
import React from 'react';  //导入react相关模块
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';
import TouristPage from './Page/TouristPage'
ReactDOM.render(
    (<Router>
        <div>
            <Route exact path="/" component={TouristPage}/>
            {/*<Route path="/about" component={AboutUs}/>*/}
        </div>
    </Router>

    ),document.getElementById("app"));