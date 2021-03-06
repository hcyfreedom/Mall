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
import WalletPage from './Wallet/WalletPage'
import CarouselItem from './Home/Slider/CarouselItem'
// pc
import PcHomePage from '../pcComponent/pcIndex/PcHomePage'
import PcClassify from '../pcComponent/Classify/ClassifyHome'
import PcGift from '../pcComponent/Gift/GiftPage'
import PcCart from '../pcComponent/Cart/Cart'
import PcWallet from '../pcComponent/Wallet/WalletPage'


import {BrowserRouter as Router, Route, Switch,Redirect, Link} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'


const history = createHistory()

import CartHomePage from './Cart/CartHomePage'
let slides = [{
    background: "/imgs/1.jpg",
}, {
    background: "/imgs/a2.png",
}, {
    background: "/imgs/3.jpg",
}, {
    background: "/imgs/4.jpg",
}, {
    background: '/imgs/a1.png',
}];

export default class BaseOptions extends React.Component {
    constructor(props) {
        super(props);

    }



    render() {
        const result = matchMedia('(orientation: landscape)').matches;
        if(result)
            return this.pcRender()
        return this.mobRender();
    }

    pcRender() {
        return (
            <div>
                <Switch>
                    <Route path="/home/index" component={PcHomePage}/>
                    <Route path="/home/classify/:id" component={PcClassify}/>
                    <Route path="/home/giftBagMall" component={PcGift}/>
                    <Route path="/home/cart" component = {PcCart}/>
                    <Route path="/home/myWallet" component={WalletPage}/>

                </Switch>
            </div>
        )
    }

    mobRender() {
        let node = ()=> (
            <div><Nav location={this.props.location}/>
                {/*<Slider slides={slides} time="2000"/>*/}
                <CarouselItem/>
                <HomePage/></div>
        );

        let nodeMainCate = ()=> (
            <div><Nav location={this.props.location}/>
                {/*<Slider slides={slides} time="2000"/>*/}
                <CarouselItem/>

                <Selector/>
                <CateMain location = {this.props.location}/></div>
        );

        let nodeGift = () => (
            <div><Nav location={this.props.location}/>
                {/*<Slider slides={slides} time="2000"/>*/}
                <CarouselItem/>

                <GiftBagMall/></div>

        );


        return (
                    <div>
                        <Switch>
                            <Route path="/home/index" component={node}/>
                            <Route path="/home/cart" component={CartHomePage}/>
                            <Route path="/home/cate" component={nodeMainCate}/>
                            <Route path="/home/classify/:id" component={nodeMainCate}/>
                            <Route path="/home/giftBagMall" component={nodeGift}/>
                            <Route path="/home/cate" component = {nodeMainCate}/>
                            <Route path="/home/myWallet" component={WalletPage}/>
                        </Switch>
                        <BottomNav location={this.props.location}/>

                    </div>
        )


    }
}

