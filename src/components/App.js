// import Header from "./Header/Header";
// import Main from "./Main/Main";
// import Footer from "./Footer/Footer";

import { NavLink, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <nav>
        <NavLink to="/">home</NavLink>
        <NavLink to="/doogs">Peges</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<h2>home</h2>} />
        <Route path="/doogs" element={<h2>Peges</h2>} />
      </Routes>
    </div>
  );
}

export default App;
