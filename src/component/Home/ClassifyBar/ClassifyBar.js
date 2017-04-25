/**
 * Created by hcy on 2017/3/29.
 */
import React from 'react'
import ClassifyItem from "./ClassifyBarItem";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {get} from '../../../http/http'
import * as mallActions from '../../../action/mallActions'
class ClassifyBar extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        let actions = bindActionCreators(mallActions,this.props.dispatch);
        get('/main/getClassify',(res) => {
            actions.getClassify(res.data)
        })
    }

    render(){

        let {classifyItem} = this.props.homeReducer;


        const classifyItems = classifyItem.map((ele,idx) =>{
            return <ClassifyItem key={idx} index={idx} src={ele}  />
        });

        return(
           <div>
               <div className="classifyBox">
                   {classifyItems.slice(0,5)}
               </div>
               <div className="classifyBox">
                   {classifyItems.slice(5)}
               </div>
           </div>
        )
    }
}
export default connect((state)=>state)(ClassifyBar)