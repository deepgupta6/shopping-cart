import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getItems,
  createCart,
  createOrder,
  getCarts,
  getOrders,
} from "../api";
import { toast } from "sonner";
import "../styles.css";

const Items = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const res = await getItems();
    setItems(res.data);
  };

  const addToCart = async (itemId) => {
    try {
      await createCart({ item_id: itemId });
      toast.success("Item added to cart");
    } catch (err) {
      toast.error("Failed to add item to cart");
    }
  };

  const checkout = async () => {
    try {
      await createOrder({});
      toast.success("Order successful");
    } catch (err) {
      toast.error("Checkout failed");
    }
  };

  const showCart = async () => {
    try {
      const res = await getCarts();
      alert(JSON.stringify(res.data));
    } catch (err) {
      toast.error("Failed to fetch cart");
    }
  };

  const showOrders = async () => {
    try {
      const res = await getOrders();
      alert(res.data.map((o) => o.ID).join(", "));
    } catch (err) {
      toast.error("Failed to fetch orders");
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:8080/logout", {
        method: "POST",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      localStorage.removeItem("token");
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (err) {
      toast.error("Logout failed");
    }
  };

  return (
    <div className="items-container">
      <div className="actions">
        <button onClick={checkout}>Checkout</button>
        <button onClick={showCart}>Cart</button>
        <button onClick={showOrders}>Order History</button>
        <button onClick={handleLogout}>Logout</button> {/* ✅ LOGOUT */}
      </div>
      <h2>Items</h2>
      <div className="items-grid">
        {items.map((item) => (
          <div
            key={item.ID}
            className="item-card"
            onClick={() => addToCart(item.ID)}
          >
            <h4>{item.Name}</h4>
            <p>{item.Status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
