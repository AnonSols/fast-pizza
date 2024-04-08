import { bindActionCreators } from "@reduxjs/toolkit";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { cartCreators } from "../../types";

type buttonProp = {
  id: number;
};

const DeleteButton = ({ id }: buttonProp) => {
  const dispatch = useDispatch();
  const { removeItem } = bindActionCreators(cartCreators, dispatch);
  return (
    <Button type="small" action={() => removeItem(id)}>
      Delete
    </Button>
  );
};

export default DeleteButton;
