import axios from 'axios';
import { useEffect, useState } from 'react';

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
            <ul>
                {momentsJSX}
            </ul>
        </>
    );
};

export default MomentsPage;