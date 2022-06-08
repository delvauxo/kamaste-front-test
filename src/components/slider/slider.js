import Slider from "react-slick";
import sliderSettings from "./slider-settings";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = ({ items, type }) => {

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
                <img className='pastille' src={`${process.env.REACT_APP_BACK_URL}/pastilles/${type}/${item.pastille}`} alt={item.nom} />
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