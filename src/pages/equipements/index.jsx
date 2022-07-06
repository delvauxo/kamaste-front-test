import axios from 'axios';
import { useEffect, useState } from 'react';
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
            <li key={equipement.id}>
                <div>{equipement.nom}</div>
                <div>{equipement.description}</div>
            </li>
        )
    );

    return (
        <>
            <div className="slider-component border-effect-white-bt no-margin">
                <img className="bg-image" src={`${process.env.REACT_APP_BACK_URL}/components_bg/flower.jpg`} alt="background" />
                <PastilleSlider items={equipements} name="equipements" />
            </div>
            <ul>
                {equipementsJSX}
            </ul>
        </>
    );
};

export default EquipementsPage;