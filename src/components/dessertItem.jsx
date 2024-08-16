import {
  MinusCircleIcon,
  PlusCircleIcon,
  ShoppingCartIcon,
} from "lucide-react";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useCart } from "../context/cartContext";

export default function DessertItem() {
  const [info, setInfo] = useState([]);
  const { addToCart, removeFromCart, cart } = useCart();

  useEffect(() => {
    Axios.get("/data.json").then((res) => {
      const updatedData = res.data.map((item) => {
        const foundItem = cart.find((cartItem) => cartItem.name === item.name);
        return foundItem ? { ...item, quantity: foundItem.quantity } : item;
      });
      setInfo(updatedData);
    });
  }, [cart]);

  return (
    <>
      {info.map((item, index) => (
        <div key={index} className="flex flex-col">
          <img
            src={item.image.desktop}
            className={`rounded-lg w-full ${
              item.quantity && "ring-2 ring-rose-700"
            }`}
          />
          <div className="bg-white w-2/3 -translate-y-1/2 rounded-full border-[1px] border-rose-900 font-semibold self-center overflow-hidden">
            {!item.quantity ? (
              <button className="w-full h-10" onClick={() => addToCart(item)}>
                <ShoppingCartIcon
                  className="w-5 h-5 mr-2 inline mb-0.5 text-rose-700"
                  strokeWidth={1.6}
                />
                Add to Cart
              </button>
            ) : (
              <div className="w-full h-10 px-3 flex items-center justify-between bg-rose-700 text-rose-50">
                <button className="">
                  <MinusCircleIcon
                    className="w-5 h-5 "
                    strokeWidth={1.6}
                    onClick={() => removeFromCart(item)}
                  />
                </button>
                <p className="font-semibold mb-0.5">{item.quantity}</p>
                <button className="">
                  <PlusCircleIcon
                    className="w-5 h-5 "
                    strokeWidth={1.6}
                    onClick={() => addToCart(item)}
                  />
                </button>
              </div>
            )}
          </div>
          <p className="text-rose-400">{item.category}</p>
          <p className="text-lg font-semibold">{item.name}</p>
          <p className="text-lg font-semibold text-rose-700">
            ${parseFloat(item.price).toFixed(2)}
          </p>
        </div>
      ))}
    </>
  );
}
