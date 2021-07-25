import "./Map.css";
import L from "leaflet";
import MarkIcon from "../../assets/images/icon-location.svg";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import SetViewOnClick from "./SetMapViewOnChange";

const markerIcon = L.icon({
  iconUrl: MarkIcon,
  iconSize: [30, 40],
});

function Map({ location }) {
  const [position, setPosition] = useState([18.64813, 72.87579]);

  useEffect(() => {
    console.log("in map", location);
    if (location) {
      setPosition([location.location.lat, location.location.lng]);
    }
  }, [location]);

  return (
    <>
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={false}
        className="map"
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={markerIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <SetViewOnClick pos={position} />
      </MapContainer>
    </>
  );
}

export default Map;
