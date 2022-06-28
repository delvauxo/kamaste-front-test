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
                <img className="bg-image border-effect-white" src="http://localhost:8080/components_bg/flower.jpg" alt="background" />
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