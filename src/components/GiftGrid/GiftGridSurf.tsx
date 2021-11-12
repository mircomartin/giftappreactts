import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actions, State } from "../../redux";

import { GiftItem } from "../GiftItem/GiftItem";

export const GiftGridSurf = () => {

    const dispatch = useDispatch()
    const { getsGifsSurfAction } = bindActionCreators(actions, dispatch)
    
    const { gifsSurf, loading } = useSelector((state: State) => state.gifs );

    useEffect(() => {

        getsGifsSurfAction()
        
               
    }, [  ])

    return (
        <div className="col-12">

            { loading && <p className="animate__animated animate__flash p-5 m-5">Loading...</p> }

            <div className="container">

                <div className="row">
                {
                    
                    gifsSurf.map((img) => (

                        <GiftItem key={img.id} img={img}/>
     
                    ))

                } 
                </div>
            </div>   
        </div>
    )
}