/**
 * Created by hcy on 2017/4/17.
 */
import React from 'react';
import {Link} from 'react-router-dom'
import ChangeOrderCount from './ChangeOrderCount'

export default class CartItems extends React.Component{
    render(){
        return(
            <div>

                <div className="cartWrap">
                    <div className="cartItems">
                        <div className="cartCircleIcon"></div>
                        <Link to={'/information/' + this.props.ele.shopId + this.props.ele.goodId} >
                            <div className="cartBody">
                                <img className="cartImg" src="/imgs/a1.png"/>
                                <div className="cartContent">
                                    <div className="carItemsTitle">{this.props.ele.name}</div>
                                    <div className="carItemsReal">￥{this.props.ele.newPrice}</div>
                                    <div className="cartItemsLow">最低实付￥{this.props.ele.minPrice}</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <ChangeOrderCount/>
                </div>
            </div>
        )
    }
}