export default [
    {
        name: 'Home',
        path: 'home',
        meta: {
            title: 'Home page',
        },
        component: () => import('../views/Home.vue'),
    },
];
