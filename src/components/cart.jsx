import { XCircleIcon, TreePineIcon } from "lucide-react";

export default function Cart() {
  return (
    <section className="bg-sky-500 flex flex-col p-8 gap-4 self-start rounded-md">
      <h2 className="text-2xl font-bold self-start">Your Cart (0)</h2>
      {/* <img
        src="/images/illustration-empty-cart.svg"
        className="block self-center"
      ></img>
      <p className="self-center">Your added items will appear here</p> */}
      <div className="flex items-center justify-between pb-4 border-b-[1px] border-black">
        <div className="text">
          <p className="font-semibold mb-1">Classic Tirmisu</p>
          <div className="quantity flex gap-4">
            <p className="font-semibold">2x</p>
            <p>@5.50</p>
            <p className="font-semibold">$11.00</p>
          </div>
        </div>
        <XCircleIcon strokeWidth={1.6} />
      </div>
      <div className="flex items-center justify-between">
        <p>Order Total</p>
        <p className="font-bold text-2xl">$44.00</p>
      </div>
      <div className="flex gap-2 py-2 bg-red-200 justify-center rounded-md">
        <TreePineIcon strokeWidth={1.6} className="text-lime-700" />
        This is a<span className="font-semibold">carbon-neutral</span>delivery
      </div>
      <button className="bg-red-700 py-3 text-white rounded-full text-md">
        Confirm Order
      </button>
    </section>
  );
}
