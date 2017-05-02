/**
 * Created by hcy on 2017/5/1.
 */
import React from 'react'
import NavDetail from '../NavBar/NavDetail'
import {Carousel} from 'react-bootstrap'
import Suspension from '../../component/Home/Nav/Suspension'
import IndexPart from './IndexPart'
import Brand from '../../component/Home/Brand/Brand'


export default class PcHomePage extends React.Component{
    render(){
        return(
            <div>
                <NavDetail/>
                <Carousel style={{marginTop:'150px'}}>
                    <Carousel.Item>
                        <img style={{width:'100%',height:'500px'}} alt="900x500" src="/imgs/1.jpg"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{width:'100%',height:'500px'}} alt="900x500" src="/imgs/1.jpg"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{width:'100%',height:'500px'}} alt="900x500" src="/imgs/1.jpg"/>
                    </Carousel.Item>
                </Carousel>
                <Suspension/>
                <IndexPart/>
                <Brand/>

            </div>
        )
    }
}