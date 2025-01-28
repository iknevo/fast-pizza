/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import Button from "./../../ui/Button.jsx";
import { addItem } from "../cart/cartSlice.js";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.cart);

  function handleAddToCart() {
    const newPizzaItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    if (cart.map((item) => item.pizzaId).includes(newPizzaItem.pizzaId)) return;
    dispatch(addItem(newPizzaItem));
  }

  return (
    <li className="flex gap-4 pt-2 pb-0 md:pb-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="mb-2 flex grow flex-col pt-0.5 md:mb-0">
        <p className="font-medium">{name}</p>
        <p className="text-sm text-stone-500 capitalize italic">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between text-sm">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="font-medium text-stone-500 uppercase">Sold out</p>
          )}
          {!soldOut && (
            <Button type="small" onClick={handleAddToCart}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
