import {
  MinusCircleIcon,
  PlusCircleIcon,
  ShoppingCartIcon,
} from "lucide-react";
import Axios from "axios";
import { useEffect, useState } from "react";

export default function DessertItem() {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    Axios.get("/data.json").then((res) => {
      setInfo(res.data);
    });
  }, []);

  return (
    <>
      {info.map((item, index) => (
        <div key={index} className="flex flex-col">
          <img src={item.image.desktop} className="rounded-lg w-full" />
          <div className="bg-white w-2/3 -translate-y-1/2 mt rounded-full border-[1px] border-rose-900 font-semibold self-center overflow-hidden">
            {/* <button className="w-full p-2">
              <ShoppingCartIcon
                className="w-5 h-5 mr-2 inline mb-0.5 text-rose-700"
                strokeWidth={1.6}
              />
              Add to Cart
            </button> */}
            <div className="w-full p-2 flex items-center justify-between bg-rose-700 text-rose-50">
              <button className="">
                <MinusCircleIcon className="w-5 h-5 " strokeWidth={1.6} />
              </button>
              <p>1</p>
              <button className="">
                <PlusCircleIcon className="w-5 h-5 " strokeWidth={1.6} />
              </button>
            </div>
          </div>
          <p className="text-rose-400">{item.category}</p>
          <p className="text-lg font-semibold">{item.name}</p>
          <p className="text-lg font-semibold text-rose-700">${item.price}</p>
        </div>
      ))}
    </>
  );
}
