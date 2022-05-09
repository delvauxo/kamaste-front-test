import { useRedirectNotAdmin } from '../../../hooks/redirect-hook';
import EspaceForm from './form';

const AdminEspaceCreate = () => {
    // Redirect to home page if not connected as admin.
    useRedirectNotAdmin();

    return (
        <>
            <h2>Ajouter</h2>
            <EspaceForm edit={false} />
        </>
    );
};

export default AdminEspaceCreate;