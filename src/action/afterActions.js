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

export function getUserInfo(data) {
    return{
        type:'GET_USER_INFO',
        payload:data
    }
}

export function getInviteCode(data) {
    return{
        type:"GET_INVITE_CODE",
        payload:data
    }
}

export function selfInviteCode(data) {
    return{
        type:'SELF_CODE',
        payload:data
    }
}