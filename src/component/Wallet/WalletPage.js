/**
 * Created by hcy on 2017/4/26.
 */
import React from 'react';

import WalletBefore from './before/Wallet';
import WalletAfter from './After/HeaderAfter'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {post,get} from "../../http/http"
import * as afterActions from '../../action/afterActions'
import {Link} from 'react-router-dom'


class WalletPage extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        let actions = bindActionCreators(afterActions,this.props.dispatch);
        get('/account/checkLogin',(res) => {
            actions.checkLogin(res.data)
        });
    }
    render(){
        let {checkLogin} = this.props.afterReducer;
        if (!checkLogin){

            return  <WalletBefore/>

        }else{

              return <WalletAfter/>

        }


    }
}
export default connect((state)=>state)(WalletPage)