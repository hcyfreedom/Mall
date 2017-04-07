/**
 * Created by hcy on 2017/3/29.
 */
import React from 'react'
import BrandItem from './BrandItem'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as mallActions from '../../../action/mallActions'
 class Brand extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        let {brandItem} = this.props.homeReducer;
        let actions = bindActionCreators(mallActions,this.props.dispatch);
        const brandItems = brandItem.map((ele,idx)=>{
            return <BrandItem key={idx} index={idx} element={ele} actions={actions}/>
        });


        return(
            <div className="brandBox">
                    {brandItems}
            </div>
        )
    }
}
export default connect((state)=>state)(Brand)