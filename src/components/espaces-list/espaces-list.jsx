import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const EspacesList = () => {

    const [espaces, setEspaces] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACK_URL}/api/espace`)
            .then(
                ({ data }) => { setEspaces(data.rows); },
            );
    }, []);

    const espacesJSX = espaces.map(
        (espace) => (
            <Link key={espace.id} to={`${espace.nom.toLowerCase()}`}>
                <div id={`home-img-${espace.nom.toLowerCase()}`}>
                    <img src={`/images/home_${espace.nom.toLowerCase()}.jpg`} alt={espace.nom} />
                    <div id={`home-img-caption-${espace.nom.toLowerCase()}`}>
                        <span>{espace.nom.toUpperCase()}</span>
                    </div>
                </div>
            </Link>
        )
    );

    return (
        <>
            <div id='home-img-container'>
                {espacesJSX}
            </div>
        </>
    );
};

export default EspacesList;