import React from 'react';

export default class PersonalSetting extends React.Component {
    constructor(props) {
        super(props);
        this.lineStyle = {
            height: "5vh",
            lineHeight: "5vh",
            fontSize: "3vh",
            color: "rgb(100, 100, 100)",
            padding: "2% 10%",
            borderBottom: "solid 0.5px rgb(200,200,200)"
        }
        this.arrawStyle = {
            float: "right",
            transform: "scaleY(1.5)"
        }

        this.state = {
            headIcon: '/imgs/headIcon.png',
            username: '张三',
            modal: false,
        }
    }

    render() {
        return (
            <div style={{margin: "0%", backgroundColor: "white"}}>
                {this.state.modal
                ?
                <div onClick={() => this.setState({modal: false})} style={{position: "fixed", height: "100%", width: "100%", backgroundColor: "black", opacity: "0.4", zIndex: 1}}></div>
                :
                null}
                {[
                    {title: '修改头像', ev: () => this.setState({modal: !this.state.modal})},
                    {title: '用户名', ev: () => ''},
                    {title: '修改登录密码', ev: () => ''},
                    {title: '修改支付密码', ev: () => ''},
                    {title: '修改手机验证', ev: () => console.log()}
                ].map( (e, idx) => {
                    let arraw = idx != 1 ? <span style={this.arrawStyle}>></span> : null;
                    let rightAppend = null;
                    if(idx == 0)
                        rightAppend = <img style={{height: "5vh"}} src={this.state.headIcon} />
                    if(idx == 1)
                        rightAppend = <span>{this.state.username}</span>
                    return (
                        <div key={idx} style={this.lineStyle} onClick={e.ev}><span>{e.title}</span>{arraw}<span style={{float: "right", marginRight: "2vw", width:"15%"}}>{rightAppend ? rightAppend : null}</span></div>
                    )
                })}
                <div style={{zIndex: 2, position: "absolute", bottom: "0px", display: this.state.modal ? 'block': 'none', width: "100%", height: "25%", transition: "all 0.5s"}}>
                <div style={{zIndex: 2, width: "90%", marginLeft: "5%", backgroundColor: "white", height: "60%", textAlign: "center", fontSize: "3vh", borderRadius: "5px", lineHeight: "250%"}}>
                    <div style={{borderBottom: "solid 1px rgb(200, 200, 200)", height: "50%"}}>拍照上传</div>
                    <div style={{borderBottom: "solid 1px rgb(200, 200, 200)", height: "50%"}}>本地上传</div>
                </div>
                <div style={{zIndex: 2, width: "90%", marginLeft: "5%", backgroundColor: "white", marginTop: "1%", height: "30%", textAlign: "center", fontSize: "3vh", borderRadius: "5px", lineHeight: "250%"}}>
                    <div onClick={() => this.setState({modal: false})}>取消</div>
                </div>
                </div>
            </div>
        )
    }
}