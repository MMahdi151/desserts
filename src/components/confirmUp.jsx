import { XCircleIcon, TreePineIcon } from "lucide-react";
import React, { useState } from "react";

import { useCart } from "../context/cartContext";
import { CircleCheckIcon } from "lucide-react";

export default function ConfirmUp() {
  const { cart, getTotalPrice, confirm } = useCart();

  return (
    <>
      {confirm && (
        <form className="w-screen h-screen flex flex-col place-content-center fixed top-0 left-0 bg-black bg-opacity-50">
          <div className="bg-white p-12 rounded-xl flex flex-col gap-4 w-2/5 mx-auto">
            <CircleCheckIcon
              className="w-12 h-12 text-lime-700"
              strokeWidth={1.6}
            />
            <h1 className="text-4xl font-bold">Order Confirmed</h1>
            <p className="text-rose-400">We hope you enjoy your food.</p>
            <div className="bg-rose-50 flex flex-col p-8 gap-6 rounded-md">
              <div className="flex flex-col columns-2 gap-4">
                {cart.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 pb-4 border-b-[1px] border-rose-400"
                  >
                    <img
                      src={item.image.thumbnail}
                      className="block w-16 rounded"
                    ></img>
                    <div className="text">
                      <p className="font-semibold mb-1">{item.name}</p>
                      <div className="quantity flex gap-4">
                        <p className="font-semibold text-rose-700">
                          {item.quantity}x
                        </p>
                        <p className="text-rose-400">
                          @{parseFloat(item.price).toFixed(2)}`
                        </p>
                      </div>
                    </div>
                    <p className="font-semibold ml-auto">
                      ${parseFloat(item.quantity * item.price).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between py-2">
                <p>Order Total</p>
                <p className="font-bold text-2xl">
                  ${getTotalPrice.toFixed(2)}
                </p>
              </div>
            </div>
            <button
              className="bg-rose-700 py-3 text-white rounded-full text-lg"
              type="submit"
            >
              Set New order
            </button>
          </div>
        </form>
      )}
    </>
  );
}
