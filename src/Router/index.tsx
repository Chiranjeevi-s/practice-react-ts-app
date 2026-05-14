import { useRoutes } from "react-router-dom";
import Compo1 from "../Pages/Compo1";
import DefaultView from "./DefaultView";

const Router: React.FC = () => {
  const pages = [
    {
      element: <DefaultView />,
      children: [
        {
          path: "/",
          element: <Compo1 />,
        },
      ],
    },
  ];

  const links = useRoutes(pages);
  return <>{links}</>;
};

export default Router;
