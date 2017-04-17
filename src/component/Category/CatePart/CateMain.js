/**
 * Created by hcy on 2017/4/12.
 */
import React from 'react'

import ProductionItem from "../../Home/Production/ProductionItem";
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {get} from "../../../http/http"
import * as mallActions from '../../../action/mallActions'
class CateMain extends React.Component{
    constructor(props){
        super(props)

    }
    componentDidMount (){
        let actions = bindActionCreators(mallActions,this.props.dispatch);
        let {classifyGOODS,classifyGOODSId} = this.props.homeReducer;
        get('/classify/getGoods?'+classifyGOODSId,(res) => {
            actions.getClassifyGood(res.data);
        })

    }
    render(){

        let {classifyGOODS} = this.props.homeReducer;
        let actions = bindActionCreators(mallActions,this.props.dispatch);
        const list = [];
        for(let key in classifyGOODS){
            const items = classifyGOODS[key];
            list.push(items)
        }

         const listItems1 =   list.map((ele,id)=>{
            return <Link to={'/information/'+ele.shopId+"/"+ele.id} key={id}><div className="pRow"> <ProductionItem src={ele} key={id} ctions={actions}/></div></Link>
        })

        const listContainer = [];

        for(let i = 0;i < listItems1.length; i= i +2){

           listContainer.push(<div key={i} className="gRow">{listItems1.slice(i,i+2)}</div>) ;
        }


        return(
            <div style={{position:'absolute',right:'100px',width:'70%',top:"470px"}}>
                <div className="AllProduction" style={{backgroundColor:"#F2F2F2"}}>
                    {listContainer}
                </div>
                <div className="spaceBar"></div>
            </div>
        )
    }
}
export default connect((state)=>state)(CateMain)