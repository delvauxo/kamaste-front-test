import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ServiceForm from './form';
import { useRedirectNotAdmin } from '../../../hooks/redirect-hook';

const AdminServiceEdit = () => {

    useRedirectNotAdmin();

    // Get Id item to edit.
    const { id } = useParams();
    console.log(id);

    const [service, SetService] = useState();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACK_URL}/api/body/service/${id}`)
            .then(
                ({ data }) => { SetService(data.result); }
            );
    }, [id]);

    return (
        <>
            <h2>Modifier</h2>
            <ServiceForm item={service} edit={true} />
        </>
    );
};

export default AdminServiceEdit;