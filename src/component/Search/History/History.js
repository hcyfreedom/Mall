/**
 * Created by hcy on 2017/4/10.
 */
import  React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as afterActions from '../../../action/afterActions'
import HistoryItem from './HistoryItem'
 class History extends React.Component{
     constructor(props){
         super(props)
     }



    render(){

let {historyItem} = this.props.afterReducer;

       const items = historyItem.map((ele,id) => {
           return <HistoryItem ele={ele} key={id}/>
       })

        return(
                <div>
                    <div className="historySe" style={{color:'#0c4ca3'}}><span>历史搜索</span></div>

                    {items}
                </div>
        )
    }
}
export default connect((state)=>state)(History)