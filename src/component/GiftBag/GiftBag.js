/**
 * Created by hcy on 2017/3/29.
 */
import React from 'react';
import GiftBagItems from './GiftBagItems'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {get} from "../../http/http"
import * as afterActions from '../../action/afterActions'

class  GiftBag extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        let actions = bindActionCreators(afterActions,this.props.dispatch);
        let {giftsEle} = this.props.afterReducer;
        get('/good/getGifts',(res) => {
            actions.getGiftsIndex(res.data)
        })
    }

    render(){
        let {giftsEle} = this.props.afterReducer;
        const items = giftsEle.map((ele,id) => {
            console.log(ele)
            return <GiftBagItems ele={ele} key={id}/>
        })
        return(
            <div style={{}}>
                {items}
            </div>
        )
    }
}

export default connect((state)=>state)(GiftBag)