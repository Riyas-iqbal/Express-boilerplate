const router = require('express').Router()
const authRoute = require('./auth.route')

const defaultRoutes = [
    {
        path: '/auth',
        route: authRoute,
    },
    // {
    //     path: '/users',
    //     route: userRoute,
    // },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router