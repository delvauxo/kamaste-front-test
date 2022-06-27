import { Container } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Dicton from '../../components/dicton/dicton';
import PastilleSlider from '../../components/slider/slider';
import TemoignageSlider from '../../components/slider/slider-temoignage';


const BodyPage = () => {

    const [moments, setMoments] = useState([]);
    const [equipements, setEquipements] = useState([]);
    const [services, setServices] = useState([]);
    const [temoignages, setTemoignages] = useState([]);

    useEffect(() => {
        // Equipements.
        axios.get(`${process.env.REACT_APP_BACK_URL}/api/body/equipement`)
            .then(({ data }) => { setEquipements(data.result.rows); });
        // Moments.
        axios.get(`${process.env.REACT_APP_BACK_URL}/api/body/moment`)
            .then(({ data }) => { setMoments(data.result.rows); });
        // Services.
        axios.get(`${process.env.REACT_APP_BACK_URL}/api/body/service`)
            .then(({ data }) => { setServices(data.result.rows); });
        // Temoignages.
        axios.get(`${process.env.REACT_APP_BACK_URL}/api/body/temoignage`)
            .then(({ data }) => { setTemoignages(data.result.rows); });
    }, []);

    return (
        <>
            {/* HEADER PAGE */}
            <Container>
                <h1>Espace Body</h1>
                <div className='rounded-bg-white'>
                    <p className='font-brittany secondary-color no-margin'>
                        <div className='txt-center txt-lg'>« Fais de ta vie un rêve, et d'un rêve, une réalité. »</div>
                        <div className='txt-right txt-md'>Antoine de Saint-Exupéry</div>
                    </p>
                </div>
                <div className='rounded-bg-white'>
                    <p className='font-chakra txt-md secondary-color'>Kamaste est un espace de bien-être pour le corps et l’esprit où nous saluons le plaisir.</p>
                </div>
            </Container>

            {/* EQUIPEMENTS COMPONENT */}
            <Container>
                <div className="component-title">
                    <h3>Equipements</h3>
                </div>
            </Container>
            <div className="slider-component">
                <div className="bg-image"></div>
                <PastilleSlider items={equipements} name="equipements" />
            </div>
            <Dicton container={true} dicton='« Dicton Équipements !!! »' />

            {/* MOMENTS COMPONENT */}
            <Container>
                <div className="component-title">
                    <h3>Moments</h3>
                </div>
            </Container>
            <div className="slider-component">
                <div className="bg-image"></div>
                <PastilleSlider items={moments} name="moments" />
            </div>
            <Dicton container={true} dicton='« Dicton Moments !!! »' />

            {/* SERVICES COMPONENT */}
            <Container>
                <div className="component-title">
                    <h3>Services</h3>
                </div>
            </Container>
            <div className="slider-component">
                <div className="bg-image"></div>
                <PastilleSlider items={services} name="services" />
            </div>
            <Dicton container={true} dicton='« Dicton Services !!! »' />

            {/* RESERVER */}
            <Container>
                <div className="component-title">
                    <h3>Réserver</h3>
                </div>
            </Container>

            {/* YOUCANBOOK.ME */}
            {/* <iframe src="https://kamaste.youcanbook.me/?noframe=true&skipHeaderFooter=true" id="ycbmiframekamaste" frameborder="0" allowtransparency="true"></iframe> */}

            {/* TEMOIGNAGES COMPONENT */}
            <Container>
                <div className="component-title">
                    <h3>Témoignages</h3>
                </div>
            </Container>
            <div className="slider-component">
                <div className="bg-image"></div>
                <TemoignageSlider items={temoignages} />
            </div>
            <Dicton container={true} dicton='« Dicton Témoignages !!! »' />

        </>
    );
};

export default BodyPage;