import React from "react";
import Map from "../components/Home/Map";
import ReviewBoard from "../components/Home/ReviewBoard/ReviewBoard";
import StoreEventNotice from "../components/Home/StoreEventNotice";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col w-full lg:flex-row">
        <div className="grid flex-grow h-60 card bg-success rounded-box place-items-center">
          <Map />
          <div>가까운 매장 길 찾기 {">>"}</div>
        </div>
        <div className="divider lg:divider-horizontal" />
        <div className="grid flex-grow h-60 card bg-success rounded-box place-items-center">
          <ReviewBoard />
          <StoreEventNotice />
        </div>
      </div>
    </div>
  );
};

export default Home;
