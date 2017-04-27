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
        let productions = new Array();

        for (let i = 0; i < classifyItem.length; i += 5) {
            let tmp = classifyItem.slice(i, i + 5).map((ele, id) => {
                return <ClassifyItem key={id + i} index={id+ i} src={ele}  />
            });
            productions[i / 5] = <div key={i/5} className="classifyBox">{tmp}</div>
        }



        return(
           <div>
               {productions}
           </div>
        )
    }
}
export default connect((state)=>state)(ClassifyBar)