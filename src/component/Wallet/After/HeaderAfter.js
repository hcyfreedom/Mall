/**
 * Created by hcy on 2017/4/26.
 */
import React from 'react'
import Nav from '../../Cart/CartTopNav'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {post,get} from "../../../http/http"
import * as afterActions from '../../../action/afterActions'
import {Link} from 'react-router-dom'
 class HeaderAfter extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        let actions = bindActionCreators(afterActions,this.props.dispatch);
        get('/main/getUserInfo',(res) => {
            actions.getUserInfo(res.data);
            console.log(res.data)
        })
    }

    render(){
        let {userInfo} = this.props.afterReducer;
        console.log(userInfo);
        return(
        <div>
            <Nav navTitle="我的行囊"/>
            <div style={{position:'relative',top:'79px' }}>
                <div className="waHeader">
                    <div className="headImg">
                        <img src="/imgs/headIcon.png"/>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default connect((state)=>state)(HeaderAfter)