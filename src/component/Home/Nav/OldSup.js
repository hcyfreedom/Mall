/**
 * Created by hcy on 2017/4/28.
 */
import React from 'react'

export default class OldSup extends React.Component{
    render(){
        return(
            <div className="SusWrap">
                <img src="/imgs/headBe.png"/>
                <div className="SusCircle" style={{backgroundColor:'grey'}}> </div>部落币
                <div className="SusCoin">
                    <div className="SusCoinChild" style={{width:'10px',backgroundColor:'grey'}}>
                        0
                    </div>
                </div>
                <div className="SusGradeCircle" style={{backgroundColor:'grey'}}> </div>部落分
                <div className="SusGrade">
                    <div className="SusGradeChild"  style={{width:'10px',backgroundColor:'grey'}}>
                        0
                    </div>
                </div>
                <p className="SusDetail" style={{color:'white',webkitTextStroke:'black'}}>可当0元使用</p>
            </div>
        )
    }
}