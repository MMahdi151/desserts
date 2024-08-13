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
          <div className="bg-white p-2 w-2/3 -translate-y-1/2 mt rounded-full border-[1px] border-black font-semibold self-center">
            {/* <button className="w-full">
              <ShoppingCartIcon
                className="w-5 h-5 mr-2 inline mb-0.5"
                strokeWidth={1.8}
              />
              Add to Cart
            </button> */}
            <div className="w-full flex justify-between">
              <button className="">
                <MinusCircleIcon className="w-5 h-5 " />
              </button>
              <p>1</p>
              <button className="">
                <PlusCircleIcon className="w-5 h-5 " />
              </button>
            </div>
          </div>
          <p className="">{item.category}</p>
          <p className="text-lg font-semibold">{item.name}</p>
          <p className="text-md font-semibold">${item.price}</p>
        </div>
      ))}
    </>
  );
}
