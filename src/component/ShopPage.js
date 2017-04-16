/**
 * Created by hcy on 2017/4/6.
 */
import React from 'react'
import ShopNav from './Shop/ShopNav'
import ShowBlock from './Shop/ShowBlock'
import ShowSelector from './Shop/ShowSelector'
import ShowBottom from './Shop/ShowBottom'
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
        get('/shop/getShopMainPage/'+shopMainShopId,(res) => {
            actions.getShopMainPage(res.data)
        })

    }
    render(){

        let {shopHeadImgUrl,shopMainShopId} = this.props.homeReducer;
        let actions = bindActionCreators(mallActions,this.props.dispatch)

        return(
            <div>
                <ShopNav/>
                <ShowBlock src={shopHeadImgUrl}/>
                <ShowSelector/>
                <div style={{width:'100%',height:'150px'}}></div>
                <ShowBottom/>
            </div>
        )
    }
}
export default connect((state) =>state)(ShopPage)