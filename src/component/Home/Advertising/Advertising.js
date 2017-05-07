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
class Advertising extends React.Component{
    constructor(props){
        super(props)

    }
    componentDidMount(){
        let actions = bindActionCreators(mallActions,this.props.dispatch);
        get('/main/getMainPageGoods',(res) => {
            actions.getMainPageGoods(res.data)
        })
        get('/main/getAdvertisingShop',(res) => {
            actions.getAdvertisingShop(res.data)
        })

    }
    render(){

        let {mainPageGoods,advertiseId} = this.props.homeReducer;


        const advertisementList = [];
        for(let key in mainPageGoods.advertisement){
            const items = mainPageGoods.advertisement[key];
            advertisementList.push(items)

        }
        const advertisement = advertisementList.map((ele,id) =>{
            return <Link to={'/information/'+ele.shopId+"/"+ele.id} key={id}><div className="pRow"> <ProductionItem src={ele} key={id} /></div></Link>
        });



        return(
            <div style={{backgroundColor:'white'}}>
                <Link to={"/shop/"+advertiseId}><img src="/imgs/advertising.png" className="block"/></Link>
                <div className="AllProductionBox">
                    {advertisement}
                </div>




            </div>
        )
    }
}
export default connect((state)=>state)(Advertising)