/**
 * Created by hcy on 2017/4/22.
 */
import React from 'react'
import ConfirmOrderItem from './ConfirmOrderItem'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {get,post} from '../../../http/http'
import * as mallActions from '../../../action/mallActions'

class ConfirmOrder extends React.Component{
constructor(props){
    super(props)
}

componentWillMount(){
    let actions = bindActionCreators(mallActions,this.props.dispatch);
    actions.targetOrders();
    let {confirmOrders} = this.props.homeReducer;
    actions.confirmOrders(confirmOrders);
}

    render(){
        let actions = bindActionCreators(mallActions,this.props.dispatch);
        let {lastOrders} = this.props.homeReducer;
        let orderList  = lastOrders.filter(function (item) {
            return item!=undefined
        });
        console.log(orderList)
        const items = orderList.map((ele,id)=>{
            return <ConfirmOrderItem  ele={ele} key={id} index={id}/>

        })
        return(
            <div>
                {items}
            </div>
        )
    }
}

export default connect((state) => state)(ConfirmOrder)





