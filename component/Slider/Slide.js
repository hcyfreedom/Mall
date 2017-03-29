/**
 * Created by hcy on 2017/3/29.
 */
import React from 'react'
export default class Slide extends React.Component{
    constructor(){
        super()
        this.state = {
            startX : '',
            startY:'',
            endX:'',
            endY:''
        }
    }

    touchStart(ev){
        this.setState({
            startX:ev.touches[0].pageX,
            startY:ev.touches[0].pageY
        })
    }
    touchEnd(ev){
        this.setState({
            endX:ev.changedTouches[0].pageX,
            endY:ev.changedTouches[0].pageY
        })

        let that = this;
        let direction = this.GetSlideDirection(this.state.startX,this.state.startY,this.state.endX,this.state.endY);
        switch (direction){
            case 0:
                console.log("没滑动");
                break;
            case 1:
                console.log("向上");
                break;
            case 2:
                console.log("向下");
                break;
            case 3:
                console.log("向左");
                that.props.change("向左")
                break;
            case 4:
                console.log("向右");
                that.props.change("向右")
                break;
            default:
        }

    }

    GetSlideAngle(dx,dy){
        return Math.atan2(dy,dx) * 180 / Math.PI;//atan2() 方法可返回从 x 轴到点 (x,y) 之间的角度
    }
    GetSlideDirection(startX,startY,endX,endY){
        let dy = startY - endY;
        let dx = startX - endX;
        let result = 0;

        //如果滑动距离太短
        if(Math.abs(dx) < 2 && Math.abs(dy) < 2){
            return result;
        }

        let angle = this.GetSlideAngle(dx,dy);
        if (angle >= -45 && angle <45){
            result = 4;
        }else if (angle >= 45 && angle < 135) {
            result = 1;
        }else if (angle >= -135 && angle < -45) {
            result = 2;
        }else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
            result = 3;
        }
        return result;
    }


    render(){
        let background = this.props.background;
        let link = this.props.link;
        let active = this.props.active;
        let slideStyle = {
            backgroundImage : "url(" + background + ")"
        };

        return(
            <a href={link}>
                <div className="slider_slide" data-active={active} style={slideStyle} onTouchStart={ev =>{this.touchStart(ev)}} onTouchEnd={ev =>{this.touchEnd(ev)}}>

                </div>
            </a>
        )
    }
}