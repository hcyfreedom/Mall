/**
 * Created by hcy on 2017/4/20.
 */
import React from 'react'
import Nav from '../Cart/CartTopNav'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {post,get} from "../../http/http"
import * as afterActions from '../../action/afterActions'

import {BrowserRouter as Router, Route, Switch,Redirect, Link} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

 class Register extends React.Component{
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
    let {phoneNumber,authCode,adminCode} = this.props.afterReducer;
    if(!phoneNumber)
        return alert(`请填写手机号`)
    //60s after click ok
    this.setState({getVeriCodeLeftTime: 60}, () => {
        this.ivl = setInterval(() => {
        this.setState({getVeriCodeLeftTime: this.state.getVeriCodeLeftTime - 1})
        if(this.state.getVeriCodeLeftTime <=0 )
            clearInterval(this.ivl);
    }, 1000);
    });
    
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

onClickInviteCode(){
    let actions = bindActionCreators(afterActions,this.props.dispatch);
    get("/account/getAdminCode",(res) => {
        actions.getInviteCode(res.data);
    })
}

onChangeInviteCode(event){
    let actions = bindActionCreators(afterActions,this.props.dispatch);
    actions.selfInviteCode(event.target.value)
}
handleRegister(){
    let {phoneNumber,authCode,adminCode} = this.props.afterReducer;
    let actions = bindActionCreators(afterActions,this.props.dispatch);
    console.log("register");
    post('/account/register',{
        telephone:phoneNumber,
        checkCode:authCode,
        invitationCode:adminCode
    },(res) => {
        if (res.data.code == 200){
            alert("注册成功");
            // actions.changeItemsHref();
            let redirectUrl = encodeURIComponent("http://www.tangseng.shop/account/wechatLogin");
            window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx1be0f2a1f512729a&redirect_uri="+redirectUrl+"&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect"
        }else {
            console.log("注册失败 请重试")
        }
    })
}
    render(){
        let {phoneNumber,authCode,adminCode} = this.props.afterReducer;
        return(
            <div className="register">
                <Nav navTitle="注册"/>
                <div  style={{position:'relative',top:'80px',backgroundColor:'white',height:'100%'}}>
                    <ul>
                        <li>手机号：<input placeholder="请输入手机号" type="number" style={{width: "570px"}} value={phoneNumber} onChange={this.handleChange.bind(this)}/></li>
                        <li>验证码：<input placeholder="请输入验证码" type="number" value={authCode} style={{width:'321px'}} onChange={this.onChangeCode.bind(this)}/>
                            <button disabled={this.state.getVeriCodeLeftTime > 0} onClick={this.handleClickCode.bind(this)}>{this.state.getVeriCodeLeftTime > 0 ? `再次获取(${this.state.getVeriCodeLeftTime})` : "点击获取"}</button>
                        </li>
                        <li>邀请码：<input onChange={this.onChangeInviteCode.bind(this)} placeholder="88888" style={{width:'321px'}} value={adminCode}/>
                            <button onClick={this.onClickInviteCode.bind(this)}>借用邀请码</button>
                        </li>
                    </ul>
                    <div className="regButton" onClick={this.handleRegister.bind(this)}>
                        注册
                    </div>
                    {/*<div className="regRapid">快捷登录</div>*/}
                    {/*<img className="regWeixin" src="/imgs/weixin.jpg"/>*/}
                    <div className="regBottom">
                        <span className="regCircle"></span>注册表示您同意<span style={{color:'#0c4da2'}}>《服务协议》</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect((state)=>state)(Register)