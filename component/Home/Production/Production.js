/**
 * Created by hcy on 2017/3/29.
 */
/**
 * Created by hcy on 2017/3/29.
 */
import React from 'react'
import ProductionItem from "./ProductionItem";
export default class Production extends React.Component{
    constructor(){
        super()
        let productionItem = [
            {
                src:'../imgs/p1.png',
                detail:"华信雪原康",
                fakePrice :"888",
                price:"111",
                minPrice:"666"
            },{
                src:'../imgs/p1.png',
                detail:"华信雪原康",
                fakePrice :"888",
                price:"111",
                minPrice:"666"
            },{
                src:'../imgs/p1.png',
                detail:"华信雪原康",
                fakePrice :"888",
                price:"111",
                minPrice:"666"
            }

        ]
        this.state = {
            production : productionItem
        }
    }

    render(){
        const productionItems = this.state.production.map((ele,idx) =>{
            return <ProductionItem key={idx} src={ele} />
        });

        const items = [];

        for(let i = 0;i < productionItems.length; i= i +3){

            (items.length % 3 == 0 )? items.push(<div key={i} className="pRow">{productionItems.slice(i,i+3)}</div>) : items.push(<div key={i} className="pRow">{productionItems.slice(i,i+3)}<span className="space"></span></div>)
        }

        return(
            <div className="AllProductionBox">
                {items}
            </div>
        )
    }
}