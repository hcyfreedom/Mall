/**
 * Created by hcy on 2017/4/17.
 */
import React from 'react';

export default class CartItems extends React.Component{
    render(){
        return(
            <div>

                <div className="cartWrap">
                    <div className="cartItems">
                        <div className="cartCircleIcon"></div>
                        <img className="cartImg" src="/imgs/a1.png"/>
                        <div className="cartContent">
                            <div className="carItemsTitle">{this.props.ele.name}</div>
                            <div className="carItemsReal">￥{this.props.ele.newPrice}</div>
                            <div className="cartItemsLow">最低实付￥{this.props.ele.minPrice}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}