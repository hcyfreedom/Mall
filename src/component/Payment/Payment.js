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
class Payment extends React.Component{
    render(){

        let totalPrice = this.props.homeReducer.cartCircleIcon.totalPrice || this.props.homeReducer.totalPrice
        let actions = bindActionCreators(mallActions,this.props.dispatch);
        return(
            <div>
                <Nav navTitle="结账付款"/>
                <div style={{position:'relative',top:'120px'}}>
                    <div className="pay">
                        <img src="/imgs/money.png"/>付款方式
                    </div>
                    <div className="pay">
                        <img src="/imgs/weixin2.png"/>付款方式
                    </div>
                    <div className="pay">
                        <img src="/imgs/zhifubao.png"/>付款方式
                    </div>
                    <div className="payAll">
                        付款金额：<span style={{color:'#EA2735'}}>￥{totalPrice}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect((state) => state)(Payment)