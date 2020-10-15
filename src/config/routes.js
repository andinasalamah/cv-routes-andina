import { Certification, Home, Profile } from '../pages';

const routes = [
    {
    path: '/certification',
    component: Certification,
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