/**
 * Created by hcy on 2017/3/29.
 */
import React from 'react';
import Brand from './Brand/Brand'
import ClassifyBar from './ClassifyBar/ClassifyBar'
import Advertising from './Advertising/Advertising'
import Suspension from './Nav/Suspension'
import ShowYOU from './ShowHome/ShowYOU'
import ShowClassify from './ShowHome/ShowClassify'
import {connect} from 'react-redux';
import ShowBAO from './ShowHome/ShowBAO'
import {bindActionCreators} from 'redux';
import {get} from "../../http/http"
import * as mallActions from '../../action/mallActions'
class  HomePage extends React.Component{
    constructor(props){
        super(props)
    }

    render(){


        return(
            <div>
                <Brand/>
                <ClassifyBar/>
                <Advertising/>
                <ShowYOU/>
                <ShowBAO/>
                <Suspension/>

            </div>
        )

    }
}
export default  connect((state)=> state)(HomePage)