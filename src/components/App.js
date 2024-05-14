import Header from "./Header/Header";
import Main from "./Main/Main";
import Projects from "components/Projects/Projects";
import Services from "components/Services/Services";
import Contacts from "components/Contacts/Contacts";
import Footer from "./Footer/Footer";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <nav>
        <Header />
      </nav>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
