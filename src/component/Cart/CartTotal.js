/**
 * Created by hcy on 2017/4/19.
 */
import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {get} from "../../http/http"
import * as mallActions from '../../action/mallActions'

class CartTotal extends React.Component{
    render(){
        //let {totalPrice} = this.props.homeReducer.cartCircleIcon;
        let totalPrice = this.props.homeReducer.cartCircleIcon.totalPrice || this.props.homeReducer.totalPrice
        let actions = bindActionCreators(mallActions,this.props.dispatch);
        return(
            <div className={this.props.className}>

                <Link to="/orderConfirm">
                    <div className="totalBtn">
                        结&nbsp;&nbsp;算
                    </div>
                </Link>
                <div className="totalShow">
                    合计：<span style={{color:'#EA2735'}}>￥{totalPrice}</span><p>含运费</p>
                </div>
            </div>
        )
    }
}

export default connect((state) => state)(CartTotal)