import Desserts from "./components/desserts";
import Cart from "./components/cart";
import { CartProvider } from "./context/cartContext";

function App() {
  return (
    <CartProvider>
      <main className="lg:mx-8 mx-4">
        <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr] gap-8 mx-auto max-w-7xl py-24">
          <Desserts />
          <Cart />
        </div>
      </main>
    </CartProvider>
  );
}

export default App;
