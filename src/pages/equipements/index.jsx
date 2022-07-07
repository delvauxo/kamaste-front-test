import { Container } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Dicton from '../../components/dicton/dicton';
import PastilleSlider from '../../components/slider/slider';

const EquipementsPage = () => {

    const [equipements, setEquipements] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACK_URL}/api/body/equipement`)
            .then(
                ({ data }) => setEquipements(data.result.rows)
            );
    }, []);

    const equipementsJSX = equipements.map(
        equipement => (
            <li key={equipement.id} className='rounded-bg-white'>
                <div className='desc-text font-chakra'>
                    <div className='txt-xxl tertiary-color'>{equipement.nom}</div>
                    <div className='secondary-color mt-sm'>{equipement.description}</div>
                </div>
                <div className='desc-image'>
                    <img src={`${process.env.REACT_APP_BACK_URL}/equipements/images/` + equipement.image} alt={equipement.nom} />
                </div>
            </li>
        )
    );

    return (
        <>
            <div className="slider-component border-effect-white-bt no-margin">
                <img className="bg-image" src={`${process.env.REACT_APP_BACK_URL}/components_bg/flower.jpg`} alt="background" />
                <PastilleSlider items={equipements} name="equipements" />
            </div>
            <Dicton container={true} dicton='« Dicton Equipements !!! »' />
            <Container>
                <ul className='component-list no-margin'>
                    {equipementsJSX}
                </ul>
            </Container>
            <Container className='mt-lg'>
                <div className='dicton rounded-bg-white'>
                    <p className='font-chakra tertiary-color'>Tous les équipements sont compris dans le prix.</p>
                </div>
            </Container>
        </>
    );
};

export default EquipementsPage;