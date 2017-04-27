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

    }
    componentWillMount(){
        this.props.actions.getBottomNav(this.props.element.src,this.props.index)
    }
    handleTouch(){
        this.props.actions.getBottomNav(this.props.element.hoverSrc,this.props.index)
    }
    handleTouchMove(event){
        this.props.actions.getBottomNav(this.props.element.src,this.props.index)
        console.log(this.props.actions.getBottomNav(this.props.element.src,this.props.index))
        console.log(event.target)
    }

    render() {
        return (
                <img className="bottomItems" index={this.props.index} src={this.props.homeReducer.bottomNavItemUrl[this.props.index]} onTouchStart={this.handleTouch.bind(this)} onTouchMove={this.handleTouchMove.bind(this)} onTouchEnd={this.handleTouchMove.bind(this)} />

        )
    }
}