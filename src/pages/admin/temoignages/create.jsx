import { useRedirectNotAdmin } from '../../../hooks/redirect-hook';
import TemoignageForm from './form';

const AdminTemoignageCreate = () => {
    // Redirect to home page if not connected as admin.
    useRedirectNotAdmin();

    return (
        <>
            <h2>Ajouter un témoignage</h2>
            <TemoignageForm edit={false} />
        </>
    );
};

export default AdminTemoignageCreate;