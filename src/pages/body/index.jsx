import axios from 'axios';
import { useEffect, useState } from 'react';
import SimpleSlider from '../../components/slider/slider';


const BodyPage = () => {

    const [moments, setMoments] = useState([]);
    const [equipements, setEquipements] = useState([]);
    const [services, setServices] = useState([]);

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
    }, []);

    // Equipements.
    const equipementsJSX = equipements.map(
        equipement => (
            <li key={equipement.id}>
                <div>{equipement.nom}</div>
                <div>{equipement.description}</div>
            </li>
        )
    );

    // Moments.
    const momentsJSX = moments.map(
        moment => (
            <li key={moment.id}>
                <div>{moment.nom}</div>
                <div>{moment.description}</div>
            </li>
        )
    );

    // Services.
    const servicesJSX = services.map(
        service => (
            <li key={service.id}>
                <div>{service.nom}</div>
                <div>{service.description}</div>
            </li>
        )
    );

    return (
        <>
            <h1>Espace Body</h1>


            <img src="http://localhost:8080/uploads/zerg_logo.jpg" alt="zerg" />

            <p>Kamaste est un espace de bien-être pour le corps et l’esprit où nous saluons le plaisir.</p>
            <p>« Fais de ta vie un rêve, et d'un rêve, une réalité".  Antoine de Saint-Exupéry</p>
            <h3>Equipements</h3>
            <ul>
                {equipementsJSX}
            </ul>
            <SimpleSlider items={equipements} />

            <h3>Moments</h3>
            <ul>
                {momentsJSX}
            </ul>
            <SimpleSlider items={moments} />

            <h3>Services</h3>
            <ul>
                {servicesJSX}
            </ul>
            <SimpleSlider items={services} />

            <h3>Agenda</h3>
            {/* <iframe src="https://kamaste.youcanbook.me/?noframe=true&skipHeaderFooter=true" id="ycbmiframekamaste" frameborder="0" allowtransparency="true"></iframe> */}
            <h3>Témoignages</h3>
            <ul>
                <li>...</li>
                <li>...</li>
                <li>...</li>
            </ul>
        </>
    );
};

export default BodyPage;