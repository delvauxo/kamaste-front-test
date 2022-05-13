import AboutPage from '../pages/about';
import AdminPage from '../pages/admin';
// Espaces.
import AdminEspaces from '../pages/admin/espaces';
import AdminEspaceCreate from '../pages/admin/espaces/create';
import AdminEspaceEdit from '../pages/admin/espaces/edit';
// Services.
import AdminServices from '../pages/admin/services';
import AdminServiceCreate from '../pages/admin/services/create';
import AdminServiceEdit from '../pages/admin/services/edit';
// Others.
import BodyPage from '../pages/body';
import Error404 from '../pages/errors/404';
import HomePage from '../pages/home';
import LoginPage from '../pages/login';
import RegisterPage from '../pages/register';
// Examples (to delete).
import SubjectPage from '../pages/subjects';
import SubjectCreatePage from '../pages/subjects/create';
import SubjectShowPage from '../pages/subjects/show';


export const appRoute = [
    { path: '', element: <HomePage /> },
    {
        path: 'body', element: <BodyPage />
    },
    {
        path: 'subjects',
        children: [
            {
                index: true, element: <SubjectPage />
            },
            {
                path: ':id', element: <SubjectShowPage />
            },
            {
                path: 'create', element: <SubjectCreatePage />
            }
        ]
    },
    {
        path: 'about', element: <AboutPage />
    },
    {
        path: 'register', element: <RegisterPage />
    },
    {
        path: 'login', element: <LoginPage />
    },
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
            }
        ]
    },
    { path: '*', element: <Error404 /> },
];


