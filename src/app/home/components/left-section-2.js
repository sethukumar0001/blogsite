import React from "react";

function HomeLeftSection2(props) {
  return (
    <div>
      <div class="flex mb-5">
        <div class="w-1/4 border-r pr-4">Content for the left column</div>
        <div class="w-3/4 flex flex-col p-3 ">
          Row 1
          <div class="mb-4 border-b p-3  h-[150px]">
            Content for the first row
            <p>Row 1 content.</p>
          </div>
          Row 2
          <div class="mb-4 border-b p-3  h-[150px]">
            Content for the second row
            <p>Row 2 content.</p>
          </div>
          Row 3
          <div class="mb-4  p-3  h-[150px]">
            Content for the third row
            <p>Row 3 content.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeLeftSection2;
