import Slider from "react-slick";
import sliderSettings from "./slider-settings";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = ({ items }) => {

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
        item => (
            <div key={item.id} className='slider-item'>
                <h3>{item.nom}</h3>
                <img className='pastille' src={`images/pastilles/${item.nom.toLowerCase()}.png`} alt={item.nom} />
            </div>
        )
    );

    return (
        <Slider {...settings}>
            {itemsJSX}
        </Slider>
    );
};

export default SimpleSlider;