/**
 * Created by hcy on 2017/4/13.
 */
/**
 * Created by hcy on 2017/4/12.
 */
import React from 'react'

import ProductionItem from "../Home/Production/ProductionItem";
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {get} from "../../http/http"
import * as mallActions from '../../action/mallActions'
class ShopHotSale extends React.Component{
    constructor(props){
        super(props)

    }
    componentDidMount(){
        let actions = bindActionCreators(mallActions,this.props.dispatch);
        get('/MallMore/getHotSale',(res) => {
            actions.getHotSale(res.data)
        })

    }
    render(){

        let {hotSale} = this.props.homeReducer;
        let actions = bindActionCreators(mallActions,this.props.dispatch)

        let path = window.location.pathname;
        let postfix = path.substring(10);
        const list = [];
        const list1 = [];
        for(let key in hotSale){
            const items = hotSale[key];
            list.push(items)
        }
        list.map((ele,id)=>{
            if(ele.shopId == postfix){
                list1.push(ele)
            }
        })



        const productionItems = list1.map((ele,id) =>{
            return <Link to={'/information/shop'+ele.shopId+"/"+ele.id} key={id}><div className="pRow"> <ProductionItem src={ele} key={id} actions={actions}/></div></Link>
        });

        const listContainer = [];

        for(let i = 0;i < productionItems.length; i= i +3){

            listContainer.push(<div key={i} className="sRow">{productionItems.slice(i,i+3)}</div>) ;
        }

        return(
            <div>
                <div className="AllProduction">
                    {listContainer}
                </div>
            </div>
        )
    }
}
export default connect((state)=>state)(ShopHotSale)