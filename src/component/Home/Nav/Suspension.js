/**
 * Created by hcy on 2017/4/26.
 */
import React from 'react';
import NewSup from './NewSup'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {post,get} from "../../../http/http"
import * as afterActions from '../../../action/afterActions'
import {Link} from 'react-router-dom'


class Suspension extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        let actions = bindActionCreators(afterActions,this.props.dispatch);
        post('/account/checkLogin',(res) => {
            actions.checkLogin(res.data)
        });
    }
    render(){
        let {checkLogin} = this.props.afterReducer;
        if (!checkLogin){
            return <div className="SusWrap" style={{fontSize:'30px',lineHeight:'280px',color:'#ef4036'}}>请登录</div>

        }else{

            return <NewSup/>

        }


    }
}
export default connect((state)=>state)(Suspension)