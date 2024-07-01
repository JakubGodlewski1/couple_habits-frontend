import {RouteObject} from "react-router-dom";
import GlobalLayout from "../layouts/globalLayout";
import Error from "../pages/error";
import SignIn from "../pages/signIn";
import SignUp from "../pages/signUp";
import TabBarLayout from "../layouts/tabBarLayout";
import Dashboard from "../pages/dashboard";
import Settings from "../pages/settings";
import Ideas from "../pages/ideas";
import Hero from "../pages/hero";
import NoTabBarLayout from "../layouts/noTabBarLayout";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <GlobalLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <NoTabBarLayout/>,
                children: [
                    {
                        path: "/",
                        element: <Hero/>
                    },
                    {
                        path: "/sign-in",
                        element: <SignIn/>
                    },
                    {
                        path: "/sign-up",
                        element: <SignUp/>
                    },
                ]
            },
            {
                path: "/",
                element: <TabBarLayout/>,
                children: [
                    {
                        path: "/dashboard",
                        element: <Dashboard/>
                    },
                    {
                        path: "/settings",
                        element: <Settings/>
                    },
                    {
                        path: "/ideas",
                        element: <Ideas/>
                    }
                ]
            }
        ]
    }
]