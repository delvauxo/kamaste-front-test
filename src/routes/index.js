// Admin.
import AdminPage from '../pages/admin';
// Espaces.
import AdminEspaces from '../pages/admin/espaces';
import AdminEspaceCreate from '../pages/admin/espaces/create';
import AdminEspaceEdit from '../pages/admin/espaces/edit';
// Moments.
import AdminMoments from '../pages/admin/moments';
import AdminMomentCreate from '../pages/admin/moments/create';
import AdminMomentEdit from '../pages/admin/moments/edit';
// Equipements.
import AdminEquipements from '../pages/admin/equipements';
import AdminEquipementCreate from '../pages/admin/equipements/create';
import AdminEquipementEdit from '../pages/admin/equipements/edit';
// Services.
import AdminServices from '../pages/admin/services';
import AdminServiceCreate from '../pages/admin/services/create';
import AdminServiceEdit from '../pages/admin/services/edit';
// Login.
import LoginPage from '../pages/login';
import RegisterPage from '../pages/register';
// Public.
import HomePage from '../pages/home';
import BodyPage from '../pages/body';
import AboutPage from '../pages/about';
import MomentsPage from '../pages/moments';
import EquipementsPage from '../pages/equipements';
import ServicesPage from '../pages/services';
import Error404 from '../pages/errors/404';

export const appRoute = [
    { path: '', element: <HomePage /> },
    { path: 'register', element: <RegisterPage /> },
    { path: 'login', element: <LoginPage /> },
    {
        path: 'admin',
        children: [
            { path: '', element: <AdminPage /> },
            {
                path: 'moments',
                children: [
                    { index: true, element: <AdminMoments /> },
                    { path: 'nouveau', element: <AdminMomentCreate /> },
                    { path: ':id', element: <AdminMomentEdit /> }
                ]
            },
            {
                path: 'espaces',
                children: [
                    { index: true, element: <AdminEspaces /> },
                    { path: 'nouveau', element: <AdminEspaceCreate /> },
                    { path: ':id', element: <AdminEspaceEdit /> }
                ]
            },
            {
                path: 'services',
                children: [
                    { index: true, element: <AdminServices /> },
                    { path: 'nouveau', element: <AdminServiceCreate /> },
                    { path: ':id', element: <AdminServiceEdit /> }
                ]
            },
            {
                path: 'equipements',
                children: [
                    { index: true, element: <AdminEquipements /> },
                    { path: 'nouveau', element: <AdminEquipementCreate /> },
                    { path: ':id', element: <AdminEquipementEdit /> }
                ]
            }
        ]
    },
    {
        path: 'body',
        children: [
            { index: true, element: <BodyPage /> },
            { path: 'moments', element: <MomentsPage /> },
            { path: 'equipements', element: <EquipementsPage /> },
            { path: 'services', element: <ServicesPage /> },
            { path: 'about', element: <AboutPage /> },
        ]
    },
    { path: '*', element: <Error404 /> },
];