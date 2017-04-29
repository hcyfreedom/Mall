/**
 * Created by hcy on 2017/4/26.
 */
import React from 'react';
import NewSup from './NewSup'
import OldSup from './OldSup'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {post,get} from "../../../http/http"
import * as afterActions from '../../../action/afterActions'
import {Link} from 'react-router-dom'


class Suspension extends React.Component{
    constructor(props){
        super(props)
        this.state={
            checkLogin:false
        }
    }

    componentDidMount(){
        post('/account/checkLogin',{},(res) => {
            this.setState({
                checkLogin:res.data.msg
            })
        });
    }
    render(){
        let {checkLogin} = this.props.afterReducer;
        console.log(checkLogin)
        if (this.state.checkLogin){
            return <NewSup/>

        }else{
            return <OldSup/>

        }


    }
}
export default connect((state)=>state)(Suspension)