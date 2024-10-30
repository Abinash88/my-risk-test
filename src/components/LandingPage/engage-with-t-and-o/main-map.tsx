// import { Icon } from "leaflet";
// import { useEffect, useRef } from "react";
// import { MapContainer, Marker, Popup,

// function MapComponent() {
//   const map = useMap();

//   useEffect(() => {
//     setTimeout(() => {
//       map.invalidateSize();
//     }, 500); // Add a delay to wait for render
//   }, [map]);

//   return null;
// }

// const locations: LocationType[] = [
//   {
//     id: 1,
//     country: "southAfrica",
//     flag: "/images/risk-card-yellow.png",
//     risk: { totalRisk: 5, totalRiskSector: 9 },
//     threatOpportunities: { threats: 60, Opportunities: 58 },
//     coordinates: [-30.5595, 22.9375],
//   },
//   {
//     id: 2,
//     country: "Japan",
//     flag: "/images/risk-card-red.png",
//     risk: { totalRisk: 8, totalRiskSector: 5 },
//     threatOpportunities: { threats: 60, Opportunities: 58 },
//     coordinates: [36.2048, 138.2529],
//   },
//   {
//     id: 3,
//     country: "India",
//     flag: "/images/risk-card-dark-red.png",
//     risk: { totalRisk: 5, totalRiskSector: 9 },
//     threatOpportunities: { threats: 60, Opportunities: 58 },
//     coordinates: [20.5937, 78.9629],
//   },
//   {
//     id: 4,
//     country: "Australia",
//     flag: "/images/risk-card-yellow.png",
//     risk: { totalRisk: 8, totalRiskSector: 5 },
//     threatOpportunities: { threats: 60, Opportunities: 58 },
//     coordinates: [-25.2744, 133.7751],
//   },
//   {
//     id: 5,
//     country: "Usa",
//     flag: "/images/risk-card-green.png",
//     risk: { totalRisk: 5, totalRiskSector: 9 },
//     threatOpportunities: { threats: 60, Opportunities: 58 },
//     coordinates: [37.0902, -95.7129],
//   },
//   {
//     id: 6,
//     country: "Brazil",
//     flag: "/images/risk-card-yellow.png",
//     risk: { totalRisk: 8, totalRiskSector: 5 },
//     threatOpportunities: { threats: 60, Opportunities: 58 },
//     coordinates: [-14.235, -51.9253],
//   },
// ];
// export const CenterCanada = () => {
//   const map = useMap();
//   map.flyTo([56.1304, -106.3468], 4);
//   return null;
// };

// const MainMap = () => {
//   const customIcon = (image: string) => {
//     return new Icon({
//       iconUrl: image,
//       iconSize: [25, 41],
//       iconAnchor: [12, 41],
//       popupAnchor: [0, -41],
//     });
//   };

//   return (
//     <div
//       style={{
//         transform: "translate3d(0, 0, 0)",
//       }}
//       className=" space-y-1"
//     >
//       <MapContainer
//         doubleClickZoom
//         className="rounded-md overflow-hidden"
//         style={{ width: "100%", height: "60vh" }}
//         center={[56.1304, -106.3468]}
//         zoom={13}
//         scrollWheelZoom={true}
//         zoomControl={true}
//       >
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />

//         {locations.map((item) => {
//           return (
//             <Marker
//               key={item?.id}
//               icon={customIcon(item?.flag)}
//               position={item?.coordinates}
//             >
//               <Popup>
//                 <MapPopup />
//               </Popup>
//             </Marker>
//           );
//         })}
//         <CenterCanada />
//         <MapComponent />
//       </MapContainer>
//     </div>
//   );
// };

// export default MainMap;

import { Icon, LatLng, Marker as MarkerC } from "leaflet";
import { useEffect, useMemo, useRef, useState } from "react";
import { MapContainer, Marker, TileLayer, useMap, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import type { LocationType } from ".";
import MapPopup from "./map-popup";

type TProps = {
  height: string;
  width: string;
  value?: {
    lat?: number;
    lng?: number;
  };
  onChange: (data: LatLng) => void;
  locations: LocationType[];
  zoom: number;
};

export const UpdateCenter = ({ center }: { center: LatLng }): null => {
  const map = useMap();
  map.flyTo(center);

  return null;
};

const TAndOMap: React.FC<TProps> = ({
  height,
  width,
  onChange,
  value,
  locations,
  zoom,
}) => {
  const [position, setPosition] = useState({
    lat: value?.lat || -33.8796248,
    lng: value?.lng || 151.2067721,
  });

  const markerRef = useRef<MarkerC>(null);

  const mapMarker = (image: string) =>
    new Icon({
      iconUrl: image,
      iconSize: [40, 40], // size of the icon
    });

  const eventHandlers = useMemo(
    () => ({
      dragend(): void {
        const marker = markerRef.current;
        if (marker != null) {
          setPosition(marker.getLatLng());
          onChange(marker.getLatLng());
        }
      },
    }),
    [onChange]
  );

  useEffect(() => {
    setPosition({
      lat: value?.lat || -33.8796248,
      lng: value?.lng || 151.2067721,
    });
  }, [value]);

  const latLngPosition = new LatLng(position.lat, position.lng);

  return (
    <div
      style={{
        transform: "translate3d(0, 0, 0)",
      }}
      className=" space-y-1 "
    >
      <MapContainer
        center={latLngPosition} // Use the LatLng instance here
        zoom={zoom}
        scrollWheelZoom
        doubleClickZoom
        style={{
          height,
          width,
          backgroundColor: "var(--aldgray)",
        }}
        className="rounded-md overflow-hidden"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {locations?.map((item) => {
          return (
            <Marker
              draggable={false}
              eventHandlers={eventHandlers}
              position={item.coordinates} // Use the LatLng instance here
              ref={markerRef}
              icon={mapMarker(item?.flag)}
            >
              <Popup className=" rounded-xl relative">
                <MapPopup
                  continent={item?.continent}
                  country={item?.country}
                  opportunities={item?.threatOpportunities.Opportunities}
                  threats={item?.threatOpportunities?.threats}
                  risk={item?.risk}
                  style={item?.style}
                />
              </Popup>
            </Marker>
          );
        })}
        <UpdateCenter center={latLngPosition} />
      </MapContainer>
    </div>
  );
};

export default TAndOMap;
