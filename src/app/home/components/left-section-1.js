import React from "react";

export const HomeLeftSection1 = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {/* Column 1 */}
        <div className="flex-1 p-4 border-r">
          <div className="border-b p-2 mb-2 h-[150px]">container1</div>
          <div className="border-b p-2 mb-2 h-[150px]">container1</div>
          <div className=" p-2 h-[150px]">container1</div>
        </div>
        {/* Column 2 */}
        <div className="flex-1 p-4 border-r">
          <div className="border-b p-2 mb-2 h-[150px]">container</div>
          <div className="border-b p-2 mb-2 h-[150px]">container</div>
          <div className=" p-2 h-[150px]">container</div>
        </div>

        {/* Column 3 */}
        <div className="flex-1 p-4">
          <div className="border-b p-2 mb-2 h-[150px]">container</div>
          <div className="border-b p-2 mb-2 h-[150px]">container</div>
          <div className=" p-2 h-[150px]">container</div>
        </div>
      </div>
    </div>
  );
};
