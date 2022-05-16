import { useRedirectNotAdmin } from '../../../hooks/redirect-hook';
import EquipementForm from './form';

const AdminEquipementCreate = () => {
    // Redirect to home page if not connected as admin.
    useRedirectNotAdmin();

    return (
        <>
            <h2>Ajouter un équipement</h2>
            <EquipementForm edit={false} />
        </>
    );
};

export default AdminEquipementCreate;