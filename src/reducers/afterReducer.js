/**
 * Created by hcy on 2017/4/19.
 */
const initState = {

}

export default function afterReducer(state = initState, action = {}) {
    const {type, payload} = action;
    let clone = Object.assign({}, state);
    switch (type) {


    }
    return clone;

}