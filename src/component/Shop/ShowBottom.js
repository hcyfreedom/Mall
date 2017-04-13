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
        get('/MallMore/getTelephone', (res) => {
            actions.getTelephone(res.data)
        })


    }
    handleTouchTap(){
        this.props.homeReducer.open = true;
        console.log(this.props.homeReducer.open)
    };

    handleRequestClose(){
        this.props.homeReducer.open = true;
        console.log(this.props.homeReducer.open)
    };

    render() {
        let {shopTel,open} = this.props.homeReducer;
        let actions = bindActionCreators(mallActions,this.props.dispatch)

            return (
                <MuiThemeProvider>
                    <div>
                        {/*<RaisedButton*/}
                        {/*onTouchTap={this.handleTouchTap.bind(this)}*/}
                        {/*label="Add to my calendar"*/}
                        {/*/>*/}
                        <div className="showBottom" onTouchTap={this.handleTouchTap.bind(this)}>
                            <img src="/imgs/a1.png"/><span>联系客服</span>
                        </div>
                        <Snackbar
                            open={this.props.homeReducer.open}
                            message={shopTel}
                            autoHideDuration={4000}
                            onRequestClose={this.handleRequestClose.bind(this)}
                        />
                    </div>
                </MuiThemeProvider>
            );



    }
}
export default connect((state)=>state)(ShowBottom)