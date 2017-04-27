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
class ShopActivity extends React.Component{
    constructor(props){
        super(props)

    }
    componentDidMount(){
        let actions = bindActionCreators(mallActions,this.props.dispatch);

        get('/shop/getActivityImgUrl/'+this.props.path.id,(res) => {
            actions.getActivityImgUrl(res.data)
        })

    }
    render(){

        let {activityImgUrl,activityShopId} = this.props.homeReducer;
        let actions = bindActionCreators(mallActions,this.props.dispatch)
        return(
            <img src={activityImgUrl} style={{width:'100%',height:'400px'}} />
        )
    }
}
export default connect((state)=>state)(ShopActivity)