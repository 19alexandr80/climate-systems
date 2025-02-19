import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ element: Element, redirecrTo = "/" }) => {
  const isLoggedIn = useSelector((state) => state.contacts.isLoggedIn);
  return !isLoggedIn ? <Navigate to={redirecrTo} /> : <Element />;
};

export const PrivateRouteAdmin = ({ element: Element, redirecrTo = "/" }) => {
  const isLoggedIn = useSelector((state) => state.contacts.isLoggedIn);
  const subscription = useSelector((state) => state.contacts.user.subscription);
  // if (!isLoggedIn || subscription !== "superadmin") {
  //   return <Navigate to={redirecrTo} />;
  // }
  // return <Element />;

  return !isLoggedIn || subscription !== "superadmin" ? (
    <Navigate to={redirecrTo} />
  ) : (
    <Element />
  );
};
