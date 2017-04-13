/**
 * Created by hcy on 2017/4/4.
 */
import React from 'react';  //导入react相关模块
import BottomNav from './Home/Nav/BottomNav'
import Nav from './Search/Nav'
import Slider from './Home/Slider/Slider'
import HomePage from './Home/HomePage'
import Selector from './Category/SlideSelector/Selector'
import CateMain from './Category/CatePart/CateMain'

let  slides = [{
    background: "../imgs/1.jpg",
    link:"www.baidu.com"
}, {
    background: "../imgs/a2.png",
    link:"www.baidu.com"
}, {
    background: "../imgs/3.jpg",
    link:"www.baidu.com"
},{
    background: "../imgs/4.jpg",
    link:"www.baidu.com"
},{
    background:'../imgs/a1.png',
    link:"www.baidu.com"
}];

export default class BaseOptions extends React.Component{
    constructor(props){
        super(props);
    }
    render(){

        let Node = React.createClass({
            render(){
                return(
                    <div></div>
                )
            }
        })
        if(this.props.match.params.id == "index"){

          Node = React.createClass({
                render(){

                    return  <HomePage/>
                }
            })

        }else {
            Node = React.createClass({
                render(){
                    return  <div><Selector/><CateMain/></div>
                }
            })

        }


        return(
            <div>
                <Nav/>
                <Slider slides = {slides} time="2000"/>
                <Node/>
                <BottomNav/>
            </div>
        )


    }
}

