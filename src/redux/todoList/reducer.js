import {
    ADD_ITEM, 
    GET_LIST_ITEMS_FAIL,
    GET_LIST_ITEMS_START,
    GET_LIST_ITEMS_SUCCESS
} from './constant';
export const listReducer = (initialState ={
    loading: false,
    list: [],
    error:""
}, action) =>
{
    switch (action.type)
    {
        case GET_LIST_ITEMS_START: return { ...initialState, loading: true }
        case GET_LIST_ITEMS_SUCCESS: return { ...initialState, loading: false, list: action.payload }
        case GET_LIST_ITEMS_FAIL: return { ...initialState, loading: false, error: action.payload }
        case  ADD_ITEM :return {...initialState,list:[...initialState.list,action.payload]}
            default:return initialState
    }

}