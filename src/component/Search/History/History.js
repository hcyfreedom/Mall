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
        const history = localStorage.history;

        console.log(history)
        // const historyItems = history.map((ele,idx) =>{
        //     return <HistoryItem ele={ele} key={idx}/>
        // });
        return(
                <div>
                    <div className="historySe" style={{color:'#0c4ca3'}}><span>历史搜索</span></div>
                    {/*{historyItems}*/}
                </div>
        )
    }
}
export default connect((state)=>state)(History)