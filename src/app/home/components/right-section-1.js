import React from "react";

function HomeRightSection1(props) {
  return (
    <div>
      <div className=" border-l p-3">
        Row 1
        <div class="mb-4 border-b p-3 h-[180px]">
          Content for the first row
          <p>Row 1 content.</p>
        </div>
        Row 2
        <div class="mb-4 border-b p-3 h-[180px]">
          Content for the second row
          <p>Row 2 content.</p>
        </div>
        Row 3
        <div class="mb-4 p-3  h-[180px]">
          Content for the third row
          <p>Row 3 content.</p>
        </div>
      </div>
    </div>
  );
}

export default HomeRightSection1;
