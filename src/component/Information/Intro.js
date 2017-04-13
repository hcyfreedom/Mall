/**
 * Created by hcy on 2017/4/8.
 */
/**
 * Created by hcy on 2017/4/7.
 */
import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SwipeableViews from 'react-swipeable-views';
import Slider from '../Home/Slider/Slider'
import IntroDetail from './IntroDetail'
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
export default class Intro extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            slideIndex : 0,
        };
    }

    handleChange(value){
        this.setState({
            slideIndex:value,
        });
    };
    handleClick(){
        window.history.go(-1)
    }
    render(){
        return(
            <MuiThemeProvider>
                <div style={{width:'100%',backgroundColor:'#00BCD4',height:'80px'}}>
                    <span className="goBack"  onClick={this.handleClick.bind(this)}>&lt;</span>
                    <div style={{width:'50%',margin:'0 auto',position:'absolute',left:'25%',top:'0'}}>
                        <Tabs onChange={this.handleChange.bind(this)} value={this.state.slideIndex} style={{height:'80px'}} >
                            <Tab label="介绍" value={0} style={{height:'80px'}}/>
                            <Tab label="详情" value={1} style={{height:'80px'}}/>
                        </Tabs>
                    </div>
                    <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange.bind(this)} style={{position:"relative"}}>
                        <div>
                            <Slider slides = {slides} time="2000" />
                            <IntroDetail/>
                        </div>
                        <div>
                            <div className="introTitle">
                                weudheuiheuihf
                            </div>
                            <div className="introWord">
                                借我车奴会儿
                            </div>
                        </div>
                    </SwipeableViews>
                </div>


             </MuiThemeProvider>

        )
    }

}