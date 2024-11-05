import React from "react";

const SpecificationTable: React.FC = () => {
  return (
    <div className="w-[60%] flex justify-center items-center">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#a6a6a6] text-black">
            <th className="border border-gray-400 p-1 text-base font-semibold text-center">FEATURE</th>
            <th className="border border-gray-400 p-1 text-base font-semibold text-center">SPECIFICATION</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, key) => (
            <tr key={key} className="hover:bg-gray-300">
              {/* Left column (Feature) with a specific background color */}
              <td className="border border-gray-400 p-1 text-sm font-regular text-center bg-[#f5f5f5] hover:bg-gray-300">
                {row.feature}
              </td>

              {/* Right column (Specification) with a different background color */}
              <td className="border border-gray-400 p-1 text-sm font-regular text-center bg-[#d7d7d7] hover:bg-gray-300">
                {row.spec}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Sample data to replace with actual data
const data = [
  { feature: "Speed", spec: "180 Cups / min" },
  { feature: "Paper Specifications", spec: "170 - 380 GSM" },
  { feature: "Raw Materials", spec: "Single or Double PE/PLA Coated Paper" },
  { feature: "Cup Size", spec: "2.5 - 26 oz" },
  { feature: "Cup Top Dia (TD)", spec: "60 - 95 mm" },
  { feature: "Cup Height (H)", spec: "50 - 135 mm" },
  { feature: "Cup Bottom Dia (RB)", spec: "40 - 75 mm" },
  { feature: "Cup Knurling Depth (KD)", spec: "3.5 - 10 mm" },
  { feature: "Voltage", spec: "3 Phase | 380 V; 50 Hz" },
  { feature: "Total Power", spec: "35 kW" },
  { feature: "Weight", spec: "3500 Kg" },
  { feature: "Dimensions", spec: "3700 x 1520 x 1940 mm" },
  { feature: "Air Pressure", spec: "0.6 - 0.8 Mpa" },
  { feature: "Air Flow Rate", spec: "30 CFM" },
];

export default SpecificationTable;
