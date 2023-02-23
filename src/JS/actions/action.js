import { INCREMENT , DECREMENT , INPUTINC } from "../constant/actionTypes";

export const  increment =()=>{
    return{
        type:INCREMENT
    }
}

export const decrement = ()=>{
    return{
        type:DECREMENT
    }
}

export const inputInc = (num)=>{
    return{
        type:INPUTINC,
        payload:num
    }
}