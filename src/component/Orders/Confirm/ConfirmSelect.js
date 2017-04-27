/**
 * Created by hcy on 2017/4/22.
 */

import React from 'react'
import ConfirmOrderItem from './ConfirmOrderItem'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {get, post} from '../../../http/http'
import * as mallActions from '../../../action/mallActions'

class ConfirmSelect extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        let actions = bindActionCreators(mallActions, this.props.dispatch)
        get('/good/getRate', res => {
            actions.getRate(res.data)

        })
        let {selectCoin, selectPoint} = this.props.homeReducer;
        let selectCoinValue = selectCoin[this.props.ele.orderId];
        if (selectCoinValue == undefined)
            selectCoinValue = '';
        let selectPointValue = selectPoint[this.props.ele.orderId];
        if (selectPointValue == undefined)
            selectPointValue = '';
        let {pointRate, coinRate} = this.props.homeReducer;
        let reallyPrice = Math.round((this.props.ele.newPrice - selectCoinValue * coinRate - selectPointValue * pointRate) * this.props.ele.goodCount);

        actions.changeReallyPrice({
            index: this.props.index,
            value: reallyPrice
        })


    }

    changeCoin(event) {
        event.preventDefault();
        if (event.target.value > this.props.ele.maxPoint * this.props.ele.goodCount) {
            alert("可使用数量超过上限")
            return;
        }
        let actions = bindActionCreators(mallActions, this.props.dispatch);
        actions.changeCoin({
            value: event.target.value,
            index: this.props.ele.orderId

        });

        let {selectCoin, selectPoint} = this.props.homeReducer;
        let selectCoinValue = selectCoin[this.props.ele.orderId];
        if (selectCoinValue == undefined)
            selectCoinValue = '';
        let selectPointValue = selectPoint[this.props.ele.orderId];
        if (selectPointValue == undefined)
            selectPointValue = '';
        let {pointRate, coinRate} = this.props.homeReducer;
        let reallyPrice = Math.round((this.props.ele.newPrice - selectCoinValue * coinRate - selectPointValue * pointRate) * this.props.ele.goodCount);
        actions.changeReallyPrice({
            index: this.props.index,
            value: reallyPrice
        })

        if (event.target.value > this.props.ele.maxCoin * this.props.ele.goodCount) {
            alert("可使用数量超出上限")
            return;
        }
        // else if(event.target.value<0){
        //     actions.changeCoin()
        // }

    }

    changePoint(event) {
        event.preventDefault();
        if (event.target.value > this.props.ele.maxPoint * this.props.ele.goodCount) {
            alert("可使用数量超过上限")
            return;
        }
        let actions = bindActionCreators(mallActions, this.props.dispatch);
        actions.changePoint({
            index: this.props.ele.orderId,
            value: event.target.value
        });


        let {selectCoin, selectPoint} = this.props.homeReducer;
        let selectCoinValue = selectCoin[this.props.ele.orderId];
        if (selectCoinValue == undefined)
            selectCoinValue = '';
        let selectPointValue = selectPoint[this.props.ele.orderId];
        if (selectPointValue == undefined)
            selectPointValue = '';
        let {pointRate, coinRate} = this.props.homeReducer;
        let reallyPrice = Math.round((this.props.ele.newPrice - selectCoinValue * coinRate - selectPointValue * pointRate) * this.props.ele.goodCount);

        actions.changeReallyPrice({
            index: this.props.index,
            value: reallyPrice
        })


        // else if(event.target.value<0){
        //     actions.changePoint('请输入正数')
        // }

    }


    render() {

        let actions = bindActionCreators(mallActions, this.props.dispatch);
        let {selectCoin, selectPoint,orderReallyPrice} = this.props.homeReducer;
        let selectCoinValue = selectCoin[this.props.ele.orderId];
        if (selectCoinValue == undefined)
            selectCoinValue = '';
        let selectPointValue = selectPoint[this.props.ele.orderId];
        if (selectPointValue == undefined)
            selectPointValue = '';
        console.log(selectCoinValue);
        let reallyPrice = orderReallyPrice[this.props.index];

        return (
            <div>
                <div className="conSelect">
                    <div className="conCoin">
                        {/*<div className="conCircleIcon">*/}
                        {/*</div>*/}
                        <span>使用部落币</span>
                        <input value={selectCoinValue} placeholder={"最多"+this.props.ele.maxCoin+"/件"}
                               onChange={(event) => this.changeCoin(event)}/>
                    </div>

                    <div className="conCoin">
                        {/*<div className="conCircleIcon">*/}
                        {/*</div>*/}
                        <span>使用部落分</span>
                        <input value={selectPointValue} placeholder={"最多"+this.props.ele.maxPoint+"/件"}
                               onChange={(event) => this.changePoint(event)}/>
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

