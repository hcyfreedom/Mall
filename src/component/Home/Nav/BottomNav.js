/**
 * Created by Acer on 2017/2/21.
 */
import React from 'react';  //引入react组件
import BottomNavItem from './BottomNavItem';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as mallActions from '../../../action/mallActions'
class BottomNav extends React.Component {  //定义组件，也可以用React.createClass方法创建组件
    constructor(props){
        super(props);
    }



    render() {

        let {bottomItems} = this.props.afterReducer;
        let actions = bindActionCreators(mallActions,this.props.dispatch);
        const bottomNavItems = bottomItems.map((ele,idx)=>{
            let e = Object.assign({}, ele);
            if(ele.href == location.pathname)
                e.src = e.hoverSrc;
            else
                e.src = ele.src;
            return <Link key= {idx} to={ele.href}><BottomNavItem key={idx} index={idx} ele={e} {...this.props} /></Link>
        });
        return(
            <div style={{zIndex:'3'}}>
                {this.props.children}
                <div className="bBox">
                    {bottomNavItems}
                </div>
            </div>
        )
    }
}
export default connect((state)=>state)(BottomNav)
