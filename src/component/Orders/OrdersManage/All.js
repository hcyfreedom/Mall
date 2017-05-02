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

class All extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        let actions = bindActionCreators(afterActions,this.props.dispatch);

        get('/good/getOrderInfo/'+'All',(res) => {
            actions.allOrders(res.data)
        })


    }

    render(){
        let {allOrders} = this.props.afterReducer;

        const items = allOrders.map((ele,id)=>{
            return <Items key ={id} ele={ele}/>
        })
        return(
            <div>
                {items}
            </div>
        )
    }
}

export default connect((state) =>state)(All)