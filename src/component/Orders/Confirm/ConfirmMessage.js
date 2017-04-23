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

class ConfirmMessage extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        let {selectCoin,selectPoint} = this.props.homeReducer;

        return(
            <div style={{float:'right',paddingRight:'60px',color:'grey',fontSize:'24px'}}>
                <div>运费：包邮</div>
                <div>部落币：{selectCoin}</div>
                <div>部落分：{selectPoint}</div>
                <div style={{fontSize:'28px'}}>总计：<span style={{color:'#EA2735'}}>{}</span></div>
            </div>
        )
    }
}
export default connect((state) => state)(ConfirmMessage)