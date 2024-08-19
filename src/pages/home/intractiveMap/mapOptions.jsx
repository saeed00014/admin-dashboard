import React from "react";
import { branchPositions } from "../../../data";

const MapOptions = ({ map, showBranch, setShowBranch }) => {
  const handleShowBranch = (e) => {
    setShowBranch((p) => !p);
  };

  const handleZoomBranch = (e) => {
    const splited = e.target.value.split(",");
    const zoomLvl =
      Number(splited[0]) === branchPositions.viewPosition[0] ? 5 : 11;
    map.setView([Number(splited[0]), Number(splited[1])], zoomLvl);
  };

  return (
    <div
      style={{ maxWidth: "15rem" }}
      className="d-flex flex-column p-2 w-100 border mapOptions"
    >
      <h6>نقشه شعب فروشگاه</h6>
      <div className="d-flex flex-column gap-md-3 gap-1">
        <div className="d-flex">
          <input
            onChange={(e) => handleShowBranch(e)}
            checked={showBranch}
            id="branchCheck"
            type="checkbox"
          />
          <label
            style={{ paddingRight: ".5rem" }}
            className="w-100"
            htmlFor="branchCheck"
          >
            نمایش شعب
          </label>
        </div>
        <div className="d-flex flex-column">
          <h6>شعبه ی مورد نظر را انتخاب کنید</h6>
          <select
            id=""
            name="branchSelector"
            className="form-select-sm"
            onChange={(e) => handleZoomBranch(e)}
          >
            <option value={branchPositions.viewPosition}>همه شعب</option>
            <option value={branchPositions.tehranBranch}>تهران</option>
            <option value={branchPositions.mashhadBranch}>مشهد</option>
            <option value={branchPositions.isfahanBranch}>اصفهان</option>
            <option value={branchPositions.shirazBranch}>شیراز</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default MapOptions;
