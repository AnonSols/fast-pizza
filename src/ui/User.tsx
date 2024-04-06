import { useSelector } from "react-redux";
import { State } from "../store";

const User = () => {
  const username = useSelector((state: State) => state.user.userName);

  if (!username) return null;
  return (
    <div className="font-semibold text-xl hidden md:block">{username}</div>
  );
};

export default User;
