import {createMemoryRouter, RouterProvider} from "react-router-dom";
import {routes} from "../../utils/routes.tsx";
import {render} from "@testing-library/react";
import {JSXElementConstructor, ReactNode} from "react";

const renderWithReactRouter = (initialUrl: string, wrapper?: JSXElementConstructor<{ children: ReactNode }>) => {
    const router = createMemoryRouter(routes, {initialEntries: [initialUrl]});
    render(<RouterProvider router={router}/>, {wrapper});
};

export default renderWithReactRouter;