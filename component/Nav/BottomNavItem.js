/**
 * Created by hcy on 2017/3/30.
 */
/**
 * Created by Acer on 2017/2/22.
 */
import React from 'react';
export default class BottomNavItem extends React.Component {
    //在子类被实例化的时候，父类也相应的被实例化出来，所以子类必须去调用父类的构造方法，如果父类只有带参构造器，那么子类必须显式的调用父类的带参构造方法。
    constructor(props){
        super(props);
        this.state = {
            src:this.props.src.src,
        }
    }
    handleTouch(){
        this.setState({src:this.props.src.hoverSrc})
    }
    handleTouched(){
        this.setState({src:this.props.src.src})
    }

    render() {
        return (
                <img className="bottomItems" src={this.state.src} onTouchStart={this.handleTouch.bind(this)} onTouchMove={this.handleTouched.bind(this)} />

        )
    }
}