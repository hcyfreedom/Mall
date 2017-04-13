/**
 * Created by hcy on 2017/3/29.
 */
import React from 'react'
import ClassifyItem from "./ClassifyBarItem";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as mallActions from '../../../action/mallActions'
class ClassifyBar extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        let {classifyItem} = this.props.homeReducer;
        let actions = bindActionCreators(mallActions,this.props.dispatch);
        const classifyItems = classifyItem.map((ele,idx) =>{
            return <ClassifyItem key={idx} index={idx} src={ele} actions={actions} />
        });
        return(
            <div className="classifyBox">
                {classifyItems}
            </div>
        )
    }
}
export default connect((state)=>state)(ClassifyBar)