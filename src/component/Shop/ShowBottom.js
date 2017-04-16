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
        // this.state = {
        //     open: false,
        // };
    }
    componentDidMount() {
        let actions = bindActionCreators(mallActions, this.props.dispatch);
        let {allShopItems} = this.props.homeReducer;
        const shopId = allShopItems['shopId'];
        get('/shop/getTelephone/'+shopId, (res) => {
            actions.getTelephone(res.data)
        })

    }
    handleTouchTap(){
        let actions = bindActionCreators(mallActions, this.props.dispatch);
        actions.changeOpenTrue()
    };

    handleRequestClose(){
        let actions = bindActionCreators(mallActions, this.props.dispatch);
        actions.changeOpenFalse();
    };

    render() {
        let {shopTel,open} = this.props.homeReducer;
        let actions = bindActionCreators(mallActions,this.props.dispatch)

            return (
                <MuiThemeProvider>
                    <div>

                        <div className="showBottom" onTouchTap={this.handleTouchTap.bind(this)}>
                            <img src="/imgs/a1.png"/><span>联系客服</span>
                        </div>
                        <Snackbar
                            open={open}
                            message={shopTel}
                            autoHideDuration={4000}
                            onRequestClose={this.handleRequestClose.bind(this)}
                            style={{textAlign:'center'}}
                        />
                    </div>
                </MuiThemeProvider>
            );



    }
}
export default connect((state)=>state)(ShowBottom)