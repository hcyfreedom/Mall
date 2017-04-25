/**
 * Created by hcy on 2017/4/19.
 */
import React from 'react'
import Nav from './Cart/CartTopNav'
import Address from './Orders/AddressManage/Address'
import AddressEditor from './Orders/AddressEditor/AddressEditor'
export default class AddressMain extends React.Component{
    render(){
        let Node = React.createClass({
            render(){
                return(
                    <div></div>
                )
            }
        })
        console.log(this.props)

        if(this.props.match.params.id == "manage"){

            Node = React.createClass({
                render(){

                    return  <Address/>
                }
            })

        }else {
            let location = this.props.location;
            Node = React.createClass({
                render(){
                    return <AddressEditor location = {location}/>
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