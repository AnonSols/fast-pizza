import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import { State } from "../store";
import Button from "./Button";

function Home() {
  const userName = useSelector((state: State) => state.user.userName);
  return (
    <div className="my-10 text-center sm:my-16 px-4 ">
      <h1 className="text-xl font-bold mb-8  md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {userName === "" ? (
        <CreateUser />
      ) : (
        <Button type="primary" to="/menu">
          Continue ordering, {userName}{" "}
        </Button>
      )}
    </div>
  );
}

export default Home;
