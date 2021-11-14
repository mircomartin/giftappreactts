import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actions, State } from "../../redux";

import { GiftItem } from "../GiftItem/GiftItem";
import { SurferProps } from "./interfaces";

export const GiftGridSurfer = ({surferId}: SurferProps) => {

    const dispatch = useDispatch()
    const { getsGifsSurferAction } = bindActionCreators(actions, dispatch)
    
    const { gifsSurfer, loading } = useSelector((state: State) => state.gifs );

    useEffect(() => {

        getsGifsSurferAction(surferId)

    }, [ surferId ])

    return (
        <div className="col-12">

            { loading && <p className="animate__animated animate__flash p-5 m-5">Loading...</p> }

            <div className="container">

                <div className="row">
                {
                    
                    gifsSurfer.map((img) => (

                        <GiftItem key={img.id} img={img}/>
     
                    ))

                } 
                </div>
            </div>   
        </div>
    )
}