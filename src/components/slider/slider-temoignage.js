import Slider from "react-slick";
import sliderSettings from "./slider-settings";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
                        <h3>{item.client}</h3>
                        <div>{item.texte}</div>
                    </a>
                </div>
            ) : (
                <div key={item.id} className='slider-item'>
                    <h3>{item.client}</h3>
                    <div>{item.texte}</div>
                </div>
            );
        }
    );

    return (
        <Slider {...settings}>
            {itemsJSX}
        </Slider>
    );
};

export default TemoignageSlider;