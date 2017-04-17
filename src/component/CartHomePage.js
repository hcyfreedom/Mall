/**
 * Created by hcy on 2017/4/15.
 */
import React from 'react'
import CartTopNav from './Cart/CartTopNav'
import Cart from './Cart/Cart'
export default class CartHomePage extends React.Component{
    render(){
        return(
            <div>
                <CartTopNav navTitle="购物车"/>
                <Cart/>
            </div>
        )
    }
}