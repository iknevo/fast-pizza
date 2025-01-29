import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

export default function UpdateQuantity({ id, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <Button type="rounded" onClick={() => dispatch(decreaseItemQuantity(id))}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button type="rounded" onClick={() => dispatch(increaseItemQuantity(id))}>
        +
      </Button>
    </div>
  );
}
