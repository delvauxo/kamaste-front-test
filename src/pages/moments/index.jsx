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
            <li key={moment.id}>
                <div>{moment.nom}</div>
                <div>{moment.description}</div>
            </li>
        )
    );

    return (
        <>
            <div className="slider-component">
                <div className="bg-image border-effect-white"></div>
                <PastilleSlider items={moments} name="moments" />
            </div>
            <Dicton container={true} dicton='« Dicton Moments !!! »' />

            <Container>
                <ul>
                    {momentsJSX}
                </ul>
            </Container>
        </>
    );
};

export default MomentsPage;