/**
 * Created by hcy on 2017/4/26.
 */
import React from 'react'
import {connect} from 'react-redux';
import Items from './SearchItems'
import {bindActionCreators} from 'redux';
import {post,get} from "../../../http/http"
import * as afterActions from '../../../action/afterActions'
import {Link} from 'react-router-dom'
class SearchOut extends React.Component{
    constructor(props){
        super(props)
    }


componentWillMount(){
    let actions = bindActionCreators(afterActions,this.props.dispatch);
    actions.jumpFalse();
}

    render(){
    let {searchOut} = this.props.afterReducer;
    const items = searchOut.map((ele,id)=>{
        return <Items key={id} ele={ele}/>
    })

    console.log(searchOut)

        return(
            <div style={{position:'relative',top:'100px'}}>
                {items}
            </div>
        )
    }
}
export default connect((state)=>state)(SearchOut)