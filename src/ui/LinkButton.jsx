/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
// console.log(cart);

export default function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const className =
    "cursor-pointer text-sm text-blue-500 hover:text-blue-600 hover:underline";
  if (to === "-1")
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  return (
    <Link to={to} className={className}>
      {children}
      <p className=""></p>
    </Link>
  );
}
