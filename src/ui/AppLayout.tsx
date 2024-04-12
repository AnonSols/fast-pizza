import { Outlet, useNavigation } from "react-router";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-dscreen grid-rows-[auto_1fr_auto] ">
      {isLoading && <Loader />}
      <Header />

      <main className="overflow-y-scroll px-4">
        <div className="max-w-xl mx-auto sm:max-w-2xl md:max-w-3xl">
          <Outlet />
        </div>
      </main>

      <CartOverview />
    </div>
  );
};

export default AppLayout;
