import { Icon, LatLng, Marker as MarkerC } from "leaflet";
import { useEffect, useMemo, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

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
        minZoom={2}
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
              key={item?.id}
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
