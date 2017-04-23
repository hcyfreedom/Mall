/**
 * Created by hcy on 2017/3/30.
 */
import React from 'react'
import {Link} from 'react-router-dom'
import ProductionItem from "../Production/ProductionItem";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {get} from "../../../http/http"
import * as mallActions from '../../../action/mallActions'
class ShowBAO extends React.Component{
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
        let {classifySecond} = this.props.homeReducer;
        let actions = bindActionCreators(mallActions,this.props.dispatch);

        const productionItems = classifySecond.slice(0,3).map((ele,id) =>{
            return <Link to={'/information/'+ele.shopId+"/"+ele.id} key={id}><div className="pRow"> <ProductionItem src={ele} key={id} actions={actions}/></div></Link>
        });

        return(
            <div>
                <div className="showBanner">
                    <img src="../imgs/m2.png"/>
                    <Link to="/home/cate"><span>&nbsp;>more</span></Link>
                </div>

                <div className="AllProductionBox">
                {productionItems}
                </div>
                <div style={{width:'100%',height:'198px'}}>

                </div>
            </div>
        )
    }
}
export default connect((state) => state)(ShowBAO)