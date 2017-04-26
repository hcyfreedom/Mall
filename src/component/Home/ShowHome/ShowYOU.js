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

        let productions = new Array();
        for(let i = 0;i < outstanding_shop_goods.length;i+=3){
            let tmp = outstanding_shop_goods.slice(i,i+3).map((ele,id) =>{
                console.log(i+id)
                return <Link to={'/information/'+ele.shopId+"/"+ele.id} key={id+i}><div className="pRow" key={id+i}> <ProductionItem src={ele} key={id+i} actions={actions}/></div></Link>
            });
            productions[i/3] = <div key={i/3} className="AllProductionBox">{tmp}</div>
        }


        const listContainer = [];

        for(let i = 0;i < productionItems.length; i= i +3){

            listContainer.push(<div key={i} className="ggRow">{productionItems.slice(i,i+3)}</div>) ;
        }


        return(
            <div>
                <div className="showBanner">
                    <img src="../imgs/m1.png"/>
                    <Link to="/home/cate"><span>&nbsp;>more</span></Link>
                </div>

                <div style={{width:"100%",height:'60px',backgroundColor:'white',display:'flex',justifyContent:'space-between',borderBottom:'1px solid grey',fontSize:'20px',lineHeight:'60px'}}>
                    &nbsp;&nbsp;&nbsp;{ShowList[1]}
                    <Link to={'/shop/'+ShowList[0]}>
                        <div>&gt;进入店铺&nbsp;&nbsp;&nbsp;</div>
                    </Link>
                </div>
                {productions}

            </div>
        )
    }
}
export default connect((state)=>state)(ShowYOU)