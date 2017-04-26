/**
 * Created by hcy on 2017/4/21.
 */
import React from 'react'

export default class Tribe extends React .Component{
    render(){
        return(
            <div className="tribeWrap">
                <div className="triZuan">
                    <img src="/imgs/buluozuan.jpg"/>
                    <p>部落钻</p>
                    <p>0</p>
                </div>
                <div className="triZuan">
                    <img src="/imgs/buluobi.jpg"/>
                    <p>部落币</p>
                    <p>0</p>
                </div>
                <div className="triZuan">
                    <img src="/imgs/buluofen.jpg"/>
                    <p>部落分</p>
                    <p>0</p>
                </div>
            </div>
        )
    }
}