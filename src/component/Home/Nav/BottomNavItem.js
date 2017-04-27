import React from 'react';

import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as mallActions from '../../../action/mallActions'
class BottomNavItem extends React.Component {
    //在子类被实例化的时候，父类也相应的被实例化出来，所以子类必须去调用父类的构造方法，如果父类只有带参构造器，那么子类必须显式的调用父类的带参构造方法。
    constructor(props){
        super(props);

    }


    // handleClick(event){
    //     this.props.actions.getBottomNav(this.props.ele.src,this.props.index);
    //     if(event.target.itemID == this.props.index){
    //         console.log("true")
    //     }
    //     console.log(event.target)
    //     console.log(event.target.class)
    //
    //     console.log(this.props.index)
    // }


    render() {
        return (
            <img className="bottomItems" itemID={this.props.index}  src={this.props.ele.src}  />

        )
    }
}
export default connect((state)=>state)(BottomNavItem)