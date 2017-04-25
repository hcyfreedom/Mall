/**
 * Created by hcy on 2017/4/22.
 */

import React from 'react'
import ConfirmOrderItem from './ConfirmOrderItem'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {get,post} from '../../../http/http'
import * as mallActions from '../../../action/mallActions'

class ConfirmSelect extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        let actions = bindActionCreators(mallActions,this.props.dispatch)
        get('/good/getRate',res => {
            actions.getRate(res.data)
        })
    }

    changeCoin(event){
        let actions = bindActionCreators(mallActions,this.props.dispatch);
            actions.changeCoin(event.target.value);


        if(event.target.value>this.props.ele.maxCoin){
            actions.changeCoin('没有那么多哦')
        }
        // else if(event.target.value<0){
        //     actions.changeCoin()
        // }

    }
    changePoint(event){
        let actions = bindActionCreators(mallActions,this.props.dispatch);
            actions.changePoint(event.target.value);

        if(event.target.value>this.props.ele.maxPoint){
            actions.changePoint('没有那么多哦')
        }
        // else if(event.target.value<0){
        //     actions.changePoint('请输入正数')
        // }

    }

    render(){
        let actions = bindActionCreators(mallActions,this.props.dispatch);
        let {selectCoin,selectPoint} = this.props.homeReducer;
        let {pointRate,coinRate} = this.props.homeReducer;
        let reallyPrice = (this.props.ele.newPrice-selectCoin*coinRate - selectPoint*pointRate)*this.props.ele.goodCount;
        return(
           <div>
               <div className="conSelect">
                   <div className="conCoin">
                       <div className="conCircleIcon">
                       </div>
                       <span>使用部落币</span>
                       <input value={selectCoin} placeholder={'可使用'+this.props.ele.maxCoin} onChange={(event) => this.changeCoin(event)}  />
                   </div>

                   <div className="conCoin">
                       <div className="conCircleIcon">
                       </div>
                       <span>使用部落分</span>
                       <input value={selectPoint}  placeholder={'可使用'+this.props.ele.maxPoint} onChange={(event) => this.changePoint(event)} />
                   </div>
               </div>
               <div className="conReally">
                   实付：<span>￥{reallyPrice}</span>
               </div>
           </div>
        )
    }
}

export default connect((state) => state)(ConfirmSelect)

