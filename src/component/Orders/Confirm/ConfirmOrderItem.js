/**
 * Created by hcy on 2017/4/22.
 */
import React from 'react'
import ConfirmCount from './ConfirmCount'
import ConfirmSelect from './ConfirmSelect'

import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {post} from '../../../http/http'
import {get} from "../../../http/http"
import * as mallActions from '../../../action/mallActions'

class ConfirmOrderItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        return(
            <div>
                <div className="cartShopName">
                    <Link to={'/shop/'+this.props.ele.shopId}>
                        <img style={{marginLeft:'58px'}} src="/imgs/shop.png"/><p>{this.props.ele.shopName}</p>
                        <div className="goTo">&gt;</div>
                    </Link>
                </div>
                <div className="cartItems" style={{marginTop:'15px',borderBottom:'20px solid white',height:'252px'}}>
                    <Link to={'/information/' + this.props.ele.shopId +'/'+ this.props.ele.goodId} >
                        <div className="cartBody" style={{marginLeft:'60px',height:"50%"}}>
                            <img className="cartImg" src="/imgs/a1.png" style={{width:'120px',height:'120px'}}/>
                            <div className="cartContent">
                                <div className="carItemsTitle">{this.props.ele.name}</div>
                                <div>唐僧价：<span className="carItemsReal">￥{this.props.ele.newPrice}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <ConfirmCount ele={this.props.ele}/>
                   <ConfirmSelect ele={this.props.ele} index={this.props.index} onClick={() => this.props.changeSelect(this.props.ele.goodId)} />
                </div>
            </div>
        )
    }
}

export default connect((state) => state)(ConfirmOrderItem)

