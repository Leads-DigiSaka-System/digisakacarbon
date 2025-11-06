"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import PropTypes from "prop-types";
import "leaflet/dist/leaflet.css";

import "./map.css";

// Fix for default markers in react-leaflet
const defaultIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const getMarkerIcon = (isHighlighted) => {
  if (isHighlighted) {
    return new L.Icon({
      iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
      iconRetinaUrl:
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
      shadowUrl:
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
      iconSize: [35, 57],
      iconAnchor: [17, 57],
      popupAnchor: [1, -34],
      shadowSize: [57, 57],
      className: "highlighted-marker",
    });
  }
  return defaultIcon;
};

export default function Map({
  farms = [],
  highlightedFarm,
  onFarmSelect,
  mapRef,
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <MapContainer
      center={[12.8797, 121.774]}
      zoom={6}
      minZoom={5}
      z
      maxZoom={18}
      maxBounds={[
        [4.2164, 116.9301],
        [21.3217, 126.6039],
      ]} // Philippines bounds
      maxBoundsViscosity={1.0}
      style={{ height: "100%", width: "100%" }}
      className="z-0"
      ref={mapRef}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {farms.map((farm) => (
        <Marker
          key={farm.id}
          position={farm.coordinates}
          icon={getMarkerIcon(highlightedFarm === farm.id)}
          eventHandlers={{
            click: () => onFarmSelect(farm),
            mouseover: (e) => {
              e.target.openPopup();
            },
            mouseout: (e) => {
              e.target.closePopup();
            },
          }}
        >
          <Popup>
            <div className="p-2">
              <h3 className="text-sm font-semibold">{farm.name}</h3>
              <p className="text-xs text-gray-600">{farm.location}</p>
              <p className="mt-1 text-xs text-gray-500">
                Area: {farm.area} hectares
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

Map.propTypes = {
  farms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
      area: PropTypes.number.isRequired,
    })
  ),
  highlightedFarm: PropTypes.string,
  onFarmSelect: PropTypes.func,
  mapRef: PropTypes.object,
};
