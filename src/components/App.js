import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { Layout } from "./layout";

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
        <Route path="projects" element={<Projects />} />
        <Route path="dmn" element={<Admin />} />
        <Route path="services" element={<Services />}>
          <Route path="aircond" element={<Aircond />} />
          <Route path="ventilation" element={<Ventilation />} />
        </Route>
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
}

export default App;
