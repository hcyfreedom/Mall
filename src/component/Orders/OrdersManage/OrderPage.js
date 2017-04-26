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
export default class OrderPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            slideIndex : 0,
        };
    }

    handleChange(value){
        this.setState({
            slideIndex:value,
        });
    };

    render(){
        return(
            <MuiThemeProvider>
                <div >
                    <Nav navTitle="订单管理"/>

                    <div style={{position:'relative',top:'80px'}}>
                        <Tabs onChange={this.handleChange.bind(this)} value={this.state.slideIndex} >
                            <Tab label="全部订单" value={0}/>
                            <Tab label="代付款" value={1}/>
                            <Tab label="待收货" value={2}/>
                            <Tab label="售后" value={3}/>
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