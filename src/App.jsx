import Desserts from "./components/desserts";
import Cart from "./components/cart";
import { CartProvider } from "./context/cartContext";
import { createPortal } from "react-dom";
import ConfirmUp from "./components/confirmUp";

function App() {
  return (
    <CartProvider>
      {createPortal(<ConfirmUp />, document.body)}
      <main className="lg:mx-8 mx-4">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 mx-auto max-w-7xl px-2 py-8 sm:py-12 md:py-24">
          <Desserts />
          <Cart />
        </div>
      </main>
    </CartProvider>
  );
}

export default App;
