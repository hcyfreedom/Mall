/**
 * Created by hcy on 2017/4/26.
 */
import React from 'react'
import Nav from '../../Cart/CartTopNav';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {post,get} from "../../../http/http"
import * as afterActions from '../../../action/afterActions'

class OrderPage extends React.Componnet{
    render(){
        return(
            <div>

            </div>
        )
    }
}

export default connect((state)=>state)(OrderPage)