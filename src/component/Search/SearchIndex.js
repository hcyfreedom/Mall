/**
 * Created by hcy on 2017/4/10.
 */
import React from 'react'
import Nav from './Nav'
import History from './History/History'
import SearchOut from './SearchOut/SearchOut'
export default class SearchIndex extends React.Component{
        render(){
            // const path = window.location.pathname;

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
                    <Nav/>
                    <Node/>
                </div>
            )




        }
}