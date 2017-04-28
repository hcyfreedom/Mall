/**
 * Created by hcy on 2017/4/26.
 */
import React from 'react'
import Nav from '../Cart/CartTopNav'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {post,get} from "../../http/http"
import * as afterActions from '../../action/afterActions'
class LogIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            getVeriCodeLeftTime: 0,
        }
    }

    handleChange(event){

        let actions = bindActionCreators(afterActions,this.props.dispatch);
        let {phoneNumber} = this.props.afterReducer;
        actions.getNumber(event.target.value)
    }

    handleClickCode(){
        let {phoneNumber} = this.props.afterReducer;
        if(this.state.getVeriCodeLeftTime > 0)
            return;
        if(!phoneNumber)
            return alert(`请填写手机号`)
        this.setState({getVeriCodeLeftTime: 60}, () => {
            this.ivl = setInterval(() => {
                this.setState({getVeriCodeLeftTime: this.state.getVeriCodeLeftTime - 1});
                if(this.state.getVeriCodeLeftTime <= 0)
                    clearInterval(this.ivl);
            }, 1000);
        })
        post('/account/getMessage',{
            telephone:phoneNumber
        },(res) => {
            if (res.data.code == 200){
                console.log("code success!")
            }else {
                console.log("code failed")
            }
        })
    }

    onChangeCode(event){
        let actions = bindActionCreators(afterActions,this.props.dispatch);
        actions.getAuthCode(event.target.value)
    }

    handleLogin(){
        let {phoneNumber,authCode} = this.props.afterReducer;
        let actions = bindActionCreators(afterActions,this.props.dispatch);

        post('/account/login',{
            telephone:phoneNumber,
            checkCode:authCode,
        },(res) => {
            if (res.data.code == 200){
                alert("登录成功");
                // actions.changeItemsHref();
                window.location.href='/home/MyWallet'

            }else {
                console.log("登录失败 请重试")
            }
        })
    }

    weChartLogin(){
        
        let redirectUrl = encodeURIComponent("http://www.tangseng.shop/account/wechatLogin");
        window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx1be0f2a1f512729a&redirect_uri="+redirectUrl+"&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect"
    }

    render(){
        return(
            <div className="register">
                <Nav navTitle="登录"/>
                <div  style={{position:'relative',top:'80px',backgroundColor:'white',height:'100%'}}>
                    <ul>
                        <li>手机号：<input type="number" placeholder="请输入手机号" onChange={this.handleChange.bind(this)}/></li>
                        <li>验证码：<input placeholder="请输入验证码" onChange={this.onChangeCode.bind(this)} style={{width:'321px'}} />
                            <button onClick={this.handleClickCode.bind(this)} disabled={this.state.getVeriCodeLeftTime > 0}>{this.state.getVeriCodeLeftTime > 0 ? `再次获取(${this.state.getVeriCodeLeftTime} s}` : "点击获取"}</button>
                        </li>
                    </ul>
                    <div className="regButton" onClick={this.handleLogin.bind(this)}>
                        登录
                    </div>
                    <div  className="regRapid">快捷登录</div>
                    <img onClick={this.weChartLogin.bind(this)} className="regWeixin" src="/imgs/weixin.jpg"/>
                    <div className="regBottom">
                        <span className="regCircle"></span>登录表示您同意<span style={{color:'#0c4da2'}}>《服务协议》</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect((state)=>state)(LogIn)