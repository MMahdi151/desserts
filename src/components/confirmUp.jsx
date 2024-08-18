import React from "react";
import { useCart } from "../context/cartContext";
import { CircleCheckIcon } from "lucide-react";

export default function ConfirmUp() {
  const { cart, getTotalPrice, confirm, setConfirm } = useCart();

  return (
    <>
      {confirm && (
        <form
          className="w-screen h-screen flex flex-col place-content-end sm:place-content-center fixed top-0 left-0 bg-black bg-opacity-50"
          onDoubleClick={() => setConfirm(false)}
        >
          <div className="bg-white py-12 px-6 md:px-12 rounded-tr-xl rounded-tl-xl sm:rounded-xl flex flex-col gap-8 w-full sm:w-2/3 md:w-3/5 xl:w-2/5 mx-auto">
            <CircleCheckIcon
              className="w-12 h-12 text-green-600"
              strokeWidth={1.6}
            />
            <div>
              <h1 className="text-5xl font-bold mb-2">Order Confirmed</h1>
              <p className="text-rose-400">We hope you enjoy your food!</p>
            </div>
            <div className="bg-rose-50 flex flex-col p-6 gap-6 rounded-md group">
              <div className="flex flex-col gap-4 max-h-[15rem] overflow-y-scroll pr-4 -mr-4">
                {cart.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between pb-4 gap-4 border-b-[1px] border-rose-400"
                  >
                    <img
                      src={item.image.thumbnail}
                      className="block w-12 rounded"
                    ></img>
                    <div className="text">
                      <p className="font-semibold mb-1 line-clamp-1">
                        {item.name}
                      </p>
                      <div className="quantity flex gap-4">
                        <p className="font-semibold text-rose-700">
                          {item.quantity}x
                        </p>
                        <p className="text-rose-400">
                          @{parseFloat(item.price).toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <p className="font-semibold ml-auto">
                      ${parseFloat(item.quantity * item.price).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between">
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
              Start New order
            </button>
          </div>
        </form>
      )}
    </>
  );
}
