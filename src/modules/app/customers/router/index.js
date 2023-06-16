export default [
    {
        name: 'Customers',
        path: 'customers',
        meta: {
            title: 'Customers page',
        },
        component: () => import('../views/Customers.vue'),
    },
];
