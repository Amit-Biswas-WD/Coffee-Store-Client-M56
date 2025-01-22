import { CiEdit } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;



  return (
    <div className="bg-[#F5F4F1] w-[648px] h-[300px] grid grid-cols-6 gap-4 items-center">
      <div className="col-span-2 w-full h-auto">
        <img
          className="w-[158px] h-[239px] bg-cover object-cover mx-auto rounded-sm"
          src={photo}
          alt=""
        />
      </div>
      <div className="items-center col-span-4">
        <div className="flex justify-between">
          <h2 className="text-xl text-[#1B1A1A] font-semibold my-4">
            Name:
            <span className="text-xl text-[#5C5B5B] font-normal px-2">
              {name}
            </span>
          </h2>
          <button className="my-4 w-[24px] text-white bg-[#D2B48C] rounded-sm mr-8">
            <IoEyeOutline className="w-6 h-auto" />
          </button>
        </div>
        <div className="flex justify-between">
          <h2 className="text-xl text-[#1B1A1A] font-semibold my-4">
            Chef:
            <span className="text-xl text-[#5C5B5B] font-normal px-2">
              {chef}
            </span>
          </h2>
          <button className="my-4 w-[24px] text-white bg-[#3C393B] rounded-sm mr-8">
            <CiEdit className="w-6 h-auto" />
          </button>
        </div>
        <div className="flex justify-between">
          <h2 className="text-xl text-[#1B1A1A] font-semibold my-4">
            Taste:
            <span className="text-xl text-[#5C5B5B] font-normal px-2">
              {taste}
            </span>
          </h2>
          <button

            className="my-4 max-w-[24px] max-h-[28px] text-white bg-[#EA4744] rounded-sm mr-8"
          >
            <MdOutlineDelete className="w-6 h-auto" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
