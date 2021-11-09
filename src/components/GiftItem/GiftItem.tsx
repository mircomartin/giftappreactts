import { ImgProps } from './interfaces';

export const GiftItem = ({img}:ImgProps) => {

    const { title, images } = img

    return (

        <div className="col-12 col-md-4 mb-4 animate__animated animate__fadeIn">
            <div className="card" >
                <img className="card-img-top" src={images?.downsized.url} alt={title} />
                <div className="card-body">
                    <h5 className="card-title text-center">{title}</h5>
                </div>
            </div>
        </div>
    )
}
