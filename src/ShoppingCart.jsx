import { useState } from "react";

function ShoppingCart() {
  // state
  const [cart, setCart] = useState([]);
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  // add item
  const addItem = () => {
    const newItem = {
      id: Date.now(),
      name: itemName,
      quantity: Number(quantity),
      price: Number(price),
    };

    setCart([...cart, newItem]);

    // reset inputs
    setItemName("");
    setQuantity("");
    setPrice("");
  };

  // remove item
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>

      {/* inputs */}
      <input
        type="text"
        placeholder="Item Name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <br />
      <br />

      <button onClick={addItem}>Add Item</button>

      {/* cart list */}
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            Name: {item.name} <br />
            Quantity: {item.quantity} <br />
            Price: {item.price} <br />
            Total: {item.quantity * item.price} <br />
            <button onClick={() => removeItem(item.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;
