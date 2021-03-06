/**
 * Created by hcy on 2017/4/7.
 */
import React from 'react'
import Nav from '../../Cart/CartTopNav'
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SwipeableViews from 'react-swipeable-views';

import All from './All'
import Receive from './Receive'
import Wait from './WaitForPay'
import Wallet from "../../Wallet/before/Wallet";

import {BrowserRouter as Router, Route, Switch,Redirect, Link} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'


const history = createHistory()
export default class OrderPage extends React.Component{

    constructor(props){
        super(props);
        const pathname =location.pathname.split('/')[2];
        const path = parseInt(pathname)
        this.state = {
            slideIndex :path,
            selectIndex:path
        };
    }

    handleChange(value){
        this.setState({
            slideIndex:value,
            selectIndex:value
        });
    };


    render(){

        return(
            <MuiThemeProvider>
                <div >
                    <Nav navTitle="订单管理"/>

                    <div style={{position:'relative',top:'80px',background:'linear-gradient(to left,#0f5ea5, #6dddf1)',height:'48px'}}>
                        <Tabs initialSelectedIndex={this.state.selectIndex} onChange={this.handleChange.bind(this)} value={this.state.slideIndex} tabItemContainerStyle={{backgroundColor:'transparent'}}>
                            <Tab label="全部订单" value={0} style={{fontSize:'25px'}}/>
                            <Tab label="待付款" value={1} style={{fontSize:'25px'}}/>
                            <Tab label="待收货" value={2} style={{fontSize:'25px'}}/>
                            <Tab label="售后" value={3} style={{fontSize:'25px'}}/>
                        </Tabs>
                        <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange.bind(this)}>
                            <div>
                                <All/>
                            </div>
                            <div>
                                <Wait/>
                            </div>
                            <div>
                                <Receive/>
                            </div>
                            <div>
                                维护中。。
                            </div>
                        </SwipeableViews>
                    </div>
                </div>


            </MuiThemeProvider>

        )
    }

}