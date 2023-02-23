import { INCREMENT , DECREMENT, INPUTINC } from "../constant/actionTypes";

const initialState = {
    count1:10
}

const countReducer = (state=initialState , actions)=>{
    switch (actions.type) {
        case INCREMENT:
            return {...state,count1 : state.count1 +1}
        
        case DECREMENT:
            return {...state,count1:state.count1 -1}
        
        case INPUTINC:
            return {...state,count1: state.count1 + actions.payload}

        default:
            return state
    }
}

export default countReducer