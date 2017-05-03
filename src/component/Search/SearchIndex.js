/**
 * Created by hcy on 2017/4/10.
 */
import React from 'react'
import Nav from './Nav'
import History from './History/History'
import SearchOut from './SearchOut/SearchOut'
// pc
import PcSearchOut from '../../pcComponent/Search/SearchOut'

import {BrowserRouter as Router, Route, Switch,Redirect, Link} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'

const history = createHistory()
export default class SearchIndex extends React.Component{
    render() {
        const result = matchMedia('(orientation: landscape)').matches;
        if(result)
            return this.pcRender()
        return this.mobRender();
    }
    pcRender(){
        return(
            <PcSearchOut/>

        )
    }


        mobRender(){

            let Node = React.createClass({
                render(){
                    return(
                        <div></div>
                    )
                }
            })
            if(this.props.match.params.id == "index"){

                Node = React.createClass({
                    render(){

                        return  <History/>
                    }
                })

            }else if (this.props.match.params.id == "out"){
                Node = React.createClass({
                    render(){
                        return <SearchOut/>
                    }
                })

            }
            return(
                <div>
                    <Nav location={this.props.location}/>
                    <Node/>
                </div>
            )




        }
}