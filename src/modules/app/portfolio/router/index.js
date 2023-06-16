export default [
    {
        name: 'Portfolio',
        path: 'portfolio',
        meta: {
            title: 'Portfolio page',
        },
        component: () => import('../views/Portfolio.vue'),
    },
    {
        name: 'ForSale',
        path: 'portfolio/forsale',
        meta: {
            title: 'ForSale page',
        },
        component: () => import('../components/ForSale.vue'),
    },
];
