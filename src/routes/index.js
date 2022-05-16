// Admin.
import AdminPage from '../pages/admin';
// Espaces.
import AdminEspaces from '../pages/admin/espaces';
import AdminEspaceCreate from '../pages/admin/espaces/create';
import AdminEspaceEdit from '../pages/admin/espaces/edit';
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
import BodyPage from '../pages/body';
import AboutPage from '../pages/about';
import Error404 from '../pages/errors/404';
import HomePage from '../pages/home';

export const appRouteBody = [
    { path: '', element: <HomePage /> },
    { path: 'register', element: <RegisterPage /> },
    { path: 'login', element: <LoginPage /> },
    {
        path: 'admin',
        children: [
            {
                path: '', element: <AdminPage />
            },
            {
                path: 'espaces',
                children: [
                    {
                        index: true, element: <AdminEspaces />
                    },
                    {
                        path: 'nouveau', element: <AdminEspaceCreate />
                    },
                    {
                        path: ':id', element: <AdminEspaceEdit />
                    }
                ]
            },
            {
                path: 'services',
                children: [
                    {
                        index: true, element: <AdminServices />
                    },
                    {
                        path: 'nouveau', element: <AdminServiceCreate />
                    },
                    {
                        path: ':id', element: <AdminServiceEdit />
                    }
                ]
            },
            {
                path: 'equipements',
                children: [
                    {
                        index: true, element: <AdminEquipements />
                    },
                    {
                        path: 'nouveau', element: <AdminEquipementCreate />
                    },
                    {
                        path: ':id', element: <AdminEquipementEdit />
                    }
                ]
            }
        ]
    },
    {
        path: 'body',
        children: [
            {
                index: true, element: <BodyPage />
            },
            {
                path: 'about', element: <AboutPage />
            },
        ]
    },
    { path: '*', element: <Error404 /> },
];