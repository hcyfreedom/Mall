/**
 * Created by hcy on 2017/4/4.
 */
import React from 'react';  //导入react相关模块
import ReactDOM from 'react-dom';
import BottomNav from './Home/Nav/BottomNav'
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';
import Nav from './Home/Nav/Nav'
import Slider from './Home/Slider/Slider'
import HomePage from './Home/HomePage'
import Selector from './Category/SlideSelector/Selector'
import injectTapEventPlugin from 'react-tap-event-plugin';
import ShopPage from "./ShopPage";
import GoodBrand from "./Category/CatePart/GoodBrand";
import ShopNav from "./Shop/ShopHome/ShopNav";
import HealthCare from "./Category/CatePart/HealthCare";
injectTapEventPlugin();
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

        }else if (this.props.match.params.id == "cate"){
            Node = React.createClass({
                render(){
                    return  <div><Selector/><GoodBrand/></div>
                }
            })

        }else if(this.props.match.params.id == "healthycare"){
            Node = React.createClass({
                render(){
                    return  <div><Selector/><HealthCare/></div>
                }
            })
        }


        return(
            <div>
                <Nav/>
                <Slider slides = {slides} time="2000" />
                <Node/>
                <BottomNav/>
            </div>
        )


    }
}

