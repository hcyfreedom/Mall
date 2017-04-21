/**
 * Created by hcy on 2017/4/19.
 */
import React from 'react'
import Nav from './Cart/CartTopNav'
import Address from './Address/AddressManage/Address'
import AddressEditor from './Address/AddressEditor/AddressEditor'
export default class AddressMain extends React.Component{
    render(){
        let Node = React.createClass({
            render(){
                return(
                    <div></div>
                )
            }
        })
        if(this.props.match.params.id == "manage"){

            Node = React.createClass({
                render(){

                    return  <Address/>
                }
            })

        }else {
            Node = React.createClass({
                render(){
                    return <AddressEditor/>
                }
            })
        }

        return(
            <div>
                <Nav navTitle="地址管理"/>
                <Node/>
            </div>
        )
    }
}