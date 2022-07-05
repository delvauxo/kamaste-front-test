import { Container } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Dicton from '../../components/dicton/dicton';
import PastilleSlider from '../../components/slider/slider';

const MomentsPage = () => {

    const [moments, setMoments] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACK_URL}/api/body/moment`)
            .then(
                ({ data }) => { setMoments(data.result.rows); }
            );
    }, []);

    const momentsJSX = moments.map(
        moment => (
            <li key={moment.id} className='rounded-bg-white'>
                <div className='desc-text font-chakra'>
                    <div className='txt-xxl tertiary-color'>{moment.nom}</div>
                    <div className='secondary-color mt-sm'>Nombre de personnes: {moment.people}</div>
                    <div className='secondary-color'>Durée: {moment.hours} heures</div>
                    <div className='secondary-color mt-sm'>{moment.description}</div>
                    <div className='secondary-color mt-sm'>Prix: {moment.price}€</div>
                    <div className='book-btn mt-lg'>
                        <a className='border-effect-blue' href={moment.lien} target='_blank' rel="noopener noreferrer">Réserver</a>
                    </div>
                </div>
                <div className='desc-image'>
                    <img src={`${process.env.REACT_APP_BACK_URL}/moments/images/` + moment.image} alt={moment.nom} />
                </div>
            </li>
        )
    );

    return (
        <>
            <div className="slider-component border-effect-white-bt no-margin">
                <img className="bg-image" src={`${process.env.REACT_APP_BACK_URL}/components_bg/flower.jpg`} alt="background" />
                <PastilleSlider items={moments} name="moments" body={false} />
            </div>
            <Dicton container={true} dicton='« Dicton Moments !!! »' />

            <Container>
                <ul className='component-list no-margin'>
                    {momentsJSX}
                </ul>
            </Container>
        </>
    );
};

export default MomentsPage;