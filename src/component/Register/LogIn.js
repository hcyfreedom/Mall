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
        super(props)
    }

    handleChange(event){

        let actions = bindActionCreators(afterActions,this.props.dispatch);
        let {phoneNumber} = this.props.afterReducer;
        actions.getNumber(event.target.value)
    }

    handleClickCode(){
        let {phoneNumber} = this.props.afterReducer;
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
                actions.changeItemsHref();
                // console.log(history)
                // history.replace('/')
            }else {
                console.log("登录失败 请重试")
            }
        })
    }
    render(){
        return(
            <div className="register">
                <Nav navTitle="登录"/>
                <div  style={{position:'relative',top:'80px',backgroundColor:'white',height:'100%'}}>
                    <ul>
                        <li>手机号：<input placeholder="请输入手机号" onChange={this.handleChange.bind(this)}/></li>
                        <li>验证码：<input placeholder="请输入验证码" onChange={this.onChangeCode.bind(this)} style={{width:'321px'}} />
                            <button onClick={this.handleClickCode.bind(this)}>点击获取</button>
                        </li>
                    </ul>
                    <div className="regButton" onClick={this.handleLogin.bind(this)}>
                        登录
                    </div>
                    <div className="regRapid">快捷登录</div>
                    <img className="regWeixin" src="/imgs/weixin.jpg"/>
                    <div className="regBottom">
                        <span className="regCircle"></span>登录表示您同意<span style={{color:'#0c4da2'}}>《服务协议》</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect((state)=>state)(LogIn)