import { ListGifProps } from '../../components/GiftGrid/interfaces';

export enum ActionType {
    GET_GIFS_HOME = "getGifsHome",
    GET_GIFS_SURF = "getGifsSurf",
    LOADING_START = "startLoading",
    ADD_CATEGORY = "addCategory"
}

export interface GetGifsAction {
    type: "getGifsHome" | "getGifsSurf",
    payload: ListGifProps[],
}

export interface LoadingStartAction {
    type: "startLoading",
    payload: true,
}

export interface AddCategory {
    type: "addCategory",
    payload: string,
}

export type Action = GetGifsAction | LoadingStartAction | AddCategory