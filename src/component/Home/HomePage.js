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

        let {classifyItem} = this.props.homeReducer;
        let Node = React.createClass({
            render(){
                return(
                    <div></div>
                )
            }
        })
        for(let i of classifyItem){
console.log(i)
            Node = React.createClass({
                    render(){
                        return   <ShowClassify classifyId={i.id}/>
                    }
                })


        }

        return(
            <div>
                <Brand/>
                <ClassifyBar/>
                <Advertising/>
                <ShowYOU/>
                <Node/>
                <Suspension/>
                <ShowYOU/>
                <ShowBAO/>

            </div>
        )
    }
}
export default  connect((state)=> state)(HomePage)