"use client";
import React, { useState } from "react";
import { Page1Data } from "../Constants/bookservice/bookservice_data.json";

const Page1 = () => {
  const [hasContent, setHasContent] = useState(false);

  const handleChange = (e: { target: { value: string } }) => {
    setHasContent(e.target.value !== "");
  };

  return (
    <>
      <div className="font-poppins flex mt-[3.5rem]">
        <div className="w-[50%] h-screen bg-white px-[2rem]">
          <h1 className="mt-[4rem] text-[3rem] leading-[3.2rem] w-[12rem]">
            <span className="text-[#9e9c9c] font-semibold lg:block">
              {Page1Data.title.split(" ").slice(0, -2).join(" ")}
            </span>{" "}
            <span className="text-black font-bold w-4">
              {Page1Data.title.split(" ").slice(-2).join(" ")}
            </span>
          </h1>
          <p className="text-[#9e9c9c] text-[1.2rem] my-[2.5rem] pr-[2rem]">
            {Page1Data.paragraph}
          </p>
        </div>
        <div className="w-[50%] px-[4rem] flex items-center">
          <div className="w-full p-4 rounded-sm">
            <form className="space-y-8">
              <div className="flex flex-col space-y-1 col-3">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  onChange={handleChange}
                  className={`effect-16 input w-[50%] px-2 py-1 text-sm outline-none ${
                    hasContent ? "has-content" : ""
                  }`}
                />
                <label htmlFor="name" className="text-xs font-medium label">
                  {Page1Data.yourName}
                </label>
                <span className="focus-border"></span>
              </div>
              <div className="flex flex-col space-y-1 col-3">
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  required
                  onChange={handleChange}
                  className={`effect-16 input w-[50%] px-2 py-1 text-sm outline-none ${
                    hasContent ? "has-content" : ""
                  }`}
                />
                <label
                  htmlFor="companyName"
                  className="text-xs font-medium label"
                >
                  {Page1Data.yourCompanyName}
                </label>
                <span className="focus-border"></span>
              </div>
              <div className="flex flex-col space-y-1 col-3">
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  required
                  onChange={handleChange}
                  className={`effect-16 input w-[50%] px-2 py-1 text-sm outline-none ${
                    hasContent ? "has-content" : ""
                  }`}
                />
                <label
                  htmlFor="companyName"
                  className="text-xs font-medium label"
                >
                  {Page1Data.phone}
                </label>
                <span className="focus-border"></span>
              </div>
              <div className="flex flex-col w-full space-y-1">
                <label htmlFor="address" className="text-xs font-medium label">
                  {Page1Data.yourAddress}
                </label>
                <span className="focus-border"></span>
                <div className="flex w-full space-x-2">
                  <div className="flex flex-col w-[50%] space-y-1 col-3">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      required
                      onChange={handleChange}
                      className={`effect-16 input px-2 py-1 text-sm outline-none ${
                        hasContent ? "has-content" : ""
                      }`}
                    />
                    <label
                      htmlFor="city"
                      className="text-[0.6rem] text-[#9e9c9c]"
                    >
                      {Page1Data.city}
                    </label>
                    {/* <span className="focus-border"></span> */}
                  </div>
                  <div className="flex flex-col w-[50%] space-y-1 col-3">
                    <select
                      name="country"
                      id="country"
                      required
                      onChange={handleChange}
                      className={`effect-16 input px-2 py-1 text-sm outline-none ${
                        hasContent ? "has-content" : ""
                      }`}
                    >
                      <option value="0"></option>
                      <option value="1">India</option>
                      <option value="2">Japan</option>
                    </select>
                    <label
                      htmlFor="country"
                      className="text-[0.6rem] text-[#9e9c9c]"
                    >
                      {Page1Data.country}
                    </label>
                    {/* <span className="focus-border"></span> */}
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-1 col-3">
                <select
                  name="customer"
                  id="customer"
                  required
                  onChange={handleChange}
                  className={`effect-16 input w-[50%] px-2 py-1 text-sm outline-none ${
                    hasContent ? "has-content" : ""
                  }`}
                >
                  <option value="0"></option>
                  <option value="1">yes</option>
                  <option value="2">No</option>
                </select>
                <label htmlFor="customer" className="text-xs font-medium label">
                  {Page1Data.existingCustomer}
                </label>
                <span className="focus-border"></span>
              </div>
              <div className="flex flex-col space-y-1 col-3">
                <select
                  name="machineType"
                  id="machineType"
                  required
                  onChange={handleChange}
                  className={`effect-16 input w-[50%] px-2 py-1 text-sm outline-none ${
                    hasContent ? "has-content" : ""
                  }`}
                >
                  <option value="0"></option>
                  <option value="1">yes</option>
                  <option value="2">No</option>
                </select>
                <label
                  htmlFor="machineType"
                  className="text-xs font-medium label"
                >
                  {Page1Data.machineType}
                </label>
                <span className="focus-border"></span>
              </div>
              <div className="flex flex-col space-y-1 col-3">
                <select
                  name="serviceType"
                  id="serviceType"
                  required
                  onChange={handleChange}
                  className={`effect-16 input w-[50%] px-2 py-1 text-sm outline-none ${
                    hasContent ? "has-content" : ""
                  }`}
                >
                  <option value="0"></option>
                  <option value="1">yes</option>
                  <option value="2">No</option>
                </select>
                <label
                  htmlFor="serviceType"
                  className="text-xs font-medium label"
                >
                  {Page1Data.serviceType}
                </label>
                <span className="focus-border"></span>
              </div>
              <div className="flex items-center justify-center pt-[1rem]">
                <button className="bg-[#483d73] w-max text-xs text-white font-medium py-2 px-3 rounded-sm">
                  {Page1Data.submit}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page1;
