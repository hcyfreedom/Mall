import React from 'react';

export default class CommonButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div onClick={this.props.onClick}>
                <button style={{width: "90%", height: "80px", margin: "20px 5%", backgroundColor: "#38f", borderRadius: "10px", fontSize: "40px", color: "white", letterSpacing: "5px"}}>{this.props.label}</button>
            </div>
        )
    }
}