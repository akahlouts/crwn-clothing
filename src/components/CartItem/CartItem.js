import { memo } from "react";

import { CartItemContainer, ItemDetails } from "./CartItem.styles";

const CartItem = memo(({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img
        style={{ width: "30%", marginBottom: "7.5px" }}
        src={imageUrl}
        alt={name}
      />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
});

export default CartItem;
