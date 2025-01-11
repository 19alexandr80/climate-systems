import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { Layout } from "./layout";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import Login from "./Login/Login";
import Register from "./Register/Register";

const Main = lazy(() => import("./Main/Main"));
const Projects = lazy(() => import("../components/Projects/Projects"));
const Admin = lazy(() => import("../components/Admin/Admin"));
const Services = lazy(() => import("../components/Services/Services"));
const Contacts = lazy(() => import("../components/Contacts/Contacts"));

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
        <Route path="dmn" element={<Admin />} />
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
      </Route>
    </Routes>
  );
}

export default App;
