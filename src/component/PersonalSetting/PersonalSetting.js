import {
  Redirect,
} from 'react-router-dom'
import React from 'react';
import {connect} from 'react-redux';
import {get} from '../../http/http'
import Nav from '../Cart/CartTopNav'

class PersonalSetting extends React.Component {
    constructor(props) {
        super(props);
        this.lineStyle = {
            // height: "5vh",
            lineHeight: "5vh",
            fontSize: "3vh",
            color: "rgb(100, 100, 100)",
            padding: "2% 10%",
            borderBottom: "solid 0.5px rgb(200,200,200)"
        }
        this.arrawStyle = {
            float: "right",
            transform: "scaleY(1.5)",
            marginLeft: "10%"
        }

        //console.log(this.props);

        this.state = {
            headIcon: '/imgs/headIcon.png',
            username: '张三',
            modal: false,
            redirect: null,
            media: '',  //object url
            uploadPhoto: null,
            caping: false,
        }
        this.media = null; //user medai stream
    }

    componentDidMount() {
        get('/main/getUserInfo', res => {
            console.log(res.data.msg)
            this.setState({headIcon: res.data.msg.headImg})
            this.setState({username:res.data.msg.userName})
        })
    }

    capture() {
        navigator.getUserMedia({"video": true},
        suc => {
            this.setState({media: URL.createObjectURL(suc)})
            this.media = suc;
        },
        err => {
            alert("无法使用摄像头")
            this.setState({caping: false});
        });
    }

    uploadPic(pic) {
        const fd = new FormData();
        fd.append('file', pic)
        fetch('/account/uploadHeadImg', {
            credentials: 'include',
            method: 'POST',
            body: fd
        })
            .then(res => {
                console.log(`upload photo api response: `, res);
                return res.json();
            })
            .then(res => {
                if(res.code !== 200)
                    alert("上传失败")
                else
                    alert("上传成功")
            })
                .catch( err => alert(`网络错误，上传头像失败`));
    }

    render() {
        return (
            <div style={{margin: "0%", backgroundColor: "white"}}>
                <Nav navTitle="个人设置" />
                <div style={{height: "80px"}}></div>
                {this.state.modal
                ?
                <div onClick={() => this.setState({modal: false})} style={{position: "fixed", height: "100%", width: "100%", backgroundColor: "black", opacity: "0.4", zIndex: 1}}></div>
                :
                null}
                {[
                    {title: '修改头像', ev: () => this.setState({modal: !this.state.modal})},
                    {title: '用户名', ev: () => this.setState({redirect:'person/username'})},
                    // {title: '修改登录密码', ev: () => this.setState({redirect: 'person/logpass'})},
                    // {title: '修改支付密码', ev: () => this.setState({redirect: 'person/paypass'})},
                    // {title: '修改手机验证', ev: () => this.setState({redirect: "person/phone"})}
                ].map( (e, idx) => {
                    let arraw = idx != 1 ? <span style={this.arrawStyle}>></span> : null;
                    let rightAppend = null;
                    if(idx == 0)
                        rightAppend = <img style={{height: "5vh"}} src={this.state.headIcon} />
                    if(idx == 1)
                        rightAppend = <span>{this.state.username}</span>
                    return (
                        <div key={idx} style={this.lineStyle} onClick={e.ev}><span>{e.title}</span>{arraw}<span style={{float: "right", marginRight: "2vw"}}>{rightAppend ? rightAppend : null}</span></div>
                    )
                })}
                {this.state.redirect ? <Redirect push to={this.state.redirect} /> : null}
                <div style={{zIndex: 2, position: "absolute", bottom: "2%", display: this.state.modal ? 'block': 'none', width: "100%", height: "12%", transition: "all 0.5s"}}>
                <div style={{zIndex: 2, width: "90%", marginLeft: "5%", backgroundColor: "white", textAlign: "center", height: "50%", fontSize: "3vh", borderRadius: "5px", lineHeight: "200%"}}>
                    {/*<div style={{borderBottom: "solid 1px rgb(200, 200, 200)", height: "50%"}} onClick={() => {
                        this.setState({caping: true});
                        this.capture();
                        }}>拍照上传</div>*/}
                    <div style={{borderBottom: "solid 1px rgb(200, 200, 200)", height: "100%"}} onClick={() => this.refs.fileInput.click()}>本地上传</div>
                </div>
                <div style={{zIndex: 2, width: "90%", marginLeft: "5%", backgroundColor: "white", marginTop: "1%", height: "50%", textAlign: "center", fontSize: "3vh", borderRadius: "5px", lineHeight: "200%", transition: "all 1s"}}>
                    <div onClick={() => this.setState({modal: false})}>取消</div>
                </div>
                </div>
                <div style={{position: "fixed", width: "100%", height: "100%", left: "0px", top: "0px", display: this.state.caping ? "flex" : "none", alignItems: "center", backgroundColor: "black", zIndex: 500}}>
                    <video autoPlay style={{width: "100%"}} src={this.state.media} ref={"vdo"} onClick={() =>{
                        let cvs = document.createElement('canvas');
                        let ctx = cvs.getContext('2d')
                        ctx.drawImage(this.refs.vdo, 0, 0);
                        cvs.toBlob(res => {
                            this.uploadPhoto = res;
                            this.uploadPic(res);
                            console.log(res);
                        })

                    }} ></video>
                    <div style={{position: "absolute", bottom: "10%", width: "100%", display: "flex", justifyContent: "space-around"}}>
                    {/*<button style={{fontSize: "80px"}} onClick={() => {
                            
                        }}>确认上传</button>*/}
                    <button style={{fontSize: "80px"}} onClick={() => {
                        this.setState({caping: false, modal: false});
                        }}>取消拍照</button>
                    </div>
                </div>
                <div>
                    <input type="file" style={{display: "none"}} ref="fileInput" onChange={(e) => {
                        this.setState({modal: false});
                        this.uploadPic(e.target.files[0]);
                    }} />
                </div>
            </div>
        )
    }
}
export default connect( state => state)(PersonalSetting)