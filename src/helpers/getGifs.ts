import axios from "axios";
import { ListGifProps } from '../components/GiftGrid/interfaces';

export const getGifs = async( category: string ) => {

    const url= `https://api.giphy.com/v1/gifs/search?api_key=of51dI75FWxkmchK1oGr5T4YDOwLo9ib&q=${category}&limit=5`

    const { data } = await axios.get(url)

    const gifs:ListGifProps[] = data.data

    return gifs;
}