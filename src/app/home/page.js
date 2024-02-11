import Layout from "@/components/layout/layout";
import React from "react";
import {  HomeLeftSection1 } from "./components/left-section-1";
import HomeLeftSection2 from "./components/left-section-2";
import HomeRightSection1 from "./components/right-section-1";

function HomePage(props) {
  return (
    <Layout>
      <div class="flex m-auto">
        <div class="w-3/4 p-5">
          <HomeLeftSection1 />
          <div class="border-b mb-5 mt-5"></div>
          <HomeLeftSection2 />
          <HomeLeftSection2 />
          <HomeLeftSection2 />
        </div>
        <div class="w-1/4 p-5">
         <HomeRightSection1 />
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
