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
class ShowYOU extends React.Component{
    constructor(props){
        super(props)

    }
    componentDidMount(){
        let actions = bindActionCreators(mallActions,this.props.dispatch);
        get('/main/getMainPageGoods',(res) => {
            actions.getMainPageGoods(res.data)
        })

    }
    render(){
        let {mainPageGoods} = this.props.homeReducer;
        let actions = bindActionCreators(mallActions,this.props.dispatch);

        cons

        const productionItems = mainPageGoods.outstanding_shop_goods.map((ele,id) =>{
            return <Link to={'/information/'+ele.shopId+"/"+ele.id} key={id}><div className="pRow"> <ProductionItem src={ele} key={id} /></div></Link>
        });


        const listContainer = [];

        for(let i = 0;i < listItems1.length; i= i +2){

            listContainer.push(<div key={i} className="gRow">{listItems1.slice(i,i+2)}</div>) ;
        }


        return(
            <div>
                <div className="showBanner">
                    <img src="../imgs/m1.png"/>
                    <Link to="/home/cate"><span>&nbsp;>more</span></Link>
                </div>

                <div style={{width:"100%",height:'60px',backgroundColor:'white',display:'flex',justifyContent:'space-between',borderBottom:'1px solid grey',fontSize:'20px',lineHeight:'60px'}}>
                    &nbsp;&nbsp;&nbsp;{outstanding_shop_info.outstanding_shop_name}
                    <Link to={'/shop/'+outstanding_shop_info.outstanding_shop_id}>
                        <div>&gt;进入店铺&nbsp;&nbsp;&nbsp;</div>
                    </Link>
                </div>

                <div className="AllProductionBox">
                    {productionItems}
                </div>
                <div className="AllProductionBox">
                    {productionItems2}
                </div>
            </div>
        )
    }
}
export default connect((state)=>state)(ShowYOU)