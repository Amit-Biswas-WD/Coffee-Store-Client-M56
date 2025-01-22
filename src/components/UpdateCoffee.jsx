import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const value = { name, chef, supplier, taste, category, details, photo };
    console.log(value);

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(value),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "SuccessFully!",
            text: "Coffee Update Successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold"> Update a Coffee Name: {name}</h2>
      <form
        onSubmit={handleUpdateCoffee}
        className="bg-[#F4F3F0] px-[132px] py-[70px]"
      >
        <div className="flex gap-6 my-2">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-bold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              placeholder="Coffee Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-bold">Chef</span>
            </label>
            <input
              type="text"
              name="chef"
              defaultValue={chef}
              placeholder="Enter coffee chef"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="flex gap-6 my-2">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-bold">Supplier</span>
            </label>
            <input
              type="text"
              name="supplier"
              defaultValue={supplier}
              placeholder="Enter coffee supplier"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-bold">Taste</span>
            </label>
            <input
              type="text"
              name="taste"
              defaultValue={taste}
              placeholder="Enter coffee taste"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="flex gap-6 my-2">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-bold">Category</span>
            </label>
            <input
              type="text"
              name="category"
              defaultValue={category}
              placeholder="Enter coffee category"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-bold">Details</span>
            </label>
            <input
              type="text"
              name="details"
              defaultValue={details}
              placeholder="Enter coffee details"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="my-2">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-bold">Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              placeholder="Enter photo URL"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="btn text-[#331A15] bg-[#D2B48C] w-full"
          >
            Add Coffee
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;
