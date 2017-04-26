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
            return <GiftBagItems ele={ele} key={id}/>
        })
        const listContainer = [];

        for(let i = 0;i < items.length; i= i +2){

            listContainer.push(<div key={i} className="gRow" style={{justifyContent:'space-around'}}>{items.slice(i,i+2)}</div>) ;
        }

        return(
            <div style={{position:'relative',top:'100px',marginBottom:'120px'}}>
                {listContainer}
            </div>
        )
    }
}

export default connect((state)=>state)(GiftBag)