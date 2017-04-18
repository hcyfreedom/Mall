/**
 * Created by hcy on 2017/4/17.
 */
import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {get} from "../../http/http"
import * as mallActions from '../../action/mallActions'

class CartShopName extends React.Component{
    constructor(props){
        super(props)
    }

    handleClick(){
        window.history.go(-1)
    }

    render(){
        return(
            <div className="cartShopName"><div className="cartCircle"></div><img src="/imgs/1.jpg"/><p>{this.props.ele.shopName}</p><div className="goTo" onClick={this.handleClick.bind(this)}>&gt;</div>
                <div className="cartEditor">编辑</div>
            </div>
        )
    }
}
export default connect((state)=>state)(CartShopName)