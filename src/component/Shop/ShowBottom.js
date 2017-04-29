/**
 * Created by hcy on 2017/4/8.
 */
import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {get} from "../../http/http"
import * as mallActions from '../../action/mallActions'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class ShowBottom extends React.Component {

    constructor(props) {
        super(props);

    }
    componentDidMount() {
        let actions = bindActionCreators(mallActions, this.props.dispatch);

        let id= this.props.pathParams.id;
        get('/shop/getTelephone/'+id, (res) => {
            actions.getTelephone(res.data)
        })

    }
    handleOnClick(){

        let {shopTel} = this.props.homeReducer;
        let actions = bindActionCreators(mallActions,this.props.dispatch)
        window.location.href="tel:"+shopTel;
        // alert(shopTel)
    }

    render() {

            return (
                    <div>

                        <div className="showBottom" onTouchStart={this.handleOnClick.bind(this)}>
                            <img src="/imgs/tel.png"/><span>联系客服</span>
                        </div>
                    </div>
            );

    }
}
export default connect((state)=>state)(ShowBottom)