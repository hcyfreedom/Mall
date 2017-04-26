/**
 * Created by hcy on 2017/4/26.
 */
import React from 'react'
import {connect} from 'react-redux';
import Items from './SeProductionItem'
import {bindActionCreators} from 'redux';
import {post,get} from "../../../http/http"
import * as afterActions from '../../../action/afterActions'
import {Link} from 'react-router-dom'
class SearchOut extends React.Component{
    constructor(props){
        super(props)
    }




    render(){
        return(
            <div>

            </div>
        )
    }
}
export default connect((state)=>state)(SearchOut)