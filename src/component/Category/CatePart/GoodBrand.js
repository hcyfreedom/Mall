/**
 * Created by hcy on 2017/4/4.
 */
import React from 'react'
import GoodBrandItem from "./GoodBrandItem";
export default class GoodBrand extends React.Component{
    constructor(){
        super()
        let GoodBrandItem = [
            {
                src:'/imgs/g1.png',
                detail:"养生酒"
            },{
                src:'/imgs/g1.png',
                detail:'学源康'
            },{
                src:'/imgs/g1.png',
                detail:'美容产品'
            },{
                src:'/imgs/g1.png',
                detail:'百货'
            },{
                src:'/imgs/g1.png',
                detail:'全部'
            },{
                src:'/imgs/g1.png',
                detail:'全部'
            },{
                src:'/imgs/g1.png',
                detail:'全部'
            },{
                src:'/imgs/g1.png',
                detail:'全部'
            },{
                src:'/imgs/g1.png',
                detail:'全部'
            },{
                src:'/imgs/g1.png',
                detail:'全部'
            }

        ]
        this.state = {
            GoodBrand : GoodBrandItem
        }
    }

    render(){
        const GoodBrandItems = this.state.GoodBrand.map((ele,idx) =>{
            return <GoodBrandItem key={idx} src={ele} />
        });

        const items = [];

        for(let i = 0;i < GoodBrandItems.length; i= i +3){

            (items.length % 3 == 0 )? items.push(<div key={i} className="gRow">{GoodBrandItems.slice(i,i+3)}</div>) : items.push(<div key={i} className="gRow">{GoodBrandItems.slice(i,i+3)}</div>)
        }


        return(
               <div className="goodBrandBox">
                   {items}
               </div>
        )
    }
}