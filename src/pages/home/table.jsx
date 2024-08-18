import React from "react";
import { tableData } from "../../data";

const Table = () => {
  return (
    <div className="p-md-2 p-1 bg-white h-100">
      <h6>پرفروش ترین محصولات</h6>
      <table className="table table-striped">
        <thead>
          <tr className="small">
            <th scope="col">رتبه</th>
            <th scope="col">نام محصول</th>
            <th scope="col">میزان محبوبیت</th>
            <th scope="col">میزان رضایت</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data) => {
            return (
              <>
                <tr>
                  <th style={{ width: "10%" }} scope="row">
                    {data.id}
                  </th>
                  <td style={{ width: "30%" }}>{data.name}</td>
                  <td className="pt-3">
                    <div
                      className="progress "
                      role="progressbar"
                      aria-label="Basic example"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        className="progress-bar"
                        style={{ width: `${data.pop}%` }}
                      ></div>
                    </div>
                  </td>
                  <td style={{ width: "25%" }}>
                    <div className="btn btn-outline-danger py-0 pt-1">
                      {data.sati}%
                    </div>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
