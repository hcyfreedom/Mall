/**
 * Created by hcy on 2017/4/26.
 */
/**
 * Created by hcy on 2017/4/12.
 */
import React from 'react'
import ProductionItem from "../Production/ProductionItem";
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {get} from "../../../http/http"
import * as mallActions from '../../../action/mallActions'
import PaymentFail from "../../Payment/PaymentFail";

class ShowClassify extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        let {mainPageGoods} = this.props.homeReducer;
        let actions = bindActionCreators(mallActions,this.props.dispatch);
        let goods = mainPageGoods[this.props.classifyId]

        return(
            <div>
                <div className="showBanner2">
                    <span className="showBannerWord">1111</span>
                    <Link to="/home/cate" className="showSpan">&nbsp;>more</Link>
                </div>


                <div style={{backgroundColor:'white',paddingLeft:'10px',paddingRight:'10px'}}>


                </div>

            </div>
        )
    }
}
export default connect((state)=>state)(ShowClassify)