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
                <li>{espace.nom}</li>
            </Link>
        )
    );

    return (
        <>
            {espacesJSX}
        </>
    );
};

export default EspacesList;