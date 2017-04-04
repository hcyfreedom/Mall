/**
 * Created by hcy on 2017/3/29.
 */
import React from 'react'
import ClassifyItem from "./ClassifyItem";
export default class Classify extends React.Component{
    constructor(){
        super()
        let classifyItem = [
            {
                src:'../imgs/c1.png',
                detail:"优品牌"
            },{
                src:'../imgs/c2.png',
                detail:'保健坊'
            },{
                src:'../imgs/c3.png',
                detail:'美容产品'
            },{
                src:'../imgs/c4.png',
                detail:'百货'
            },{
                src:'../imgs/c5.png',
                detail:'全部'
            }

        ]
        this.state = {
            classify : classifyItem
        }
    }

    render(){
        const classifyItems = this.state.classify.map((ele,idx) =>{
            return <ClassifyItem key={idx} src={ele} />
        })

        return(
            <div className="classifyBox">
                {classifyItems}
            </div>
        )
    }
}