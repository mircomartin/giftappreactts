import { Action, ActionType } from "../types";
import { ListGifProps } from '../../components/GiftGrid/interfaces';

interface State {
    gifsHome: ListGifProps[],
    gifsSurf: ListGifProps[],
    loading: boolean,
    category: string,
}

const initialState = {
    gifsHome: [],
    gifsSurf: [],
    loading: false,
    category: 'John John Florence'
}

const gifReducer = (state: State = initialState, action: Action) => {
    
    switch (action.type) {
        case ActionType.ADD_CATEGORY:
            return {
                ...state,
                category: action.payload,
            }
        case ActionType.GET_GIFS_HOME:
            return {
                ...state,
                gifsHome: action.payload,
                loading: false,
            }
        case ActionType.GET_GIFS_SURF:
            return {
                ...state,
                gifsSurf: action.payload,
                loading: false,
            }
        case ActionType.LOADING_START:
            return {
                ...state,
                loading: true,
            }
        default:
            return state;   
    }

}

export default gifReducer
