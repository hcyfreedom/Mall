/**
 * Created by hcy on 2017/3/28.
 */
import React from 'react'
import Slide from './Slide'

export default class Slider extends React.Component{
    constructor(){
        super()
        this.state = {
            activeSlider:0,
            this:this
        }
    }
    nextSlide(){
        let slide = this.state.activeSlider + 1 < this.props.slides.length ? this.state.activeSlider + 1 : 0;
        this.setState({
            activeSlider:slide
        });

    }

    previousSlide(){
        let slide = this.state.activeSlider - 1 < 0 ? this.props.slides.length - 1 : this.state.activeSlider -1;
        this.setState({
            activeSlider : slide
        })
    }

    componentDidMount(){
       this.setInterval =  setInterval(() =>this.nextSlide(),this.props.time)
    }
    componentWillUnmount(){
        clearInterval(this.setInterval)
    }

    onChildChange(newVal){
        let that = this.this;
        if(newVal == "向左"){
            that.previousSlide()
        }else if(newVal == "向右"){
            that.nextSlide()
        }
    }


    render(){
        let _this = this;
        let slides = this.props.slides;
        let slide = slides.map(function (slide,index,array) {
            return(
                <Slide background={slide.background} active={index === _this.state.activeSlider} link={slide.link} key={index} change={_this.onChildChange} this={_this} />
            )
        })

        const path = window.location.pathname;
        // if(path == "/home/index" ||path == "/home/:id"){
            return(
                <div className="slider">
                    {slide}
                    <div className="slider_next" onClick={ev =>{this.nextSlide()}}>
                        <a href="javascript:;" className="arrow">&gt;</a>
                    </div>
                    <div className="slider_previous">
                        <a href="javascript:;" id="prev" className="arrow" onClick={ev => this.previousSlide()}>&lt;</a>
                    </div>

                </div>
            )
        // }
        // else {
        //     return(
        //         <div className="sliderMore">
        //             {slide}
        //             <div className="slider_next" onClick={ev =>{this.nextSlide()}}>
        //                 <a href="javascript:;" className="arrow">&gt;</a>
        //             </div>
        //             <div className="slider_previous">
        //                 <a href="javascript:;" id="prev" className="arrow" onClick={ev => this.previousSlide()}>&lt;</a>
        //             </div>
        //
        //         </div>
        //     )
        // }
    }
}