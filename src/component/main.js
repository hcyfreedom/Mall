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
import LogIn from './Register/LogIn'
import Wallet from './Wallet/before/Wallet'
import PersonalSetting from './PersonalSetting/PersonalSetting'
import ModifyLogPass from './PersonalSetting/ModifyLogPass'
import ModifyPhoneVeri from './PersonalSetting/ModifyPhoneVeri'
import ModifyPayPass from './PersonalSetting/ModifyPayPass'
import Payment from './Payment/Payment'
import PaymentSuccess from './Payment/PaymentSuccess'
import PaymentFail from './Payment/PaymentFail'
import OrderConfirm from './Orders/Confirm/OrderConfirm'
import Intro from './Information/Intro'
import OrderPage from './Orders/OrdersManage/OrderPage'
import GiftDetail from './GiftBag/GiftBagDetail'

import {Switch, BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import {Provider} from 'react-redux';
import configureStore from '../store/configureStore';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
window.alert = function(res) {
    console.log(res);
}

let store = configureStore();
const history = createHistory();

class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <Provider store={store}>
                <Router history={history}>
                    <div>
                        <Switch>
                            <Route path="/information/:shopId/:id" component={Intro}/>
                            <Route path="/home/:id" component={BaseOptions}/>
                            <Route path="/shop/:id" component={ShopPage}/>
                            <Route path="/search/:id" component={SearchIndex}/>
                            <Route path="/address/:id" component={AddressMain}/>
                            <Route path="/delivery" component={Delivery}/>
                            <Route path="/register" component={Register}/>
                            <Route path="/login" component={LogIn}/>
                            <Route exact path="/person" component={PersonalSetting}/>
                            <Route path="/person/logpass" component={ModifyLogPass}/>
                            <Route path="/person/paypass" component={ModifyPayPass}/>
                            <Route path="/person/phone" component={ModifyPhoneVeri}/>
                            <Route exact path="/payment" component={Payment}/>
                            <Route path="/payment/succeed" component={PaymentSuccess}/>
                            <Route path="/payment/failed" component={PaymentFail}/>
                            <Route path="/orderConfirm" component={OrderConfirm}/>
                            <Route path="/orderPage" component={OrderPage}/>
                            <Route path="/giftsBagMall/:id" component={GiftDetail}/>
                            <Redirect exact from="/" to="/home/index"/>
                        </Switch>

                    </div>
                </Router>
            </Provider>
        )

    }
}

ReactDOM.render(<Main/>, document.getElementById("app"));

