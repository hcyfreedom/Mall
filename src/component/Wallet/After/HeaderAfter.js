/**
 * Created by hcy on 2017/4/26.
 */
import React from 'react'
import Nav from '../../Cart/CartTopNav'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {post,get} from "../../../http/http"
import * as afterActions from '../../../action/afterActions'
import {Link} from 'react-router-dom'
 class HeaderAfter extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        let actions = bindActionCreators(afterActions,this.props.dispatch);
        get(' /main/getUserInfo',(res) => {
            actions.getUserInfo(res.data)
        });
        get("/account/getAdminCode",(res) => {
            actions.getInviteCode(res.data);
        });

    }

    handleLogOut(){
        alert("退出登录成功！");
        window.location.href="/home/walletBefore";
    }

     onClickInviteCode(){
         let {adminCode} = this.props.afterReducer;
         alert("您的邀请码为"+adminCode)
     }
    render(){
        let {userInfo} = this.props.afterReducer;
        return(
        <div>
            <Nav navTitle="我的行囊"/>
            <div style={{position:'relative',top:'79px' }}>
                <div className="waHeader">
                    <div className="headImg">
                        <img src={userInfo.headImg}/>
                    </div>
                </div>

                <div className="tribeWrap">
                    <div className="triZuan">
                        <img src="/imgs/buluozuan.jpg"/>
                        <p>部落钻</p>
                        <p>{}</p>
                    </div>
                    <div className="triZuan">
                        <img src="/imgs/buluobi.jpg"/>
                        <p>部落币</p>
                        <p>{userInfo.coin}</p>
                    </div>
                    <div className="triZuan">
                        <img src="/imgs/buluofen.jpg"/>
                        <p>部落分</p>
                        <p>{userInfo.point}</p>
                    </div>
                </div>
                <div className="tribeWrap" style={{marginTop:'20px'}}>
                    <div className="triZuan">
                        <img src="/imgs/dfk.png"/>
                        <p>代付款</p>
                    </div>
                    <div className="triZuan">
                        <img src="/imgs/dfh.png"/>
                        <p>代发货</p>
                    </div>
                    <div className="triZuan">
                        <img src="/imgs/dsh.png"/>
                        <p>待收货</p>
                    </div>
                    <div className="triZuan">
                        <img src="/imgs/wdrm.png"/>
                        <p>我的人脉</p>
                    </div>
                </div>
                <div className="optionsWallet">
                    <span style={{paddingLeft:'95px'}}><img style={{width:'28px',height:'31px'}} src="/imgs/icon.png"/>&nbsp;&nbsp;全部订单</span>
                    <img  className="walletImgs" src="/imgs/rightArrow.png"/>
                </div>

                <div className="optionsWallet">
                    <Link to="/orderConfirm">
                        <span style={{paddingLeft:'95px'}}><img style={{width:'28px',height:'31px'}} src="/imgs/addressIcon.png"/>&nbsp;&nbsp;管理收货地址</span>
                        <img  className="walletImgs" src="/imgs/rightArrow.png"/>
                    </Link>
                </div>

                <div className="optionsWallet">
                    <span  onTouchStart={this.onClickInviteCode.bind(this)} style={{paddingLeft:'95px'}}><img style={{width:'28px',height:'31px'}} src="/imgs/sendIntivate.png"/>&nbsp;&nbsp;发送邀请</span>
                    <span style={{color:'#ffc388',lineHeight:'68px',fontSize:'20px'}}>送朋友188部落分，自得88部落分<img  className="walletImgs" src="/imgs/rightArrow.png"/></span>
                </div>

               <div className="wrapOptions">
                   <div className="logOut" onTouchStart={this.handleLogOut.bind(this)}><span>退出登录</span></div>
                   <div className="personalSetting"><span>个人设置</span></div>
               </div>
            </div>

        </div>
        )
    }
}
export default connect((state)=>state)(HeaderAfter)