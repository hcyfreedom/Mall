/**
 * Created by hcy on 2017/4/29.
 */
import React from 'react'
import {Carousel} from 'react-bootstrap'

export default class CarouselItem extends React.Component{
    render(){
        return(
            <Carousel >
                <Carousel.Item style={{fontSize:'60px'}}>
                    <img width={"100%"} height={'440px'}  src="/imgs/1.jpg"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={'100%'} height={'440px'}  src="/imgs/1.jpg"/>

                </Carousel.Item>
                <Carousel.Item>
                    <img width={'100%'} height={'440px'} src="/imgs/1.jpg"/>
                </Carousel.Item>
            </Carousel>
        )
    }
}