/**
 * Created by hcy on 2017/3/29.
 */
import React from 'react';
import Nav from './Nav/Nav'
import Slider from '../Home/Slider/Slider'
import Brand from '../Home/Brand/Brand'
import Classify from '../Home/Classify/Classify'
import Block from '../Home/Block/Block'
import Production from './Production/Production'
import BottomNav from "./Nav/BottomNav";
import Suspension from './Nav/Suspension'
import ShowYOU from './ShowHome/ShowYOU'
import ShowBAO from './ShowHome/ShowBAO'
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
export default class  HomePage extends React.Component{
    render(){
        return(
            <div>
                <Nav/>
                <Slider slides = {slides} time="2000" />
                <Brand/>
                <Classify/>
                <Block src="../imgs/a2.png"/>
                <Production/>
                <BottomNav/>
                <Suspension/>
                <ShowYOU/>
                <ShowBAO/>
            </div>
        )
    }
}