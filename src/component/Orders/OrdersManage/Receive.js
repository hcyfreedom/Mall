/**
 * Created by hcy on 2017/4/26.
 */
import React from 'react'
import {connect} from 'react-redux';
import Items from './OrderItems'
import {Link} from 'react-router-dom'
import {bindActionCreators} from 'redux';
import {post,get} from "../../../http/http"
import * as afterActions from '../../../action/afterActions'

class Receive extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        let actions = bindActionCreators(afterActions,this.props.dispatch);

        get('/order/getOrderInfo/'+'wait4receive',(res) => {
            actions.receiverOrders(res.data)
        })


    }

    render(){
        let {receiverOrders} = this.props.afterReducer;

        const items = receiverOrders.map((ele,id)=>{
            return <Items key ={id} ele={ele}/>
        })
        return(
            <div>
                {items}
            </div>
        )
    }
}

export default connect((state) =>state)(Receive)