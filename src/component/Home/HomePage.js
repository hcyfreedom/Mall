/**
 * Created by hcy on 2017/3/29.
 */
import React from 'react';
import Brand from './Brand/Brand'
import ClassifyBar from './ClassifyBar/ClassifyBar'
import Advertising from './Advertising/Advertising'
import Suspension from './Nav/Suspension'
import ShowYOU from './ShowHome/ShowYOU'
import ShowBAO from './ShowHome/ShowBAO'
export default class  HomePage extends React.Component{
    render(){
        return(
            <div>
                <Brand/>
                <ClassifyBar/>
                <Advertising/>
                <Suspension/>
                <ShowYOU/>
                <ShowBAO/>
            </div>
        )
    }
}