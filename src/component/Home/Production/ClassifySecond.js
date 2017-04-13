/**
 * Created by hcy on 2017/4/12.
 */
/**
 * Created by hcy on 2017/3/29.
 */
/**
 * Created by hcy on 2017/3/29.
 */
import React from 'react'
import ProductionItem from "./ProductionItem";
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {get} from "../../../http/http"
import * as mallActions from '../../../action/mallActions'
class ClassifySecond extends React.Component{
    constructor(props){
        super(props)

    }
    componentDidMount(){
        let actions = bindActionCreators(mallActions,this.props.dispatch);
        get('/MallMore/getGood',(res) => {
            actions.getGood(res.data)
        })

    }
    render(){
        let {classifySecond} = this.props.homeReducer;
        let actions = bindActionCreators(mallActions,this.props.dispatch);

        const productionItems = classifySecond.map((ele,id) =>{
            return <Link to={'/information/shop'+ele.shopId+"/"+ele.id} key={id}><div className="pRow"> <ProductionItem src={ele} key={id} actions={actions}/></div></Link>
        });


        return(
            <div>
                <div className="AllProductionBox">
                    {productionItems}
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(ClassifySecond)