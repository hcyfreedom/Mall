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
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Snackbar from 'material-ui/Snackbar';



class Payment extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
        };

    }


    handleClick(pay_way, price) {
        pay(pay_way, price, function () {
            alert("付款成功");
            this.setState({
                open: true,
            });
            this.props.history.replace("/payment/succeed")
        }, function () {
            this.props.history.replace("/payment/succeed")
        })
    }

    handleRequestClose () {
        this.setState({
            open: false,
        });
    };

    render() {
        console.log(this.props)
        let totalPrice = this.props.homeReducer.cartCircleIcon.totalPrice || this.props.homeReducer.totalPrice;
        let actions = bindActionCreators(mallActions, this.props.dispatch);
        return (
            <MuiThemeProvider>
                <div>
                    <Nav navTitle="结账付款"/>
                    <div style={{position:'relative',top:'120px'}}>

                    <div className="pay" onClick={()=>{this.handleClick("alipay_wap",totalPrice)}}>
                        <img src="/imgs/zhifubao.png" />付款方式
                    </div>
                    <div className="pay" onClick={()=>{this.handleClick("upacp_wap",totalPrice)}}>
                        <img src="/imgs/money.png" />付款方式
                    </div>
                    <div className="pay" onClick={()=>{this.handleClick("wx_pub",totalPrice)}}>
                        <img src="/imgs/weixin2.png" />付款方式
                    </div>

                        <div className="payAll">
                            付款金额：<span style={{color:'#EA2735'}}>￥{totalPrice}</span>
                        </div>
                    </div>
                    <div className="addBottom">
                        确认付款
                    </div>
                    <Snackbar
                        open={this.state.open}
                        message="Event added to your calendar"
                        autoHideDuration={4000}
                        onRequestClose={this.handleRequestClose.bind(this)}
                    />

                </div>
            </MuiThemeProvider>
        )
    }
}

export default connect((state) => state)(Payment)