import { Outlet, useNavigation } from "react-router";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] gap-8">
      {isLoading && <Loader />}
      <Header />

      <main className="overflow-scroll w-20 bg-red-500">
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
};

export default AppLayout;
