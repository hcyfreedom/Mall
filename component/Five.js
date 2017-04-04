/**
 * Created by hcy on 2017/4/4.
 */
import React from 'react';  //导入react相关模块
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';
import HomePage from './Home/HomePage'
import CategoryPage from './Category/CategoryPage'
import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();
export default class Five extends React.Component{
    render(){
        return(
            <Router history={history}>
                <div>
                    <Route exact path="/HomePage" component={HomePage}/>
                    <Route path="/CategoryPage" component={CategoryPage}/>
                </div>
            </Router>
    )
    }
    }