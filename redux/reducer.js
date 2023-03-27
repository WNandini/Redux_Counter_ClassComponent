import { combineReducers } from 'redux'

const postsReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_VALUE": 
                return [{value: action.payload.value, id: action.payload.id}]
        
        case "DECREASE_VALUE": 
                return [{value: action.payload.value, id: action.payload.id}]

        default: return state
    }
}

const rootReducer = combineReducers({
    posts: postsReducer
});

export default rootReducer;