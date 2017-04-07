/**
 * Created by Acer on 2017/3/22.
 */
import React from 'react';  //导入react相关模块
import ReactDOM from 'react-dom';
import BaseOptions from './BaseOptions'
 import ShopPage from './ShopPage'
// import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';
import {Router,Route,Redirect} from 'react-router'
import createHistory from 'history/createBrowserHistory'
import {Provider} from 'react-redux';
import configureStore from '../store/configureStore';
let store = configureStore();
const history = createHistory();

class Main extends React.Component{
    constructor(props){
        super(props)
    }

    render(){


            return(
                <Provider store={store}>
                    <Router history={history}>
                        <div>
                            <Route path="/home/:id" component={BaseOptions}/>
                            <Redirect from="/" to="/home/index"/>
                            <Route  path="/shop/:id" component={ShopPage}/>
                        </div>
                    </Router>
                </Provider>
            )


    }
}

ReactDOM.render(<Main/>,document.getElementById("app"));

