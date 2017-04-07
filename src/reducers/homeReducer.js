const initState = {
    bottomNavItemUrl : [],
    items : [
        {
            src:'/imgs/b1.png',
            hoverSrc:'/imgs/b11.png',
            href: '/home/index',
        },
        {
            src:'/imgs/b2.png',
            hoverSrc:'/imgs/b22.png',
            href: '/home/cate',
        },{
            src:'/imgs/b3.png',
            hoverSrc:'/imgs/b33.png',
            href: '/kings',
        },{
            src:'/imgs/b4.png',
            hoverSrc:'/imgs/b44.png',
            href: '/',
        },{
            src:'/imgs/b5.png',
            hoverSrc:'/imgs/b55.png',
            href: '/queens',
        }
    ],
     brandItem :[
        {
            src:'../imgs/icon1.png',
            detail:"众品联动"
        },{
            src:'../imgs/icon2.png',
            detail:'品牌直供'
        },{
            src:'../imgs/icon3.png',
            detail:'地道品质'
        }

    ],
    classifyItem : [
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

    ],
     productionItem : [
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

    ],
     showyouItem : [
        {
            src:'../imgs/p1.png',
            shopHref:'/shop/index'
        },{
            src:'../imgs/p1.png',
            shopHref:'/shop/index'
        },{
            src:'../imgs/p1.png',
            shopHref:'/shop/index'
        }

    ]
}

export default function homeReducer(state = initState, action = {}) {
    const {type, payload} = action;
    let clone = Object.assign({}, state);
    switch (type) {
        case  "BOTTOM_NAV" :
            clone.bottomNavItemUrl[action.index] = payload;
            return clone;

        case "BRAND":
            clone.brandItem.src= payload;
            clone.brandItem.detail = payload;
            return clone;

        case "CLASSIFY":
            clone.classifyItem.src= payload;
            clone.classifyItem.detail = payload;
            return clone;

        case "PRODUCTION":
            clone.productionItem.src=payload;
            clone.productionItem.detail=payload;
            clone.productionItem.fakePrice=payload;
            clone.productionItem.price=payload;
            clone.productionItem.minPrice=payload;
            return clone;

        case "SHOWYOU":
            clone.showyouItem.src=payload;
            clone.showyouItem.shopHref=payload;
            return clone;
    }
    return clone;

}