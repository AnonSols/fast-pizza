import { ReactNode } from "react";
import { Link } from "react-router-dom";

const Button = ({
  children,
  to,
  type,
  disabled,
}: {
  children: ReactNode;
  disabled?: boolean;
  to?: string;
  type: "primary" | "small";
}) => {
  const base =
    " bg-yellow-400 uppercase font-semibold mt-4 tracking-wide rounded-full hover:bg-yellow-300 text-stone-800 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-300 ";

  const styles = {
    primary: base + "py-3 px-4 md:px-6 md:py-4",
    small: base + "py-4 px-2 md:px-5 md:py-2.5 text-xs",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
};

export default Button;
