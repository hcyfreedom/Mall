/**
 * Created by hcy on 2017/4/20.
 */
import React from 'react'
import Nav from '../Cart/CartTopNav'
export default class Register extends React.Component{
    render(){
        return(
            <div className="register">
                <Nav navTitle="登录"/>
                <div  style={{position:'relative',top:'80px',backgroundColor:'white',height:'100%'}}>
                    <ul>
                        <li>手机号：<input placeholder="请输入手机号"/></li>
                        <li>验证码：<input placeholder="请输入验证码" style={{width:'321px'}} />
                            <button>点击获取</button>
                        </li>
                        <li>邀请码：<input placeholder="88888" style={{width:'321px'}}/>
                            <button>借用邀请码</button>
                        </li>
                    </ul>
                    <div className="regButton">
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