import React from "react";
import Aside from "./aside";
import Offconvas from "./offconvas";

const Sidebar = () => {
  return (
    <div style={{maxWidth: "min-content"}}>
      <Aside />
      <Offconvas />
    </div>
  );
};

export default Sidebar;
