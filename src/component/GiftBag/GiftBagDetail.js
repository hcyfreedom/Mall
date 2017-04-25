/**
 * Created by hcy on 2017/4/25.
 */
/**
 * Created by hcy on 2017/3/29.
 */
import React from 'react';
import GiftBagItems from './GiftBagItems'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {get} from "../../http/http"
import * as afterActions from '../../action/afterActions'

class  GiftBagDetail extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        let actions = bindActionCreators(afterActions,this.props.dispatch);
        const path  = this.props.history.location.pathname;
        const giftId = path.split('/')[2];
        console.log(giftId)
        get('/good/getGift/'+giftId,(res) => {
            actions.getGiftsDetail(res.data)
        })
    }

    handleClick(){
        let {giftsDetail} = this.props.afterReducer;
        alert(giftsDetail.telephone);
    }

    render(){
        let {giftsDetail} = this.props.afterReducer;
        console.log(giftsDetail)
        return(
            <div>
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
                    <div className="giftExchange">
                        立即兑换
                    </div>
                </div>
            </div>
        )
    }
}

export default connect((state)=>state)(GiftBagDetail)