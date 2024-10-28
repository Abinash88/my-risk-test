import { Icon, Popup } from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

type LocationType = {
  id: number;
  country: string;
  flag: string;
  risk: { totalRisk: number; totalRiskSector: number };
  threatOpportunities: { threats: number; Opportunities: number };
  coordinates: [number, number];
};

const locations: LocationType[] = [
  {
    id: 1,
    country: "Usa",
    flag: "/images/flag.png",
    risk: { totalRisk: 5, totalRiskSector: 9 },
    threatOpportunities: { threats: 60, Opportunities: 58 },
    coordinates: [51.525, -0.24],
  },
  {
    id: 2,
    country: "",
    flag: "/images/flag.png",
    risk: { totalRisk: 8, totalRiskSector: 5 },
    threatOpportunities: { threats: 60, Opportunities: 58 },
    coordinates: [51.525, -0.24],
  },
];

const MainMap = () => {
  const customIcon = new Icon({
    iconUrl: "/images/risk-card.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [0, -41],
  });
  return (
    <div
      style={{
        transform: "translate3d(0, 0, 0)",
      }}
      className=" space-y-1"
    >
      <MapContainer
        doubleClickZoom
        scrollWheelZoom={false}
        className="rounded-md overflow-hidden"
        style={{ width: "100%", height: "60vh" }}
        center={[51.505, -0.09]}
        zoom={13}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {locations.map((item) => {
          return (
            <Marker
              key={item?.id}
              icon={customIcon}
              position={item?.coordinates}
            >
              {/* <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup> */}
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default MainMap;
