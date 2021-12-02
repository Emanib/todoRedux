import {
    ADD_ITEM, 
    GET_LIST_ITEMS_START,
   GET_LIST_ITEMS_SUCCESS,
    GET_LIST_ITEMS_FAIL,
 
} from './constant';
import todoApi from '../../api/todoApi';

export const getItems=()=>async (dispatch)=>{
    try{

        dispatch({
            type:GET_LIST_ITEMS_START
        })

        const response= await todoApi.get('https://jsonplaceholder.typicode.com/todos')

         dispatch({
            type:GET_LIST_ITEMS_SUCCESS,
            payload:response.data
        })
    }catch (e) {
        dispatch(
            {
                type:GET_LIST_ITEMS_FAIL,
                payload:e.message
            }
        )
    }
}


export const addItemAction=(payload)=>{
    return ({
        type:ADD_ITEM,
        payload
    })
}