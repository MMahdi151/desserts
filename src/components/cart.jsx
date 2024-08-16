import { XCircleIcon, TreePineIcon } from "lucide-react";
import React from "react";
import { useCart } from "../context/cartContext";

export default function Cart() {
  const { cart, setCart, getTotalQuantity, getTotalPrice } = useCart();

  return (
    <section className="bg-white flex flex-col p-8 gap-6 self-start rounded-md">
      <h2 className="text-2xl font-bold self-start text-rose-700">
        Your Cart ({getTotalQuantity()})
      </h2>
      {!cart.length ? (
        <>
          <img
            src="/images/illustration-empty-cart.svg"
            className="block self-center"
          ></img>
          <p className="self-center text-rose-500">
            Your added items will appear here
          </p>
        </>
      ) : (
        <>
          <div className="flex flex-col gap-4">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between pb-4 border-b-[1px] border-rose-400"
              >
                <div className="text">
                  <p className="font-semibold mb-1">{item.name}</p>
                  <div className="quantity flex gap-4">
                    <p className="font-semibold text-rose-700">
                      {item.quantity}x
                    </p>
                    <p className="text-rose-400">
                      @{parseFloat(item.price).toFixed(2)}`
                    </p>
                    <p className="font-semibold text-rose-500">
                      ${parseFloat(item.quantity * item.price).toFixed(2)}
                    </p>
                  </div>
                </div>
                <XCircleIcon
                  strokeWidth={1.6}
                  className="w-5 h-5 text-rose-400"
                  onClick={() => {
                    setCart(
                      cart.filter((cartItem) => cartItem.name !== item.name)
                    );
                  }}
                />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between py-2">
            <p>Order Total</p>
            <p className="font-bold text-2xl">${getTotalPrice.toFixed(2)}</p>
          </div>
          <div className="flex gap-2 py-3 justify-center rounded-lg bg-rose-50">
            <TreePineIcon
              strokeWidth={1.6}
              className="text-green-600 w-5 h-5"
            />
            This is a<span className="font-semibold">carbon-neutral</span>
            delivery
          </div>
          <button className="bg-rose-700 py-3 text-white rounded-full text-lg">
            Confirm Order
          </button>
        </>
      )}
    </section>
  );
}
