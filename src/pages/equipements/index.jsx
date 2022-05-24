import axios from 'axios';
import { useEffect, useState } from 'react';

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
            <li key={equipement.id}>
                <div>{equipement.nom}</div>
                <div>{equipement.description}</div>
            </li>
        )
    );

    return (
        <ul>
            {equipementsJSX}
        </ul>
    );
};

export default EquipementsPage;