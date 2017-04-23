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

class ConfirmDelivery extends React.Component{
constructor(props){
    super(props)
}


    render(){

        let actions = bindActionCreators(mallActions,this.props.dispatch);
        let {deliveryWay} = this.props.homeReducer;
        return(
            <div style={{width:'100%',backgroundColor:'white'}}>
                <div className="conDelivery">
                    <span style={{fontSize:'28px'}}>配送方式:{deliveryWay}</span>
                    <div style={{fontSize:'24px',color:'grey'}}>快递<span style={{fontSize:'30px',color:'black'}}>&gt;</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect((state) => state)(ConfirmDelivery)