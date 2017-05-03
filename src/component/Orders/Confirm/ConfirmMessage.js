/**
 * Created by hcy on 2017/4/22.
 */
import React from 'react'
import ConfirmCount from './ConfirmCount'
import ConfirmSelect from './ConfirmSelect'

import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {post} from '../../../http/http'
import {get} from "../../../http/http"
import * as mallActions from '../../../action/mallActions'

class ConfirmMessage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let actions = bindActionCreators(mallActions, this.props.dispatch);

        let {selectCoin, selectPoint,orderReallyPrice} = this.props.homeReducer;
        let resultCoin = 0;
        let resultPoint = 0;
        let resultPrice = 0;
        console.log(orderReallyPrice);
        for (let val of selectCoin) {
            if (val % 1 === 0)
                resultCoin = 1*val+1*resultCoin
        }
        for (let val of selectPoint) {
            if (val % 1 === 0)
                resultPoint = 1*val + 1*resultPoint;
        }
        for (let val of orderReallyPrice) {
            if (val % 1 === 0)
                resultPrice = 1*val + 1*resultPrice;
        }
        let {deliveryWay} = this.props.homeReducer;
        if(deliveryWay == "顺丰速运"){
            resultPrice += 23;
        }

        actions.resultPrice(resultPrice);


        return (
            <div style={{float:'right',paddingRight:'60px',color:'grey',fontSize:'2em',lineHeight:'60px'}}>
                {/*<div>运费</div>*/}
                <div>部落币：{resultCoin}</div>
                <div>部落分：{resultPoint}</div>
                <div style={{fontSize:'1em'}}>总计：<span style={{color:'#EA2735'}}>{resultPrice}</span></div>
            </div>
        )
    }
}
export default connect((state) => state)(ConfirmMessage)