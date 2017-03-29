/**
 * Created by hcy on 2017/3/29.
 */
import React from 'react';
import Nav from '../Nav/Nav'
import Slider from '../Slider/Slider'
import Brand from '../Brand/Brand'
import Classify from '../Classify/Classify'
import Block from '../Block/Block'

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
export default class  TouristPage extends React.Component{
    render(){
        return(
            <div>
                <Nav/>
                <Slider slides = {slides} time="4000" />
                <Brand/>
                <Classify/>
                <Block src="../imgs/a2.png"/>
            </div>
        )
    }
}