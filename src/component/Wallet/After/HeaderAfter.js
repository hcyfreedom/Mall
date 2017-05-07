/**
 * Created by hcy on 2017/4/26.
 */
import React from 'react'
import Nav from '../../Cart/CartTopNav'
import TriOption from '../before/TriOption'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {post,get} from "../../../http/http"
import * as afterActions from '../../../action/afterActions'
import copy from 'copy-to-clipboard';
import {BrowserRouter as Router, Route, Switch,Redirect, Link} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'


const history = createHistory()
 class HeaderAfter extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        let actions = bindActionCreators(afterActions,this.props.dispatch);
        get('/main/getUserInfo',(res) => {
            actions.getUserInfo(res.data)
        });
        get("/account/getInvitationCode",(res) => {
            actions.getInviteCode(res.data);
        });

    }

    handleLogOut(){
        post("/account/logOut",{},(res)=>{
            alert("退出登录成功!");
            window.location.href="/home/index";
        })

    }

     onClickInviteCode(){
         let {adminCode} = this.props.afterReducer;
         let suc = copy(adminCode);
         console.log(suc);
         if(suc)
            alert('已复制到剪贴板');

     }
    render(){
        let {userInfo} = this.props.afterReducer;
        if(userInfo == null || userInfo == undefined){
            userInfo = {
                headImg:"",
                userName:"未登录",
                coin:0,
                point:0,
                diamond:0
            }
        }
        return(
        <div>
            <Nav navTitle="我的行囊"/>
            <div style={{position:'relative',top:'79px' }}>
                <div className="waHeader">
                    <div className="headImg">
                        <img src={userInfo.headImg}/>
                    </div>
                    <div className="headName">
                        {userInfo.userName}
                    </div>
                </div>

                <div className="tribeWrap">
                    <div className="triZuan">
                        <img src="/imgs/buluozuan.jpg"/>
                        <p>部落钻</p>
                        <p>{userInfo.diamond}</p>
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
                <TriOption/>
                {/*<Link to="/orderPage/0"><div className="optionsWallet">*/}
                    {/*<span style={{paddingLeft:'95px'}}><img style={{width:'28px',height:'31px'}} src="/imgs/icon.png"/>&nbsp;&nbsp;全部订单</span>*/}
                    {/*<img  className="walletImgs" src="/imgs/rightArrow.png"/>*/}
                {/*</div>                    */}
                {/*</Link>*/}


                <Link to="/orderConfirm">
                <div className="optionsWallet">
                        <span style={{paddingLeft:'95px'}}><img style={{width:'28px',height:'31px'}} src="/imgs/addressIcon.png"/>&nbsp;&nbsp;管理收货地址</span>
                        <img  className="walletImgs" src="/imgs/rightArrow.png"/>
                </div>                    </Link>

                <div className="optionsWallet">
                    <span  onClick={this.onClickInviteCode.bind(this)} style={{paddingLeft:'95px'}}><img style={{width:'28px',height:'31px'}} src="/imgs/sendIntivate.png"/>&nbsp;&nbsp;发送邀请</span>
                    <span style={{color:'#ffc388',lineHeight:'68px',fontSize:'20px'}}>送朋友188部落分，自得88部落分<img  className="walletImgs" src="/imgs/rightArrow.png"/></span>
                </div>

               <div className="wrapOptions">
                   <div className="logOut" onTouchStart={this.handleLogOut.bind(this)}><span>退出登录</span></div>
                   <Link to="/person" className="personalSetting"><span>个人设置</span>
                   </Link>
               </div>
            </div>

        </div>
        )
    }
}
export default connect((state)=>state)(HeaderAfter)