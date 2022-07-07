import { Container } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Dicton from '../../components/dicton/dicton';
import PastilleSlider from '../../components/slider/slider';

const ServicesPage = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACK_URL}/api/body/service`)
            .then(
                ({ data }) => { setServices(data.result.rows); }
            );
    }, []);

    const servicesJSX = services.map(
        service => (
            <li key={service.id} className='rounded-bg-white'>
                <div className='desc-text font-chakra'>
                    <div className='txt-xxl tertiary-color'>{service.nom}</div>
                    <div className='secondary-color mt-sm'>{service.description}</div>
                </div>
                <div className='desc-image'>
                    <img src={`${process.env.REACT_APP_BACK_URL}/services/images/` + service.image} alt={service.nom} />
                </div>
            </li>
        )
    );

    return (
        <>
            <div className="slider-component border-effect-white-bt no-margin">
                <img className="bg-image" src={`${process.env.REACT_APP_BACK_URL}/components_bg/flower.jpg`} alt="background" />
                <PastilleSlider items={services} name="services" body={false} />
            </div>
            <Dicton container={true} dicton='« Dicton Services !!! »' />

            <Container>
                <ul className='component-list no-margin'>
                    {servicesJSX}
                </ul>
            </Container>
        </>
    );
};

export default ServicesPage;