import { Link, useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {
  const coffee = useLoaderData(); 
  const { name, chef, supplier, taste, category, details, photo } = coffee;

  return (
    <div className="bg-[#F4F3F0]">
      <div className="flex gap-20 mb-4 pt-4">
        <Link to={`/`}>
          <h2 className="text-2xl font-medium text-green-600">Go to Home Page</h2>
        </Link>
        <h2 className="text-2xl font-semibold">Coffee Name: {name}</h2>
      </div>
      <div className="flex gap-10 p-10">
        <img className="max-w-[351px] max-h-[455px]" src={photo} alt={`${name} image not found`} />
        <div>
          <h2 className="text-xl font-semibold my-4 items-center">Name: <span className="text-xl font-normal">{name}</span></h2>
          <h2 className="text-xl font-semibold my-4 items-center">Chef: <span className="text-xl font-normal">{chef}</span></h2>
          <h2 className="text-xl font-semibold my-4 items-center">Supplier: <span className="text-xl font-normal">{supplier}</span></h2>
          <h2 className="text-xl font-semibold my-4 items-center">Taste: <span className="text-xl font-normal">{taste}</span></h2>
          <h2 className="text-xl font-semibold my-4 items-center">Category: <span className="text-xl font-normal">{category}</span></h2>
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
