/**
 * Created by hcy on 2017/3/30.
 */
import React from 'react'
import ShowYOUItem from './ShowYOUItem'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as mallActions from '../../../action/mallActions'
class ShowYOU extends React.Component{

            constructor(props){
            super(props)
        }

        render(){
            let {showyouItem} = this.props.homeReducer;
            let actions = bindActionCreators(mallActions,this.props.dispatch);
            const showyouItems = showyouItem.map((ele,idx) =>{
                return <ShowYOUItem key={idx} src={ele}  action={actions} />
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
export default connect((state)=>state)(ShowYOU)