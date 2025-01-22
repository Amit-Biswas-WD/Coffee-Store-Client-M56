import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-semibold text-purple-600">
        Coffee Store Client: {coffees.length}
      </h1>
      <div className="grid grid-cols-2 gap-x-20 gap-y-10">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffees={coffees}
            setCoffees={setCoffees}
            coffee={coffee}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
