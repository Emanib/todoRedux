import React,{useState,useEffect} from 'react'
import {dispatch} from '../redux/store'
import { addItemAction, getItems,deleteItem } from '../redux/todoList/actions'
import { useSelector } from "react-redux";

export default function TodoList()
{
    const [state, setState] = useState('');
    const handleChange = (e) =>
    {
        setState(e.target.value)
    }
    const addItem = () =>
    {
        if (!state) return;
        dispatch(addItemAction({
            title: state,
            id: Math.random()*1000
        }))
        setState('')
    }
    useEffect(() =>
    {
        
        dispatch(getItems())
       
    },[])
    return (
        <div>
            <input type={'text'} onChange={handleChange} value={ state}/>
            <button onClick = {addItem }> Add </button>
            

        </div>
    )
}


export function Home()
{
    const { list: { list, loading, error } } = useSelector(state => state)
  
    const handleRemove = (id) =>
    {
        dispatch(deleteItem({id:id}))
    }
    return (
        <div>
               {error?
                <div>{error}</div>
                :
                <>
                    {loading ?
                        <span>Loading...</span> :
                      
                     (   list.map(item =>
                            <div className={'item'} key={item.id}
                               >
                                {item.title}
                                <button onClick = {()=>handleRemove(item.id)}> Delete </button>
                            </div
                                >))
                    }

                </>
            }
        </div>
    )
}

