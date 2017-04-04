/**
 * Created by hcy on 2017/3/30.
 */
import React from 'react'
import ShowYOUItem from './ShowYOUItem'
export default class ShowYOU extends React.Component{

            constructor(){
            super()
            let showyouItem = [
                {
                    src:'../imgs/p1.png',
                },{
                    src:'../imgs/p1.png',
                },{
                    src:'../imgs/p1.png',
                }

            ]
            this.state = {
                showyou : showyouItem
            }
        }

        render(){
            const showyouItems = this.state.showyou.map((ele,idx) =>{
                return <ShowYOUItem key={idx} src={ele} />
            });

            const items = [];

            for(let i = 0;i < showyouItems.length; i= i +3){

                (items.length % 3 == 0 )? items.push(<div key={i} className="pRow">{showyouItems.slice(i,i+3)}</div>) : items.push(<div key={i} className="pRow">{showyouItems.slice(i,i+3)}<span className="space"></span></div>)
            }

            return(
                <div className="AllProductionBox">
                    <div className="showBanner">
                        <img src="../imgs/m1.png"/>
                        <span>&nbsp;>more</span>
                    </div>
                    {items}
              </div>
            )
        }


}