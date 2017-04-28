/**
 * Created by hcy on 2017/4/19.
 */
const initState = {
    allAddress:[],
    giftsEle:[],
    giftsDetail:[],
    phoneNumber:'',
    authCode:'',
    bottomItems: [
        {
            src: '/imgs/b1.png',
            hoverSrc: '/imgs/b11.png',
            href: '/home/index',
        },
        {
            src: '/imgs/b2.png',
            hoverSrc: '/imgs/b22.png',
            href: '/home/cate',
        }, {
            src: '/imgs/b3.png',
            hoverSrc: '/imgs/b33.png',
            href: '/home/cart',

        }, {
            src: '/imgs/b4.png',
            hoverSrc: '/imgs/b44.png',
            href: '/home/giftBagMall',
        }, {
            src: '/imgs/b5.png',
            hoverSrc: '/imgs/b55.png',
            href: '/home/MyWallet',
        }
    ],
    userInfo:[],
    adminCode:'',
    checkLogin:false,
    allOrders:[],
    saveSearch:'富硒康',
    searchOut:[],
    historyItem:[],
    jump:false,
    bottomSelectId:new Set(),
    payPrice:0

}

export default function afterReducer(state = initState, action = {}) {
    const {type, payload} = action;
    let clone = Object.assign({}, state);
    switch (type) {
        case "GET_ADDRESS":
            clone.allAddress = payload.msg;
            return clone;

        case "GET_GIFTS_INDEX":
            clone.giftsEle = payload.msg;
            return clone;

        case "GET_GIFTS_DETAIL":
            clone.giftsDetail = payload.msg;
            return clone;
        case "GET_NUMBER":
            clone.phoneNumber = payload;
            return clone;

        case "GET_AUTH_CODE":
            clone.authCode = payload;
            return clone;

        case "CHANGE_ITEMS_HREF":
            clone.items =[
                    {
                        src: '/imgs/b1.png',
                        hoverSrc: '/imgs/b11.png',
                        href: '/home/index',
                    },
                    {
                        src: '/imgs/b2.png',
                        hoverSrc: '/imgs/b22.png',
                        href: '/home/cate',
                    }, {
                        src: '/imgs/b3.png',
                        hoverSrc: '/imgs/b33.png',
                        href: '/home/cart',

                    }, {
                        src: '/imgs/b4.png',
                        hoverSrc: '/imgs/b44.png',
                        href: '/home/giftBagMall',
                    }, {
                        src: '/imgs/b5.png',
                        hoverSrc: '/imgs/b55.png',
                        href: '/home/MyWallet',
                    }
                ];
            return clone;


        case "GET_USER_INFO":
            clone.userInfo = payload.msg;
            return clone;

        case "GET_INVITE_CODE":
            clone.adminCode = payload.msg;
            return clone;

        case "SELF_CODE":
            clone.adminCode = payload;
            return clone;

        case "CHECK_LOGIN":
            clone.checkLogin = payload.msg;
            return clone;

        case "ALL_ORDERS":
            clone.allOrders = payload.msg;
            return clone;

        case "SAVE_SEARCH":
            clone.saveSearch = payload;

            return clone;

        case "SEARCH_OUT":
            clone.searchOut = payload.msg;
            return clone;

        case "HISTORY_SAVE":
            clone.historyItem.unshift(payload);
            return clone;

        case "JUMP_FLAG":
            clone.jump = true;
            return clone;

        case "JUMP_NOT":
            clone.jump = false;
            return clone;

        case "BOTTOM_NAV_SELECT":
            clone.bottomSelectId = payload;
            return clone;

        case "CHANGE_PRICE":
            clone.payPrice=payload;
            return clone;

    }
    return clone;

}