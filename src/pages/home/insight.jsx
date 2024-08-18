import React from "react";
import InsightChart from "./insightChart";

const Insight = () => {
  return (
    <div
      style={{ height: "20rem" }}
      className="d-flex flex-column w-100 p-2 pb-2 bg-white"
    >
      <h6>آمار مشتری های جدید و قدیمی - مقایسه مبلغ خرید</h6>
      <InsightChart />
    </div>
  );
};

export default Insight;
