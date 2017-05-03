/**
 * Created by hcy on 2017/4/22.
 */
import React from 'react'
import Nav from '../../Cart/CartTopNav'

import Bottom from '../AddressEditor/AddressBottom'
import ConfirmAddress from './ConfirmAddress'
import ConfirmOrder from './ConfirmOrder'
import ConfirmDelivery from './ConfirmDelivery'
import ConfirmMessage from './ConfirmMessage'

import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {post} from '../../../http/http'
import {get} from "../../../http/http"
import * as mallActions from '../../../action/mallActions'


class OrderConfirm extends React.Component {
    constructor(props) {
        super(props)
    }

    handleClick() {
        let {lastOrders} = this.props.homeReducer;
        let actions = bindActionCreators(mallActions, this.props.dispatch);
        let {orderReallyPrice} = this.props.homeReducer;
        let resultPrice = 0;
        for (let val of orderReallyPrice) {
            if (val % 1 === 0)
                resultPrice = 1 * val + 1 * resultPrice;
        }
        actions.totalPrice(resultPrice);
        /*
         *将订单信息发到下一个页面
         *
         */
        let {deliveryWay} = this.props.homeReducer;
        let {defaultAddress} = this.props.homeReducer;
        let {selectCoin, selectPoint} = this.props.homeReducer;

        for (let i = 0; i < lastOrders.length; i++) {
            let tmp = lastOrders[i];
            tmp.addressId = defaultAddress.id;
            tmp.transportWay = deliveryWay;
            tmp.usedCoin = selectCoin[tmp.orderId];
            tmp.usedPoint = selectCoin[tmp.orderId];
        }
        if (lastOrders != [] && lastOrders != null && lastOrders != undefined) {
            post("/good/confirmOrder", {
                lastOrders
            },(res)=>{
                actions.payment(res.data.msg);
                this.props.history.push("/payment");
            },()=>{
                this.props.history.push("/payment/failed");
            })
        }


    }


    render() {
        console.log("state tree")
        console.log(this.props.homeReducer);
        return (
            <div>
                <Nav navTitle="管理收货地址"/>

                <div style={{position:"relative",top:'120px'}}>
                    <Link to="/address/manage">
                        <ConfirmAddress/>
                    </Link>
                    <ConfirmOrder/>
                    <Link to="/delivery">
                        <ConfirmDelivery/>
                    </Link>
                    <ConfirmMessage/>
                    <div style={{width:'100%',height:'30px',marginTop:"400px"}}></div>
                </div>
                <Bottom detail="确认" handleClick={this.handleClick.bind(this)}/>
            </div>
        )
    }
}
export default connect((state) => state)(OrderConfirm)


const navStyle = {
    width: '100%',
    height: '80px',
    background: '-webkit-linear-gradient(left, #6dddf1, #0f5ea5)',
    background: ' -o-linear-gradient(right,#6dddf1, #0f5ea5)',
    background: '-moz-linear-gradient(right,#6dddf1, #0f5ea5)', /* Firefox 3.6 - 15 */
    background: 'linear-gradient(to right,#6dddf1, #0f5ea5)', /* 标准的语法（必须放在最后） */
    position: 'fixed',
    zIndex: '300'

}
const navTitle = {
    width: "200px",
    height: "100px",
    margin: '0 auto',
    fontSize: '40px',
    color: 'white',
    marginTop: '-45px',
    textAlign: 'center'
}