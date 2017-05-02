/**
 * Created by hcy on 2017/4/6.
 */
export function getBottomNav(data, idx) {
    return {
        type: "BOTTOM_NAV",
        payload: data,
        index: idx
    }
}
export function getBrand(data, idx) {
    return {
        type: "BRAND",
        payload: data,
        index: idx
    }
}

export function getProduction(data, idx) {
    return {
        type: "PRODUCTION",
        payload: data,
        index: idx
    }
}

export function getHistory(data, idx) {
    return {
        type: 'HISTORY_ITEM',
        payload: data,
        index: idx
    }
}

export function getGood(data) {
    return {
        type: 'GOOD_ITEM',
        payload: data,
    }
}

export function getClassifyBar(data, idx) {
    return {
        type: "CLASSIFY_BAR",
        payload: data,
        index: idx
    }
}

export function getClassify(data) {
    return {
        type: "CLASSIFY",
        payload: data,
    }
}

export function getClassifyGood(data) {
    return {
        type: "CLASSIFY_GOOD",
        payload: data
    }
}
export function getShopItemsAll(data) {
    return {
        type: "SHOP_ITEMS_ALL",
        payload: data
    }
}
export function getShopMainPage(data) {
    return {
        type: "SHOP_MAIN_PAGE",
        payload: data
    }
}

export function getHotSale(data) {
    return {
        type: 'HOT_SALE',
        payload: data
    }
}
export function getActivityImgUrl(data) {
    return {
        type: 'ACTIVITY_IMG_URL',
        payload: data
    }
}

export function getTelephone(data) {
    return {
        type: "TELEPHONE",
        payload: data
    }
}

export function changeOpenTrue() {
    return {
        type: "CHANGE_OPEN_TRUE"
    }
}
export function changeOpenFalse() {
    return {
        type: 'CHANGE_OPEN_FALSE'
    }
}

export function getGoodContent(data) {
    return {
        type: 'GOOD_CONTENT',
        payload: data
    }
}

export function getSileIndex(data) {
    return {
        type: "SLIDE_INDEX",
        payload: data
    }
}
export function getMainPageGoods(data) {
    return {
        type: "MAIN_PAGE_GOODS",
        payload: data
    }
}


export function addGoodToCart(data) {
    return {
        type: 'ADD_TO_CART',
        payload: data
    }
}

export  function hideAddTo() {
    return{
        type:'HIDE_ADD_TO'
    }
}

export function getOrdersInCart(data) {
    return {
        type: 'ORDERS_IN_CART',
        payload: data
    }
}

export function changeOrderCount(data) {
    return {
        type: 'CHANGE_ORDER_COUNT',
        payload: data
    }
}

export function deleteAfter(data) {
    return {
        type: 'DELETE_AFTER',
        payload: data
    }
}

export function willDelete() {
    return {
        type: 'WILL_DELETE'
    }
}
export function willComplete() {
    return {
        type: 'WILL_COMPLETE'
    }
}

export function totalPrice(data) {
    return {
        type: "TOTAL_PRICE",
        payload: data

    }
}
export function targetSelectedID(data) {
    return {
        type: "TARGET_SELECTED_ID",
        payload: data
    }
}

export function targetOrders(data) {
    return {
        type: "TARGET_ORDERS",
        payload: data
    }
}

export function confirmOrders(data) {
    return {
        type: "CONFIRM_ORDERS",
        payload: data
    }

}

export function changeCoin(data) {
    return {
        type: 'CHANGE_COIN',
        payload: data
    }
}

export function changePoint(data) {
    return {
        type: 'CHANGE_POINT',
        payload: data
    }
}

export function getRate(data) {
    return {
        type: "GET_RATE",
        payload: data
    }
}

export function getDeliveryWay(data) {
    return {
        type: 'GET_DELIVERY_WAY',
        payload: data
    }
}

export function getAddress(data) {
    return {
        type: 'GET_ADDRESS',
        payload: data
    }
}

export function changeReallyPrice(data) {
    return {
        type: 'CHANGE_REALLY_PRICE',
        payload: data
    }
}

export function getAddressToEdit(data) {
    return {
        type: 'GET_ADDRESS',
        payload: data
    }
}

export function changeAddressToEdit(data) {
    return {
        type: 'CHANGE_ADDRESS',
        payload: data
    }
}

export function getDefaultAddress(data) {
    return {
        type: 'GET_DEFAULT_ADDRESS',
        payload: data
    }
}
export function bottomNavSelect(data) {
    return {
        type: "BOTTOM_NAV_SELECT",
        payload: data
    }
}

export function payment(data){
    return {
        type:"PAY_ORDER_NUMBER",
        payload: data
    }
}



