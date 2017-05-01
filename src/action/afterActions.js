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

export function checkLogin(data) {
    return{
        type:"CHECK_LOGIN",
        payload:data
    }
}

export function allOrders(data) {
    return{
        type:'ALL_ORDERS',
        payload:data
    }
}

export function saveSearch(data) {
    return{
        type:'SAVE_SEARCH',
        payload:data
    }
}

export function searchOut(data) {
    return{
        type:"SEARCH_OUT",
        payload:data
    }
}

export function historySave(data) {
    return{
        type:"HISTORY_SAVE",
        payload:data
    }
}

export function jumpFlag() {
    return{
        type:"JUMP_FLAG"
    }
}

export function jumpFalse() {
   return{
       type:'JUMP_NOT'
   }
}





