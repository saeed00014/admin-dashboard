import React from "react";
import InfoCard from "./infoCard";
import Insight from "./insight";
import Table from "./table";
import PieChart2 from "./pieCharts";
import BarChart2 from "./barChart";
import Treemap from "./treemap";
import Map from "./treemap";

const Home = () => {
  return (
    <div className="container-fluid h-100 ">
      <div className="home vh-100">
        <div
          style={{ minHeight: "20rem" }}
          className="row gap-xl-0 gap-3 pt-lg-3 py-2 px-1"
        >
          <div id="sellByToday" className="col-xl-8 px-1 px-lg-2 px-1">
            <InfoCard />
          </div>
          <div id="sellByCustomer" className="col-xl-4 px-lg-2 px-1">
            <Insight />
          </div>
        </div>
        <div className="row gap-xl-0 gap-3 py-2 px-1">
          <div className="col-xl-12 px-1 px-lg-2 px-1">
            <Map />
          </div>
        </div>
        <div
          style={{ minHeight: "20rem" }}
          className="row gap-xl-0 gap-3 py-2 px-1"
        >
          <div id="sellByCity" className="col-xl-6 px-1 px-lg-2 px-1">
            <PieChart2 />
          </div>
          <div id="sellByOnline" className="col-xl-6 px-1 px-lg-2 px-1">
            <BarChart2 />
          </div>
        </div>
        <div
          id="bestSell"
          style={{ minHeight: "20rem" }}
          className="row gap-xl-0 gap-3 py-2 px-1"
        >
          <div className="col-xl-12 px-1 px-lg-2 px-1">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
