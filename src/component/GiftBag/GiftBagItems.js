/**
 * Created by hcy on 2017/4/25.
 */
import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {post} from '../../http/http'
import {bindActionCreators} from 'redux';
import {get} from "../../http/http"
import * as afterActions from '../../action/afterActions'
class GiftBagItems extends React.Component{
    handleClick(){
        post('/good/exchangeGift/'+this.props.ele.id,{

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
            //失败的回调函数
        })
    }

    render(){
        return(
                <div className="gift">
                    <Link to={'/giftsBagMall/'+this.props.ele.id}>
                        <img src={this.props.ele.thumbnail}/>
                    </Link>

                    <div className="giftValue">
                        <p>{this.props.ele.name}</p>
                        <div><img src="/imgs/buluozuan.jpg"/>&nbsp;x&nbsp;{this.props.ele.cost}</div>
                    </div>
                    <div className="giftExchange" onClick={this.handleClick.bind(this)}>
                        立即兑换
                    </div>
                    <div style={{clear:'both'}}></div>

                </div>
        )
    }
}
export default connect((state)=>state)(GiftBagItems)