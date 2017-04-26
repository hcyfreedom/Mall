/**
 * Created by hcy on 2017/4/4.
 */
import React from 'react';  //导入react相关模块
import BottomNav from './Home/Nav/BottomNav'
import Nav from './Search/Nav'
import GiftBagMall from './GiftBag/GiftBag'
import Slider from './Home/Slider/Slider'
import HomePage from './Home/HomePage'
import Selector from './Category/SlideSelector/Selector'
import CateMain from './Category/CatePart/CateMain'
import Wallet from './Wallet/Wallet'

import {BrowserRouter as Router, Route, Switch,Redirect, Link} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

import CartHomePage from './Cart/CartHomePage'
let slides = [{
    background: "../imgs/1.jpg",
    link: "www.baidu.com"
}, {
    background: "../imgs/a2.png",
    link: "www.baidu.com"
}, {
    background: "../imgs/3.jpg",
    link: "www.baidu.com"
}, {
    background: "../imgs/4.jpg",
    link: "www.baidu.com"
}, {
    background: '../imgs/a1.png',
    link: "www.baidu.com"
}];

export default class BaseOptions extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let node = ()=> (
            <div><Nav location={this.props.location}/><Slider slides={slides} time="2000"/><HomePage/></div>
        );

        let nodeMainCate = ()=> (
            <div><Nav location={this.props.location}/><Slider slides={slides} time="2000"/><Selector/><CateMain location = {this.props.location}/></div>
        );

        let nodeGift = () => (
            <div><Nav location={this.props.location}/><Slider slides={slides} time="2000"/><GiftBagMall/></div>

        );


        return (
                    <div>
                        <Switch>
                            <Route path="/home/index" component={node}/>
                            <Route path="/home/cart" component={CartHomePage}/>
                            <Route path="/home/classify/:id" component={nodeMainCate}/>
                            <Route path="/home/giftBagMall" component={nodeGift}/>
                            <Route path="/home/walletBefore" component={Wallet}/>
                        </Switch>
                        <BottomNav/>

                    </div>
        )


    }
}

