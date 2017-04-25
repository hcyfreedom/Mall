/**
 * Created by hcy on 2017/4/25.
 */
import React from 'react'
import {Link} from 'react-router-dom'

export default class GiftBagItems extends React.Component{
    render(){
        return(
            <Link to={'/giftsBagMall/'+this.props.ele.id}>
                <div className="gift">
                    <img src={this.props.ele.thumbnail}/>
                    <div className="giftValue">
                        <p>{this.props.ele.name}</p>
                        <div><img src="/imgs/buluozuan.jpg"/>&nbsp;x&nbsp;{this.props.ele.cost}</div>
                    </div>
                    <div className="giftExchange">
                        立即兑换
                    </div>
                    <div style={{clear:'both'}}></div>

                </div>
            </Link>
        )
    }
}