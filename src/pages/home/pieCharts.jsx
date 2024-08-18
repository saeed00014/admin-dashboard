import * as React from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

const PieChart2 = () => {
  const data = [
    { value: 14.2, label: "اصفهان" },
    { value: 26.9, label: "تهران" },
    { value: 10.6, label: "فارس" },
    { value: 30, label: "یزد" },
    { value: 12.4, label: "مازندران" },
    { value: 4.1, label: "مابقی" },
  ];

  return (
    <div
      style={{ width: "100%", height: "20rem" }}
      className="position-relative bg-white p-1"
    >
      <h6 style={{ top: "5px", right: "5px" }} className="position-absolute">
        فروش بر اساس شهر
      </h6>
      <PieChart
        series={[
          {
            arcLabel: (item) => `${item.value}%`,
            arcLabelMinAngle: 25,
            innerRadius: 0,
            paddingAngle: 2,
            startAngle: 0,
            endAngle: 360,
            data,
          },
        ]}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: "white",
            fontWeight: "bold",
            fontFamily: "farsi",
          },
        }}
        slotProps={{
          legend: {
            direction: "column",
            position: { vertical: "top", horizontal: "right" },
            markGap: -25,
            itemGap: 5,
            padding: { right: -10, top: 30 },
            labelStyle: {
              fontSize: 12,
              fontWeight: "bold",
              fill: "black",
            },
          },
        }}
      />
    </div>
  );
};

export default PieChart2;
