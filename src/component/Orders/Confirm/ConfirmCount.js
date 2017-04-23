/**
 * Created by hcy on 2017/4/22.
 */
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

class ConfirmCount extends React.Component{
    constructor(props){
        super(props)
    }


    render(){

        return(
            <div className="conCount">
                数量：{this.props.ele.goodCount}
            </div>
        )
    }
}

export default connect((state) => state)(ConfirmCount)





