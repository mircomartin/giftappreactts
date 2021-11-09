import { useGetGifs } from "../../hooks/useGetGifs";
import { GiftItem } from "../GiftItem/GiftItem";
import { CategoryProps } from './interfaces';

export const GiftGrid = ({category}:CategoryProps) => {

    /*
        Para esto se uso el custom Hook
        const [images, setImages] = useState<ListGifProps[]>([])
        const [loading, setloading] = useState<Boolean>(true)

        useEffect(() => {

            setTimeout(() => {

                setloading(false)
                getGifs(category).then(setImages)

            }, 3000);
                
        }, [ category ]) 
    */

    const { data:images, loading } = useGetGifs(category)
    
    return (
        <div className="col-12">
            <h3 className="mb-4 animate__animated animate__fadeIn">{category}</h3>

            { loading && <p className="animate__animated animate__flash">Loading...</p>}

            <div className="container">
                <div className="row">
                {
                    
                    images.map((img) => (

                        <GiftItem key={img.id} img={img}/>
        
                    ))

                } 
                </div>
            </div>   
        </div>
    )
}
