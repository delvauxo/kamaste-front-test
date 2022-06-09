import { Link } from 'react-router-dom';
import { useRedirectNotAdmin } from '../../hooks/redirect-hook';

const AdminPage = () => {
    // Redirect to home page if not connected as admin.
    useRedirectNotAdmin();

    return (
        <>
            <h1>Admin Dashboard</h1>
            <ul>
                <li>
                    <Link to={'espaces'}>Espaces</Link>
                </li>
                <li>
                    <Link to={'moments'}>Moments</Link>
                </li>
                <li>
                    <Link to={'equipements'}>Equipements</Link>
                </li>
                <li>
                    <Link to={'services'}>Services</Link>
                </li>
                <li>
                    <Link to={'temoignages'}>Témoignages</Link>
                </li>
            </ul>
        </>
    );
};

export default AdminPage;