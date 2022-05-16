import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRedirectNotAdmin } from '../../../hooks/redirect-hook';
import EquipementForm from './form';

const AdminEquipementEdit = () => {
    // Redirect to home page if not connected as admin.
    useRedirectNotAdmin();

    const { id } = useParams();
    const [item, setItem] = useState();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACK_URL}/api/body/equipement/${id}`)
            .then(
                ({ data }) => { setItem(data.result); }
            );
    }, [id]);

    return (
        <>
            <h2>Modifier</h2>
            <EquipementForm edit={true} item={item} />
        </>
    );
};

export default AdminEquipementEdit;