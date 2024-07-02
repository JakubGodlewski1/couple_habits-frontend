import {createMemoryRouter, RouterProvider} from "react-router-dom";
import {routes} from "../../utils/routes.tsx";
import {render} from "@testing-library/react";

const renderWithReactRouter = (initialUrl: string) => {
    const router = createMemoryRouter(routes, {initialEntries: [initialUrl]});
    render(<RouterProvider router={router}/>);
};

export default renderWithReactRouter;