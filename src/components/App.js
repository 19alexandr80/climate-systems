import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { Layout } from "./layout";
import { PrivateRoute, PrivateRouteAdmin } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import Login from "./Login/Login";
import Register from "./Register/Register";
import RegisterUser from "./Register/RegisterUser";
import Magazine from "./Projects/Magazine/Magazine";

const Main = lazy(() => import("./Main/Main"));
const Projects = lazy(() => import("../components/Projects/Projects"));
const Admin = lazy(() => import("../components/Admin/Admin"));
const Services = lazy(() => import("../components/Services/Services"));
const Contacts = lazy(() => import("../components/Contacts/Contacts"));
const ObjectPage = lazy(() =>
  import("../components/Projects/ObjectPage/ObjectPage")
);
// UserPage
const UserPage = lazy(() => import("../components/UserPage/UserPage"));
const Aircond = lazy(() => import("../components/Services/Aircond"));
const Ventilation = lazy(() => import("../components/Services/Ventilation"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route
          path="projects"
          element={<PrivateRoute element={Projects} redirecrTo="/" />}
        />
        <Route
          path="projects/:objectName"
          element={<PrivateRoute element={ObjectPage} redirecrTo="/" />}
        >
          <Route path="magazine" element={<Magazine />} />
        </Route>
        <Route
          path="dmn"
          element={<PrivateRouteAdmin element={Admin} redirecrTo="/projects" />}
        />
        <Route
          path="userPage"
          element={<PrivateRoute element={UserPage} redirecrTo="/" />}
        />
        <Route path="services" element={<Services />}>
          <Route path="aircond" element={<Aircond />} />
          <Route path="ventilation" element={<Ventilation />} />
        </Route>
        <Route path="contacts" element={<Contacts />} />
        <Route
          path="login"
          element={<RestrictedRoute element={Login} redirecrTo="/projects" />}
        />
        <Route
          path="register"
          element={<PrivateRoute element={Register} redirecrTo="/projects" />}
        />
        <Route
          path="register_user"
          element={
            <PrivateRoute element={RegisterUser} redirecrTo="/projects" />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
