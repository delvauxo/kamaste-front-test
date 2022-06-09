import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRedirectNotAdmin } from '../../../hooks/redirect-hook';
import TemoignageForm from './form';

const AdminTemoignageEdit = () => {
    // Redirect to home page if not connected as admin.
    useRedirectNotAdmin();


    const { id } = useParams();
    const [temoignage, setTemoignage] = useState();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACK_URL}/api/body/temoignage/${id}`)
            .then(
                ({ data }) => { setTemoignage(data.result); }
            );
    }, [id]);

    console.log(temoignage);

    return (
        <>
            <h2>Modifier</h2>
            <TemoignageForm edit={true} item={temoignage} />
        </>
    );
};

export default AdminTemoignageEdit;