/**
 * Created by hcy on 2017/4/21.
 */
import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {post} from "../../http/http"
import * as mallActions from '../../action/mallActions'
import Nav from '../Cart/CartTopNav'
import pay from '../payutil/payUtil'
class Payment extends React.Component {

    handleClick(pay_way, price) {
        pay(pay_way, price, function () {
            alert("付款成功");

        }, function () {
            this.props.history.replace("/payment/succeed")
        }, function () {
            this.props.history.replace("/payment/failure")
        })
    }

    render() {
        console.log(this.props)
        let totalPrice = this.props.homeReducer.cartCircleIcon.totalPrice || this.props.homeReducer.totalPrice;
        let actions = bindActionCreators(mallActions, this.props.dispatch);
        return (
            <div>
                <Nav navTitle="结账付款"/>
                <div style={{position:'relative',top:'120px'}}>

                    <div className="pay" onClick={()=>{this.handleClick("upacp_wap",totalPrice)}}>
                        <img src="/imgs/weixin2.png" />付款方式
                    </div>

                    <div className="payAll">
                        付款金额：<span style={{color:'#EA2735'}}>￥{totalPrice}</span>
                    </div>
                </div>
                <div className="addBottom">
                    确认付款
                </div>
            </div>
        )
    }
}

export default connect((state) => state)(Payment)