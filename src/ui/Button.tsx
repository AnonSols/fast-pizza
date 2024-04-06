import { ReactNode } from "react";
import { Link } from "react-router-dom";

const Button = ({
  children,
  to,
  type,
  disabled,
  action
}: {
  children: ReactNode;
  disabled?: boolean;
  to?: string;
  type: "primary" | "small" | "secondary";
  action?: () => void;
}) => {
  const base =
    " bg-yellow-400 uppercase tracking-wide rounded-full font-semibold hover:bg-yellow-300 text-stone-800 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-300 text-sm ";

  const styles = {
    primary: base + "py-3 px-4 md:px-6 md:py-4 mb-4",
    small: base + "py-2 px-3 md:px-5 md:py-2.5 font-bold text-xs",
    secondary:
      "border text-sm  border-stone-300 rounded-full font-semibold px-4 py-2.5 focus:bg-stone-200 text-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 focus:border-none tracking-wide uppercase md:py-3.5 md:px-6 hover:bg-stone-300 hover:text-stone-800 focus:text-stone-800 my-6",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );


    function handleEvent() {
      action?action():null
    }
  return (
    <button disabled={disabled} onClick = {handleEvent}className={styles[type]}>
      {children}
    </button>
  );
};

export default Button;
