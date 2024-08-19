import React, { PureComponent } from "react";
import { ResponsiveContainer, Tooltip, Treemap } from "recharts";
import { dataSet } from "../../data";

const Map = () => {
  const COLORS = [
    "#27b32e",
    "#c2bd25",
    "#f55858",
    "#2accde",
    "#5b31c4",
    "#7b2fb5",
    "#c4801f",
    "#aac752",
    "#39ad98",
    "#7d0416",
    "#11678a",
  ];

  const dataInShow = [
    { name: "لوازم جانبی دیجیتال", price: "220", quantity: "20" },
    { name: "تزنیجات", price: "180", quantity: "50" },
    { name: "لوازم خانه", price: "150", quantity: "10" },
    { name: "مبلمان", price: "150", quantity: "12" },
    { name: "موبایل", price: "140", quantity: "7" },
    { name: "لپ تاپ / PC", price: "120", quantity: "4" },
    { name: "لباس", price: "100", quantity: "40" },
    { name: "لوازم تحریر", price: "60", quantity: "20" },
    { name: "کفش", price: "50", quantity: "25" },
    { name: "کیف", price: "30", quantity: "6" },
    { name: "قطعه خودرو", price: "20", quantity: "1" },
    { name: "فرش", price: "10", quantity: "1" },
  ];

  class CustomizedContent extends PureComponent {
    render() {
      const {
        dataInShow,
        root,
        depth,
        x,
        y,
        width,
        height,
        index,
        payload,
        colors,
        rank,
        name,
      } = this.props;

      const calcIndex = Math.floor((index / root.children.length) * 12);

      const handleMouseOver = () => {
        const element = document.getElementById(`maptree${name}`);
        element.style.filter = "brightness(85%)";
      };

      const handleMouseLeave = () => {
        const element = document.getElementById(`maptree${name}`);
        element.style.filter = "brightness(100%)";
      };

      return (
        <g
          onMouseOver={() => handleMouseOver()}
          onMouseLeave={() => handleMouseLeave()}
        >
          <rect
            id={`maptree${name}`}
            x={x}
            y={y}
            width={width}
            height={height}
            style={{
              fill: colors[calcIndex],
              stroke: "#fff",
              strokeWidth: 2,
            }}
          />
          {width > 60 && height > 60 && (
            <text
              x={x + width / 2}
              y={y + height / 2 + 0}
              pointerEvents="none"
              textAnchor="middle"
              fontWeight="thin"
              fontSize={16}
            >
              {name}
            </text>
          )}
          {width > 60 && height > 60 && (
            <text
              pointerEvents="none"
              x={x + width / 2}
              y={y + height / 2 + 20}
              textAnchor="middle"
              fill="#979899"
              fontWeight="thin"
              fontSize={12}
            >
              {dataInShow[calcIndex].price}
              &#160;&#160;&#160; تومان
              {width > 105 && (
                <>
                  &#160;&#160;&#160; / &#160;&#160;&#160;
                  {dataInShow[calcIndex].quantity}
                  &#160;&#160;&#160; عدد
                </>
              )}
            </text>
          )}
        </g>
      );
    }
  }

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="d-flex flex-column justify-content-center align-items-center bg-light p-2 rounded-1">
          <span>{payload[0].payload.name}</span>
          <span> کل مبلغ فروش: {payload[0].value} تومان</span>
          <span>
            {" "}
            کل تعداد سفارش:{" "}
            {
              dataInShow.find((data) => data.name === payload[0].payload.name)
                ?.quantity
            }{" "}
            عدد
          </span>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="p-md-2 p-1 bg-white h-100">
      <h6>مقایسه فروش بر اساس کل مبلغ فروش ماه</h6>
      <div className="bg-success">
        <ResponsiveContainer width="100%" height={400}>
          <Treemap
            isAnimationActive={false}
            data={dataSet}
            dataKey="size"
            stroke="#fff"
            fill="#1bd149"
            content={
              <CustomizedContent colors={COLORS} dataInShow={dataInShow} />
            }
          >
            <Tooltip content={<CustomTooltip />} />
          </Treemap>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Map;
