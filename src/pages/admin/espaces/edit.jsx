import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRedirectNotAdmin } from '../../../hooks/redirect-hook';
import EspaceForm from './form';

const AdminEspaceEdit = () => {
    // Redirect to home page if not connected as admin.
    useRedirectNotAdmin();

    const { id } = useParams();

    const [espace, setEspace] = useState();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACK_URL}/api/espace/${id}`)
            .then(({ data }) => { setEspace(data.result); });
    }, []);

    return (
        <>
            <h1>Modifier</h1>
            <EspaceForm item={espace} edit={true} />
        </>
    );
};

export default AdminEspaceEdit;