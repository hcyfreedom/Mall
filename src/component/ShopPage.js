/**
 * Created by hcy on 2017/4/6.
 */
import React from 'react'
import Nav from './Search/Nav'
import ShowBlock from './Shop/ShowBlock'
import ShowSelector from './Shop/ShowSelector'
import ShowBottom from './Shop/ShowBottom'
// pc
import PcShopIndex from '../pcComponent/Shop/ShopIndex'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {get} from "../http/http"
import * as mallActions from '../action/mallActions'


 class ShopPage extends React.Component{
    constructor(props){
        super(props)

    }
    componentDidMount(){
        let {shopHeadImgUrl,shopMainShopId} = this.props.homeReducer;
        let actions = bindActionCreators(mallActions,this.props.dispatch);
      let  pathParams=this.props.match.params.id;
        get('/shop/getShopMainPage/'+pathParams,(res) => {
            actions.getShopMainPage(res.data)
        })

    }

     render() {
         const result = matchMedia('(orientation: landscape)').matches;
         if(result)
             return this.pcRender()
         return this.mobRender();
     }
     // pc端
        pcRender(){
            return(
                <PcShopIndex/>
            )
        }

    // 手机端
    mobRender(){

        let {shopHeadImgUrl,shopMainShopId} = this.props.homeReducer;
        let actions = bindActionCreators(mallActions,this.props.dispatch)

        return(
            <div>
                <Nav location={this.props.location}/>
                <img src={shopHeadImgUrl} style={{width:'100%',marginTop:'80px'}}/>
                <ShowSelector pathParams={this.props.match.params}/>
                <div style={{width:'100%',height:'150px'}}></div>
                <ShowBottom pathParams={this.props.match.params}/>
            </div>
        )
    }
}
export default connect((state) =>state)(ShopPage)