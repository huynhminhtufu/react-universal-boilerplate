import React from "react";
import Loadable from "react-loadable";

import withAuthRouteComponent from "./shared/auth/withAuthRouteComponent";

import Loading from "./modules/loading/Loading";

const withAuth = withAuthRouteComponent("/login");

const Home = Loadable({
    loader: () =>
        import(/* webpackChunkName: "home" */ "../app/modules/home/Home"),
    loading: () => <Loading />,
    modules: ["../app/modules/home/Home"],
    webpack: () => [require.resolveWeak("../app/modules/home/Home")],
});

const Login = Loadable({
    loader: () =>
        import(/* webpackChunkName: "login" */ "../app/modules/login/Login"),
    loading: () => <Loading />,
    modules: ["../app/modules/login/Login"],
    webpack: () => [require.resolveWeak("../app/modules/login/Login")],
});

const AdminCP = Loadable({
    loader: () =>
        import(/* webpackChunkName: "admincp" */ "../app/modules/admincp/AdminCP"),
    loading: () => <Loading />,
    modules: ["../app/modules/admincp/AdminCP"],
    webpack: () => [require.resolveWeak("../app/modules/admincp/AdminCP")],
});

export default [
    {
        path     : "/",
        title    : "Home",
        component: Home,
    },
    {
        path     : "/login",
        title    : "Login",
        component: Login,
    },
    {
        path     : "/admin-cp",
        title    : "Admin CP",
        component: withAuth(AdminCP),
    },
];
