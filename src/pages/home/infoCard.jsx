import React from "react";
import Card from "./card";

const InfoCard = () => {
  return (
    <div style={{ height: "20rem" }} className="h-100 w-100">
      <div className="d-flex flex-column bg-white h-100 w-100 p-md-2 p-1 rounded-1">
        <h5>فروش امروز</h5>
        <p className="h6 mb-4">خلاصه فروش ها</p>
        <div className="container-fluid h-100 p-0">
          <div className="row justify-content-evenly align-items-center h-100 gap-1">
            <Card
              icon="bi-bar-chart-steps"
              name="کل فروش ها"
              value="8M تومان"
              bg="bg-warning"
            />
            <Card
              icon="bi-diagram-3"
              name="محصولات فروش رفته"
              value="8 عدد"
              bg="bg-success"
            />
            <Card
              icon="bi-clipboard-data"
              name="کل  سفارش ها"
              value="20 عدد"
              bg="bg-danger"
            />
            <Card
              icon="bi-graph-up"
              name="مشتری های جدید"
              value="4 نفر"
              bg="bg-info"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
