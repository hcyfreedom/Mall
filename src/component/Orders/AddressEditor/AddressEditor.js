/**
 * Created by hcy on 2017/4/19.
 */
import React from 'react'
import Toggle from 'material-ui/Toggle';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as mallActions from '../../../action/mallActions';
import {get, post} from '../../../http/http';
import AddressBottom from './AddressBottom'
class AddressEditor extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let actions = bindActionCreators(mallActions, this.props.dispatch);
        let pathname = this.props.location.pathname.split("/");
        let params = pathname[pathname.length - 1];
        if (params % 1 == 0) {
            get('/account/getOneAddress/' + params, (res)=> {
                console.log(res)
                actions.getAddressToEdit(res.data.msg)
            })
        }

    }

    handleClick() {
        let addressToEdit = this.props.homeReducer.addressToEdit;
        post('/account/addAddress', addressToEdit, (res)=> {
            
        })
        window.history.go(-1);
    }

    handleChange(event) {
        console.log(event.target.name);
        let addressToEdit = this.props.homeReducer.addressToEdit;
        let actions = bindActionCreators(mallActions, this.props.dispatch);
        if (event.target.name == "isDefault") {
            actions.changeAddressToEdit({
                index: event.target.name,
                value: addressToEdit.status ^ 1
            })
        } else {
            actions.changeAddressToEdit({
                index: event.target.name,
                value: event.target.value
            })
        }


    }

    render() {
        let addressToEdit = this.props.homeReducer.addressToEdit;


        return (
            <MuiThemeProvider>
                <div style={{position:'relative',top:'100px'}}>
                    <div className="addTitle" style={{textAlign:'center'}}>编辑收货地址</div>
                    <ul>
                        <li>收件人：<input onChange={this.handleChange.bind(this)} className="reciever" name="reciever"
                                       style={styles.one} value={addressToEdit.reciever}/></li>
                        <li>收货地址：<input onChange={this.handleChange.bind(this)} className="address" name="address"
                                        style={styles.two}
                                        value={addressToEdit.address}/></li>
                        <li>联系电话：<input onChange={this.handleChange.bind(this)} className="recieverTelephone"
                                        name="recieverTelephone" style={styles.three}
                                        value={addressToEdit.recieverTelephone}/></li>
                        <li>邮编：<input onChange={this.handleChange.bind(this)} className="mailNumber" name="mailNumber"
                                      style={styles.four} value={addressToEdit.mailNumber}/>
                        </li>
                        <li style={{position:'relative'}}>设为默认收货地址：
                                <span>
                                    <Toggle
                                        name="isDefault"
                                        onToggle={this.handleChange.bind(this)}
                                        defaultToggled={addressToEdit.status == 0}
                                        style={styles.toggle}
                                    />
                                </span>
                        </li>
                    </ul>
                    <AddressBottom detail="保存并返回" handleClick={this.handleClick.bind(this)}/>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default connect((state)=>state)(AddressEditor)

const styles = {
    toggle: {
        width: '20%',
        left: '700px',
        top: '-60px'
    },
    one: {
        paddingLeft: '60px'
    },
    two: {
        paddingLeft: '30px'
    },
    three: {
        paddingLeft: '30px'
    },
    four: {
        paddingLeft: '90px'
    }
};