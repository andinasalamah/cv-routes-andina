import { Certifications, Home, Profile } from '../pages';

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
    path: '/',
    component: Home,
    }
];

export default routes;