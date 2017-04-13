/**
 * Created by hcy on 2017/4/10.
 */
import  React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as mallActions from '../../../action/mallActions'
import HistoryItem from './HistoryItem'
 class History extends React.Component{
     constructor(props){
         super(props)
     }



    render(){
        let {historyItem} = this.props.homeReducer;
        let actions = bindActionCreators(mallActions,this.props.dispatch);
        const historyItems = historyItem.map((ele,idx) =>{
            return <Link to={ele.href} key={idx}><HistoryItem src={ele} actions={actions}/></Link>
        });
        return(
                <div>
                    <div className="historySe" style={{color:'#0c4ca3'}}><span>历史搜索</span></div>
                    {historyItems}
                </div>
        )
    }
}
export default connect((state)=>state)(History)