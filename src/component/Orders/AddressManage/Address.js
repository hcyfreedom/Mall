/**
 * Created by hcy on 2017/4/19.
 */
import React from 'react'
import AddressItem from './AddressItem'
import AddressBottom from '../AddressEditor/AddressBottom'

import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {post} from '../../../http/http'
import {get} from "../../../http/http"
import * as mallActions from '../../../action/mallActions'
class Address extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        let actions = bindActionCreators(mallActions, this.props.dispatch);
        get('/account/getAddress', (res) => {
            actions.getAddress(res.data)
        })
    }

    _handleClick() {
         post('account/addAddress',{
             reciever:"于景洋",
             address:"山东省济南市历下区舜华路1500号",
             recieverTelephone:"17621181235",
             mailNumber:"lovesyxfuffy@gmail.com",
             status:"0"
         },(res)=>{
             get('/account/getAddress', (res) => {
                 actions.getAddress(res.data)
             })
         },(res)=>{
             alert(res.msg)
         })
    }

    render() {
        let {allAddress} = this.props.afterReducer;

        let items = allAddress.map((ele, id) => {
            return <Link to={"/address/editor/"+ele.id}><AddressItem ele={ele} key={id} index = {ele.id}/></Link>
        })

        return (
            <div style={{position:'relative',top:'100px'}}>
                <div className="addTitle"><img src="/imgs/add1.jpg"/>管理收货地址</div>
                {items}
                <div className="addNew"><img src="/imgs/add2.jpg"/>新增收货地址</div>
                <AddressBottom detail="确认并返回"/>
            </div>

        )
    }
}

export default connect((state) => state)(Address)