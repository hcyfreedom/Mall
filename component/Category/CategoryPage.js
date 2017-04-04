/**
 * Created by hcy on 2017/3/30.
 */
import React from 'react'
import Nav from '../Home/Nav/Nav'
import Slider from '../Home/Slider/Slider'
import Selector from './SlideSelector/Selector'
import GoodBrand from './CatePart/GoodBrand'
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';
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

export default class CategoryPage extends React.Component{
    render(){
        return(
            <Router>
            <div>
                <Nav/>
                <Slider slides = {slides} time="2000" />
                <Selector/>
                <Route exact path="/" component={GoodBrand}/>
                <Route path="/CatePart/GoodBrand" component={GoodBrand}/>
            </div>
            </Router>
        )
    }
}

(<Router>
        <div>
            <Route exact path="/" component={HomePage}/>
            <Route path="/CategoryPage" component={CategoryPage}/>
        </div>
    </Router>

)