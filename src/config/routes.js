import { Certifications, Home, Profile, InfoContact } from '../pages';


const routes = [
    {
        path: '/certifications',
        component: Certifications,
    },
    {
        path: '/profile',
        component: Profile,
    },
    {
        path: '/infoContact',
        component: InfoContact,
    },
    {
        path: '/',
        component: Home,
    }
];

export default routes;