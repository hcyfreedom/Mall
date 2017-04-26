/**
 * Created by hcy on 2017/4/25.
 */
export function getGiftsIndex(data) {
    return{
        type:'GET_GIFTS_INDEX',
        payload:data
    }
}

export function getGiftsDetail(data) {
    return{
        type:"GET_GIFTS_DETAIL",
        payload:data
    }
}

export function getNumber(data) {
    return{
        type:"GET_NUMBER",
        payload:data
    }
}
export function getAuthCode(data) {
    return{
        type:'GET_AUTH_CODE',
        payload:data
    }
}

export function changeItemsHref() {
    return{
        type:'CHANGE_ITEMS_HREF'
    }
}