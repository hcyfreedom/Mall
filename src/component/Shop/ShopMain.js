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
class ShopMain extends React.Component{
    constructor(props){
        super(props)

    }
    componentDidMount(){
        let actions = bindActionCreators(mallActions,this.props.dispatch);
        let {shopHeadImgUrl,shopMainGoods,shopMainImgUrl,shopMainShopId} = this.props.homeReducer;
        get('/shop/getShopMainPage/'+shopMainShopId,(res) => {
            actions.getShopMainPage(res.data)
        })

    }
    render(){

        let {shopHeadImgUrl,shopMainGoods,shopMainImgUrl,shopMainShopId} = this.props.homeReducer;
        let actions = bindActionCreators(mallActions,this.props.dispatch)

        const productionItems = shopMainGoods.map((ele,id) =>{
            return <Link to={'/information/'+ele.shopId+"/"+ele.id} key={id}><div className="pRow"> <ProductionItem src={ele} key={id} actions={actions}/></div></Link>
        });

        const listContainer = [];

        for(let i = 0;i < productionItems.length; i= i +3){

            listContainer.push(<div key={i} className="sRow">{productionItems.slice(i,i+3)}</div>) ;
        }

        return(
            <div>
                <div className="block">
                    <img src={shopMainImgUrl}/>
                </div>
                <div className="AllProduction">
                    {listContainer}
                </div>
            </div>
        )
    }
}
export default connect((state)=>state)(ShopMain)