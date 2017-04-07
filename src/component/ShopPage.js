/**
 * Created by hcy on 2017/4/6.
 */
import React from 'react'
import ShopHome from './Shop/ShopHome/ShopHome'
import ShopNav from './Shop/ShopHome/ShopNav'
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';
export default class ShopPage extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        let ShopChild = React.createClass({
            render(){
                return <div></div>
            }
        });

        if(this.props.match.params.id == "index"){
            ShopChild = React.createClass({
                render(){
                    return <ShopNav/>
                }
            })
        }

        return(
            <ShopChild/>
        )
    }
}