/**
 * Created by hcy on 2017/4/7.
 */
import React from 'react'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
export default class ShowBlock extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            open: false,
        };
    }


    handleOpen(){
        this.setState({open: true});
    };

    handleClose(){
        this.setState({open: false});
    };
    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose.bind(this)}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                disabled={true}
                onTouchTap={this.handleClose.bind(this)}
            />,
        ];
            return (
                <MuiThemeProvider>
                    <div style={{position: "relative"}}>
                        <img className="showBlock" src={this.props.src}/>
                        <RaisedButton label="分享" onTouchTap={this.handleOpen.bind(this)} style={ShareButton}/>
                        <Dialog
                            title="Dialog With Actions"
                            actions={actions}
                            modal={true}
                            open={this.state.open}
                        >
                            Only actions can close this dialog.
                        </Dialog>


                    </div>
                </MuiThemeProvider>
            )
    }
}
const ShareButton = {
    position: 'relative',
    right: '0',
    bottom: '0'
}