import { useSelector } from 'react-redux';
import { AddCategory } from '../components/AddCategory/AddCategory';
import { State } from '../redux';
import { GiftGridHome } from '../components/GiftGrid/GiftGridHome';

export const Home = () => {

    const { category } = useSelector((state: State) => state.gifs );

    return (
        <div className="container py-5">
            <h2 className="text-center">Search a Gift!</h2>

            <AddCategory />

            <hr />

            <h2 className="text-center">{category}</h2>

            <div className="row">
                 <GiftGridHome />
            </div>
        </div>
    )
}
