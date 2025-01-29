/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { removeItem } from "./cartSlice";

export default function DeleteItem({ id }) {
  const dispatch = useDispatch();

  function handleDeleteItem() {
    dispatch(removeItem(id));
  }
  return (
    <Button type="small" onClick={handleDeleteItem}>
      delete
    </Button>
  );
}
