import { useEffect, useState } from "react"
import { CustomProps } from './interfaces';
import { getGifs } from "../helpers/getGifs";

export const useGetGifs = ( category: string ) => {

    const [state, setState]= useState<CustomProps>({
        data: [],
        loading: true,
    })

    useEffect(() => {

        setTimeout(() => {

            getGifs(category)
            .then(imgs => { 
                setState({
                    data: imgs,
                    loading: false
                })
                
            })

        }, 1000);

    }, [ category ])
    
    return state
    
}
