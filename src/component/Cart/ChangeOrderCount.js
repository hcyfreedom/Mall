/**
 * Created by hcy on 2017/4/17.
 */

import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {get} from "../../http/http"
import * as mallActions from '../../action/mallActions'

class ChangeOrderCount extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
        post('/good/changeOrderCount/'+orderId,{
            //req没有 就不用传 否则就
            //goodId:xxx 一个js对象
        },(res) => {
            //成功的回调函数
            let data = res.data;
            if (data.code == "200"){
                console.log("success")
                actions.getGoodContent(res.data)
            }else {
                console.log("failed")
            }
        },()=>{
            //失败的回调函数
        })
    }

    render(){
        return(
            <div className="changeWrap">
                <div className="changeSub"> - </div>
                <div className="changeCount">10</div>
                <div className="changePlus"> + </div>
            </div>
        )
    }
}

export default connect((state) => state)(ChangeOrderCount)
//connect 返回了一个类对象 就是把reducer的属性和组件联系到一起