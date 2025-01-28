import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Button({ children, disabled = false, to, type }) {
  const baseStyles =
    "text-sm inline-block cursor-pointer rounded-full bg-yellow-400 font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed ";
  const styles = {
    primary: baseStyles + " px-4 py-3 md:px-6 md:py-4",
    secondary:
      "text-sm inline-block cursor-pointer rounded-full font-semibold tracking-wide text-stone-400 uppercase transition-colors duration-300 outline-2 outline-stone-300 px-4 py-3 md:px-6 md:py-4 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:ring focus:ring-stone-800 focus:text-stone-800 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed ",
    small: baseStyles + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
