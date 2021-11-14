import { useParams } from "react-router"
import { GiftGridSurfer } from "../components/GiftGrid/GiftGridSurfer"

export const Surfer = () => {

    const { surferId } = useParams<{surferId: string}>()

    return (
        <div>
            <h1>Surfer: {surferId}</h1>
            <GiftGridSurfer surferId={surferId}/>
        </div>
    )
}
