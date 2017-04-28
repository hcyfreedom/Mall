/**
 * Created by hcy on 2017/4/8.
 */
import React from "react"
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as mallActions from '../../action/mallActions'
import {get,post} from '../../http/http'
import ShowBlock from "../Shop/ShowBlock"
 class IntroDetail extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let {introDetail,introPrice,introTsprice,introSales,introLow} = this.props.homeReducer;
        let actions = bindActionCreators(mallActions,this.props.dispatch);
        return(
            <div className="introWrap">
                <div className="introOne">
                    <div className="introDetail">{introDetail}</div>
                    {/*<ShowBlock/>*/}
                </div>
                <div className="introTwo">
                    <div className="introTsprice" style={{fontSize:'28px'}}>市场价：<span style={{textDecoration:'line-through'}}>￥{introPrice}</span></div>
                    <div style={{fontSize:'30px'}}>唐僧价：<span style={{color:'red'}}>￥{introTsprice}</span></div>
                </div>
                <div className="introThree">
                    <div style={{fontSize:'20px'}}>已销售{introSales}件</div>
                    <div className="introLow">最低实付￥{introLow}</div>
                </div>
            </div>
        )
    }
}



function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(IntroDetail)