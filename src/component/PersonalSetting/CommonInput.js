import React from 'react';
import TextField from 'material-ui/TextField';

export default class CommonInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{paddingLeft: "5%", width: "95%", margin: "10px 0px",  height: "96px", fontSize: "42px", border: "solid 0.5px rgb(200, 200, 200)", backgroundColor: "white"}}>
                <span style={{height: "48px"}}>{this.props.label}</span>
                <input type={this.props.type} onChange={(e) => this.props.onChange(e, e.target.value)} value={this.props.value} style={{marginLeft: "5%", fontSize: "100%", height: "96px", backgroundColor: "rgba(0,0,0,0)", border: "0px", color: "gray"}} type={this.props.type} />
            </div>
        )
    }
}