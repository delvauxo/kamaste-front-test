import axios from 'axios';
import { useEffect, useState } from 'react';

const ServicesPage = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACK_URL}/api/body/service`)
            .then(
                ({ data }) => { setServices(data.result.rows); }
            );
    }, []);

    const servicesJSX = services.map(
        service => (
            <li key={service.id}>
                <div>{service.nom}</div>
                <div>{service.description}</div>
            </li>
        )
    );

    return (
        <>
            <ul>
                {servicesJSX}
            </ul>
        </>
    );
};

export default ServicesPage;