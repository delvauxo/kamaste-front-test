import Slider from "react-slick";
import sliderSettings from "./slider-settings";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from '@mui/material';

const PastilleSlider = ({ items, name, title }) => {

    var settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: sliderSettings
    };

    const itemsJSX = items.map(
        item => {
            return item.lien ? (
                <div key={item.id} className='slider-item'>
                    <a href={item.lien}>
                        {title && <h3>{item.nom}</h3>}
                        <img className='pastille' src={`${process.env.REACT_APP_BACK_URL}/pastilles/${name}/${item.pastille}`} alt={item.nom} />
                    </a>
                </div>
            ) : (
                <div key={item.id} className='slider-item'>
                    {title && <h3>{item.nom}</h3>}
                    <img className='pastille' src={`${process.env.REACT_APP_BACK_URL}/pastilles/${name}/${item.pastille}`} alt={item.nom} />
                </div>
            );
        }
    );

    return (
        <>
            <Container>
                <Slider {...settings}>
                    {itemsJSX}
                </Slider>
            </Container>
        </>
    );
};

export default PastilleSlider;