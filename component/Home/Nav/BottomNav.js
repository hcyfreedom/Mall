/**
 * Created by Acer on 2017/2/21.
 */
import React from 'react';  //引入react组件
import BottomNavItem from './BottomNavItem';
import {Link} from 'react-router-dom';
export default class BottomNav extends React.Component {  //定义组件，也可以用React.createClass方法创建组件
    constructor(){
        super();
        let items = [
            {
                src:'../imgs/b1.png',
                hoverSrc:'../imgs/b11.png',
                href: '/HomePage',
            },
            {
                src:'../imgs/b2.png',
                hoverSrc:'../imgs/b22.png',
                href: '/CategoryPage',
            },{
                src:'../imgs/b3.png',
                hoverSrc:'../imgs/b33.png',
                href: '/kings',
            },{
                src:'../imgs/b4.png',
                hoverSrc:'../imgs/b44.png',
                href: '/',
            },{
                src:'../imgs/b5.png',
                hoverSrc:'../imgs/b55.png',
                href: '/queens',
            }
        ]
        this.state = {
            items:items
        }
    }
    render() {
        const bottomNavItems = this.state.items.map((ele,idx)=>{
            return <Link key={idx} to={ele.href}><BottomNavItem src={ele}/></Link>
        });
        return(
            <div className="bBox">
                {bottomNavItems}
            </div>
        )
    }
}

