/**
 * Created by hcy on 2017/3/29.
 */
/**
 * Created by hcy on 2017/3/29.
 */
import React from 'react'
import ProductionItem from "./ProductionItem";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as mallActions from '../../../action/mallActions'
class Production extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        let {productionItem} = this.props.homeReducer;
        let actions = bindActionCreators(mallActions,this.props.dispatch);
        const productionItems = productionItem.map((ele,idx) =>{
            return <ProductionItem key={idx} src={ele} actions={actions}/>
        });

        const items = [];

        for(let i = 0;i < productionItems.length; i= i +3){

            (items.length % 3 == 0 )? items.push(<div key={i} className="pRow">{productionItems.slice(i,i+3)}</div>) : items.push(<div key={i} className="pRow">{productionItems.slice(i,i+3)}<span className="space"></span></div>)
        }

        return(
            <div>
                <div className="AllProductionBox">
                    {items}
                </div>
            </div>
        )
    }
}
export default connect((state)=>state)(Production)