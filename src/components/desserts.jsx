import DessertItem from "./dessertItem";

export default function Desserts() {
  return (
    <section className="bg-red-300 flex flex-col gap-8">
      <h1 className="text-5xl font-bold">Desserts</h1>
      <div className="grid grid-cols-3 gap-6">
        <DessertItem />
      </div>
    </section>
  );
}
