/**
 * Created by hcy on 2017/4/25.
 */
/**
 * Created by hcy on 2017/3/29.
 */
import React from 'react';
import GiftBagItems from './GiftBagItems'
import {Switch, BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {get,post} from "../../http/http"
import * as afterActions from '../../action/afterActions'
import createHistory from 'history/createBrowserHistory'


const history = createHistory()
class  GiftBagDetail extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        let actions = bindActionCreators(afterActions,this.props.dispatch);
        const path  = this.props.history.location.pathname;
        const giftId = path.split('/')[2];
        get('/good/getGift/'+giftId,(res) => {
            actions.getGiftsDetail(res.data)
        })
    }

    handleClick(){
        let {giftsDetail} = this.props.afterReducer;
        window.location.href="tel:"+giftsDetail.telephone;

        // alert(giftsDetail.telephone);
    }

    handleGoBack(){
      history.go(-1)
        // console.log("www")
    }
    handleExChange(){
        let {giftsDetail} = this.props.afterReducer;
        post('/good/exchangeGift/'+giftsDetail.id,{

        },(res) => {
            //成功的回调函数
            let data = res.data;
            if (data.code == 200){
                alert("兑换成功~")
                console.log("exchange success")
            }else {
                alert("出错了，兑换失败~")
                console.log("exchange failed")
            }
        },()=>{

        })
    }
    render(){
        let {giftsDetail} = this.props.afterReducer;


        return(

            <div>

                <div className="giftIntro">介绍</div>
                <img className="giftBack" src="/imgs/back.png" onClick={this.handleGoBack.bind(this)} />
                <img src={giftsDetail.headImg} style={{width:'100%'}}/>
                <div className="giftDetail">
                    <p>{giftsDetail.name}</p>
                    <div><img src="/imgs/buluozuan.jpg"/>&nbsp;x&nbsp;{giftsDetail.cost}</div>
                </div>
                <div style={{fontSize:'28px',paddingTop:'20px'}}>{giftsDetail.content}</div>
                <div className="giftBottom">
                    <div className="giftTel" onTouchStart={this.handleClick.bind(this)}>
                        <img src="/imgs/tel.png"/><span>联系客服</span>
                    </div>
                    <div className="giftExchange" onClick={this.handleExChange.bind(this)}>
                        立即兑换
                    </div>
                </div>
            </div>
        )
    }
}

export default connect((state)=>state)(GiftBagDetail)