import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MapOptions from "./mapOptions";
import { branchesInfo, branchPositions } from "../../../data";

const IntractiveMap = () => {
  const [map, setMap] = useState(null);
  const [showBranch, setShowBranch] = useState(true);
  const greenIcon = L.icon({
    iconUrl: "greenIcon.svg",
    iconSize: [38, 45],
    shadowSize: [50, 64],
    iconAnchor: [22, 49],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -50],
  });
  const redIcon = L.icon({
    iconUrl: "redIcon.svg",
    iconSize: [38, 45],
    shadowSize: [50, 64],
    iconAnchor: [22, 49],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -50],
  });
  return (
    <div className="d-flex flex-md-row flex-column w-100 h-100 bg-white p-2">
      <MapOptions
        map={map}
        showBranch={showBranch}
        setShowBranch={setShowBranch}
      />
      <MapContainer
        id="map"
        center={branchPositions.viewPosition}
        zoom={5}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
        ref={setMap}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {showBranch && (
          <>
            {branchesInfo.map((info) => {
              return (
                <Marker
                  icon={info.status === "فعال" ? greenIcon : redIcon}
                  position={info.position}
                >
                  <Popup>
                    <div className="d-flex flex-column gap-2">
                      <div className="d-flex gap-2">
                        <span>شعبه {info.name}</span>
                        <span>وضعیت: {info.status}</span>
                      </div>
                      {info.status === "فعال" && (
                        <span>سفارش های حضوری: {info.numberOfOrders} عدد</span>
                      )}
                    </div>
                  </Popup>
                </Marker>
              );
            })}
          </>
        )}
      </MapContainer>
    </div>
  );
};

export default IntractiveMap;
