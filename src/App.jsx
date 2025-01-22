import { CiEdit } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard";

function App() {
  const coffees = useLoaderData();
  console.log(coffees);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-semibold text-purple-600">
        Coffee Store Client: {coffees.length}
      </h1>
      <div className="grid grid-cols-2 gap-x-20 gap-y-10">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
}

export default App;
