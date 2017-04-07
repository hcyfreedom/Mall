/**
 * Created by hcy on 2017/3/29.
 */
import React from 'react';
import Brand from './Brand/Brand'
import Classify from './Classify/Classify'
import Block from './Block/Block'
import Production from './Production/Production'
import Suspension from './Nav/Suspension'
import ShowYOU from './ShowHome/ShowYOU'
import ShowBAO from './ShowHome/ShowBAO'

export default class  HomePage extends React.Component{
    render(){
        return(
            <div>
                <Brand/>
                <Classify/>
                <Block src="../imgs/a2.png"/>
                <Production/>
                <Suspension/>
                <ShowYOU/>
                <ShowBAO/>
            </div>
        )
    }
}