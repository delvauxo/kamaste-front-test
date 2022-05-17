import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MomentForm from './form';

const AdminMomentEdit = () => {

    const { id } = useParams();
    const [item, setItem] = useState();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACK_URL}/api/body/moment/${id}`)
            .then(
                ({ data }) => { setItem(data.result); }
            );
    }, [id]);

    return (
        <>
            <h2>Modifier</h2>
            <MomentForm edit={true} item={item} />
        </>
    );
};

export default AdminMomentEdit;