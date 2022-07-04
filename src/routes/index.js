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
// Temoignages.
import AdminTemoignages from '../pages/admin/temoignages';
import AdminTemoignageCreate from '../pages/admin/temoignages/create';
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
import AdminTemoignageEdit from '../pages/admin/temoignages/edit';
import { Container } from '@mui/material';

export const appRoute = [
    { path: '', element: <HomePage /> },
    { path: 'register', element: <RegisterPage /> },
    { path: 'login', element: <LoginPage /> },
    {
        path: 'admin',
        children: [
            { path: '', element: <Container><AdminPage /></Container> },
            {
                path: 'moments',
                children: [
                    { index: true, element: <Container><AdminMoments /></Container> },
                    { path: 'nouveau', element: <Container><AdminMomentCreate /></Container> },
                    { path: ':id', element: <Container><AdminMomentEdit /></Container> }
                ]
            },
            {
                path: 'espaces',
                children: [
                    { index: true, element: <Container><AdminEspaces /></Container> },
                    { path: 'nouveau', element: <Container><AdminEspaceCreate /></Container> },
                    { path: ':id', element: <Container><AdminEspaceEdit /></Container> }
                ]
            },
            {
                path: 'services',
                children: [
                    { index: true, element: <Container><AdminServices /></Container> },
                    { path: 'nouveau', element: <Container><AdminServiceCreate /></Container> },
                    { path: ':id', element: <Container><AdminServiceEdit /></Container> }
                ]
            },
            {
                path: 'equipements',
                children: [
                    { index: true, element: <Container><AdminEquipements /></Container> },
                    { path: 'nouveau', element: <Container><AdminEquipementCreate /></Container> },
                    { path: ':id', element: <Container><AdminEquipementEdit /></Container> }
                ]
            },
            {
                path: 'temoignages',
                children: [
                    { index: true, element: <Container><AdminTemoignages /></Container> },
                    { path: 'nouveau', element: <Container><AdminTemoignageCreate /></Container> },
                    { path: ':id', element: <Container><AdminTemoignageEdit /></Container> }
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