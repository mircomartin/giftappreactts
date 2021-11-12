import axios from "axios"
import { Dispatch } from "redux"
import { Action, ActionType } from "../types"
import { ListGifProps } from '../../components/GiftGrid/interfaces';

export const getsGifsAction = ( category:string ) => {

    return async (dispatch: Dispatch<Action>) => {

        dispatch({
            type: ActionType.LOADING_START,
            payload: true
        })

        try {

            const url= `https://api.giphy.com/v1/gifs/search?api_key=of51dI75FWxkmchK1oGr5T4YDOwLo9ib&q=${category}&limit=6`

            const { data } = await axios.get(url)

            const gifs: ListGifProps[] = data.data

            dispatch({
                type: ActionType.GET_GIFS_HOME,
                payload: gifs
            })
                
        } catch (error) {
            console.log(error)
        }
    }
}

export const getsGifsSurfAction = () => {

    return async (dispatch: Dispatch<Action>) => {

        dispatch({
            type: ActionType.LOADING_START,
            payload: true
        })

        try {

            const url= "https://api.giphy.com/v1/gifs/search?api_key=of51dI75FWxkmchK1oGr5T4YDOwLo9ib&q=Surf&limit=50"

            const { data } = await axios.get(url)

            const gifs: ListGifProps[] = data.data

            dispatch({
                type: ActionType.GET_GIFS_SURF,
                payload: gifs
            })
                
        } catch (error) {
            console.log(error)
        }
    }
}

export const addCategoryAction = ( category:string ) => {

    return (dispatch: Dispatch<Action>) => {

        dispatch({
            type: ActionType.ADD_CATEGORY,
            payload: category
        })

    }
}