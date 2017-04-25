/**
 * Created by Acer on 2017/3/22.
 */
import React from 'react';  //导入react相关模块
import ReactDOM from 'react-dom';
import BaseOptions from './BaseOptions'
import ShopPage from './ShopPage'
import Information from './Information'
import SearchIndex from "./Search/SearchIndex"

import AddressMain from './AddressMain'
import Delivery from './Orders/Delivery/Delivery'

import Register from './Register/Register'
import Wallet from './Wallet/Wallet'
import PersonalSetting from './PersonalSetting/PersonalSetting'
import ModifyLogPass from './PersonalSetting/ModifyLogPass'
import ModifyPhoneVeri from './PersonalSetting/ModifyPhoneVeri'
import Payment from './Payment/Payment'
import PaymentSuccess from './Payment/PaymentSuccess'
import PaymentFail from './Payment/PaymentFail'
import OrderConfirm from './Orders/Confirm/OrderConfirm'
import Intro from './Information/Intro'

import {Switch, BrowserRouter as Router, Route, Redirect,Link  } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import {Provider} from 'react-redux';
import configureStore from '../store/configureStore';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();



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
                            <Route path="/information/:shopId/:id" component={Intro}/>
                            <Route path="/home/:id" component={BaseOptions}/>
                            <Route  path="/shop/:id" component={ShopPage}/>
                            <Route path="/search/:id" component={SearchIndex}/>
                            <Route path="/address/:id" component={AddressMain}/>
                            <Route path="/delivery" component={Delivery}/>
                            <Route path="/register" component={Register}/>
                            <Route path="/wallet" component={Wallet}/>
                            <Route exact path="/person" component={PersonalSetting}/>
                            <Route path="/person/pass" component={ModifyLogPass}/>
                            <Route path="/person/phone" component={ModifyPhoneVeri}/>
                            <Route exact path="/payment" component={Payment}/>
                            <Route path="/payment/succeed" component={PaymentSuccess}/>
                            <Route path="/payment/failed" component={PaymentFail}/>
                            <Route path="/orderConfirm" component={OrderConfirm}/>


                        </div>
                    </Router>
                </Provider>
            )

    }
}

ReactDOM.render(<Main/>,document.getElementById("app"));

