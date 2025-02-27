import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const RestrictedRoute = ({ element: Element, redirecrTo = "/" }) => {
  const isLoggedIn = useSelector((state) => state.contacts.isLoggedIn);
  return isLoggedIn ? <Navigate to={redirecrTo} /> : <Element />;
};
