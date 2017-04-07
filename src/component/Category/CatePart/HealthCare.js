import React from 'react'
import ProductionItem from "../../Home/Production/ProductionItem";
export default class HealthCare extends React.Component{
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
            return <ProductionItem key={idx} src={ele}  />
        });

        const items = [];

        for(let i = 0;i < productionItems.length; i= i +2){

            (items.length % 2 == 0 )? items.push(<div key={i} className="pHeal">{productionItems.slice(i,i+2)}</div>) : items.push(<div key={i} className="pHeal">{productionItems.slice(i,i+2)}</div>)
        }

        return(

                <div className="HealthBox">
                    {items}
                </div>
        )
    }
}