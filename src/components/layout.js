import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Modal from "./Modal/Modal";
import { Loader } from "./Loader/Loader";

export const Layout = () => {
  const modals = useSelector((state) => state.objj.modals);

  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      {modals && <Modal />}
    </>
  );
};
