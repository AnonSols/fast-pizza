import { useLoaderData } from "react-router";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
import { menu } from "../../types";

function Menu() {
  const pizzas = useLoaderData() as menu["menu"];
  return (
    <>
      <ul>
        {" "}
        {pizzas.map((pizza) => {
          return <MenuItem pizza={pizza} key={pizza.id} />;
        })}
      </ul>
    </>
  );
}

export async function loader() {
  const menu = await getMenu();

  return menu;
}
export default Menu;
