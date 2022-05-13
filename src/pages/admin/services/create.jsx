import { useRedirectNotAdmin } from '../../../hooks/redirect-hook';
import ServiceForm from './form';

const AdminServiceCreate = () => {
    // Redirect to home page if not connected as admin.
    useRedirectNotAdmin();

    return (
        <>
            <h2>Ajouter un nouveau service</h2>
            <ServiceForm />
        </>
    );
};

export default AdminServiceCreate;