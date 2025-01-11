import { useState, Suspense } from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Modal from "./Modal/Modal";
import { Loader } from "./Loader/Loader";

export const Layout = () => {
  const [modal, setModal] = useState("false");

  const onClose = () => {
    setModal(() => "false");
  };

  const onOpen = () => {
    setModal(() => "true");
  };
  return (
    <>
      <Header onOpen={onOpen} />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer onOpen={onOpen} />
      {modal === "true" && <Modal onClose={onClose} />}
    </>
  );
};
