import React, { useState, useEffect } from "react";
import { Page2Data } from "../Constants/application/application_data.json";
import Image from "next/image";
import { GrSearch } from "react-icons/gr";

const Modal: React.FC<{
  setIsModalOpen: (isOpen: boolean) => void;
  setSelectedProduct: (product: (typeof Page2Data.products)[0]) => void;
  selectedProduct: (typeof Page2Data.products)[0]; // Add selectedProduct as a prop
}> = ({ setIsModalOpen, setSelectedProduct, selectedProduct }) => {
  const [selectedInModal, setSelectedInModal] = useState(selectedProduct); // Sync with the main component's state

  // Close modal
  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleProductClick = (product: (typeof Page2Data.products)[0]) => {
    setSelectedProduct(product); // Set selected product in the main component
    setIsModalOpen(false); // Close modal after selection
  };

  useEffect(() => {
    setSelectedInModal(selectedProduct); // Sync modal selection with the main component
  }, [selectedProduct]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* Modal content */}
      <div className="bg-white w-full mx-4  rounded-lg px-5 pb-5 pt-2 flex flex-col items-end justify-center">
        {/* Close Button */}
        <button
          onClick={handleClose} // Close the modal
          className="text-black mb-3 text-2xl font-semibold "
        >
          &times;
        </button>

        {/* Modal Body - Render the left component */}
        <div className="flex flex-col justify-center items-center">
          <div className="flex w-full mb-[1vh]">
            <div className="flex w-[60%] h-[2.2rem] rounded-[2rem] bg-[#f2f2f2] border-2 border-solid border-[#f2f2f2] overflow-hidden hover:border-[#d9d9d8]  mr-[0.4rem] text-[#6f6f6f] items-center">
              <button className="ml-[0.5rem] text-black text-[1.2rem]">
                <GrSearch />
              </button>
              <input
                type="search"
                placeholder={Page2Data.placeholder}
                className="w-full px-[0.5rem] outline-none bg-transparent  text-[0.8rem] text-[#6f6f6f]"
              />
            </div>
            <div className="w-[40%]  h-[2.2rem] rounded-[2rem] bg-[#f2f2f2] border-2 border-solid border-[#f2f2f2] overflow-hidden hover:border-[#d9d9d8] px-[0.5rem] flex items-center">
              <select
                id="Category"
                name="Category"
                className="w-full outline-none bg-transparent text-[#6f6f6f] text-[0.8rem]"
              >
                <option value="" disabled selected>
                  Category
                </option>
                <option value="item1">Paper Cup</option>
                <option value="item2">Paper Bowl</option>
                <option value="item3">Paper Roll</option>
              </select>
            </div>
          </div>
          <div className="w-full h-[52vh] px-[0.5rem] overflow-hidden">
            <div className="h-full overflow-auto scrollbar-hide">
              <div className="grid grid-cols-3 gap-x-4 ">
                {Page2Data.products.map((item, idx) => (
                  <div
                    key={idx}
                    className="cursor-pointer mt-[0.5vh]"
                    onClick={() => handleProductClick(item)}
                  >
                    <div
                      className={`bg-[#f2f2f2] border-2 border-solid h-[10vh] w-full rounded-[0.8rem] flex items-center justify-center ${
                        selectedProduct === item
                          ? "border-[#483d73]"
                          : "border-[#f2f2f2]"
                      }`}
                    >
                      <Image
                        className="h-[8vh]"
                        width={100}
                        height={100}
                        src={item.img}
                        alt={item.title}
                      />
                    </div>
                    <div className="mt-[0.2vh]">
                      <p
                        className={`text-center text-[0.8rem] font-normal ${
                          selectedProduct === item
                            ? "text-[#483d73] font-semibold"
                            : "text-[#c6c5c5]"
                        }`}
                      >
                        {item.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
