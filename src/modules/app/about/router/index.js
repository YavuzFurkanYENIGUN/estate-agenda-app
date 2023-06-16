export default [
    {
        name: 'About',
        path: 'about',
        meta: {
            title: 'About page',
        },
        component: () => import('../views/About.vue'),
    },
];
