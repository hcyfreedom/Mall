/**
 * Created by hcy on 2017/4/20.
 */
import React from 'react'
import Nav from '../../Cart/CartTopNav'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {post} from '../../../http/http'
import {get} from "../../../http/http"
import * as mallActions from '../../../action/mallActions'
class Delivery extends React.Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){

    }
    handleClick(){
        let actions = bindActionCreators(mallActions,this.props.dispatch);
    }
    render(){
        return(
            <div className="deli">
                <Nav navTitle="配送方式"/>
                <ul style={{position:'relative',top:'100px'}}>
                    <li><img src="/imgs/deli.png" style={{transform:'translateX(-30px)'}}/>配送方式</li>
                    <li>商家提供快递</li>
                    <li>顺丰速运<span style={{marginLeft:'60%'}}>￥23</span></li>
                    <li>门店自提</li>
                </ul>
            </div>
        )
    }
}
export default  connect((state) => state)(Delivery)