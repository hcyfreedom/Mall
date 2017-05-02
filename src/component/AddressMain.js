/**
 * Created by hcy on 2017/4/19.
 */
import React from 'react'
import Nav from './Cart/CartTopNav'
import Address from './Orders/AddressManage/Address'
import AddressEditor from './Orders/AddressEditor/AddressEditor'
export default class AddressMain extends React.Component{
    render(){
        console.log("props")
        console.log(this.props)
        let history = this.props.history;
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

                    return  <Address history={history} />
                }
            })

        }else {
            let location = this.props.location;
            Node = React.createClass({
                render(){
                    return <AddressEditor history={history} location = {location}/>
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