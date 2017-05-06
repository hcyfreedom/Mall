/**
 * Created by hcy on 2017/4/26.
 */
/**
 * Created by hcy on 2017/3/30.
 */
import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {post,get} from "../../../http/http"
import * as afterActions from '../../../action/afterActions'
class NewSup extends React.Component{
    constructor(){
        super()

    }
    componentDidMount(){
        let actions = bindActionCreators(afterActions,this.props.dispatch);
        get('/main/getUserInfo',(res) => {
            actions.getUserInfo(res.data)
        });
        get("/account/getInvitataionCode",(res) => {
            actions.getInviteCode(res.data);
        });

    }
    render(){
        let {userInfo} = this.props.afterReducer;
        if(userInfo == null || userInfo == undefined){
            userInfo = {
                headImg:"",
                coin:0,
                point:0
            }
        }
        return(
            <div className="SusWrap">
                <img src={userInfo.headImg}/>
                <div className="SusCircle"> </div>部落币
                <div className="SusCoin">
                    <div className="SusCoinChild">
                        {userInfo.coin}
                    </div>
                </div>
                <div className="SusGradeCircle"> </div>部落分
                <div className="SusGrade">
                    <div className="SusGradeChild">
                        {userInfo.point}
                    </div>
                </div>
                <p className="SusDetail">可当{userInfo.price}元使用</p>
            </div>
        )
    }
}
export  default connect((state) => state)(NewSup)