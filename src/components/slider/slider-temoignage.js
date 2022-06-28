import Slider from "react-slick";
import sliderSettings from "./slider-settings";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from '@mui/material';

const TemoignageSlider = ({ items }) => {

    var settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: sliderSettings
    };

    const itemsJSX = items.map(
        item => {
            return item.lien ? (
                <div key={item.id} className='slider-item'>
                    <a href={item.lien}>
                        <h3 className='font-brittany primary-color txt-xxl'>{item.client}</h3>
                        <div className='font-chakra primary-color txt-md mb-lg'>{item.texte}</div>
                    </a>
                </div>
            ) : (
                <div key={item.id} className='slider-item'>
                    <h3 className='font-brittany primary-color txt-xxl'>{item.client}</h3>
                    <div className='font-chakra primary-color txt-md mb-lg'>{item.texte}</div>
                </div>
            );
        }
    );

    return (
        <Container>
            <Slider {...settings}>
                {itemsJSX}
            </Slider>
        </Container>
    );
};

export default TemoignageSlider;