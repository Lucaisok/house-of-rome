"use client";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
    iconRetinaUrl: markerIcon2x.src ?? markerIcon2x,
    iconUrl: markerIcon.src ?? markerIcon,
    shadowUrl: markerShadow.src ?? markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

export type MapMarker = {
    lat: number;
    lng: number;
    label?: string;
};

interface MapViewProps {
    center: [number, number];
    markers: MapMarker[];
    zoom?: number;
}

const MapView = ({ center, markers, zoom = 14 }: MapViewProps) => {
    return (
        <MapContainer center={center} zoom={zoom} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markers.map((marker) => (
                <Marker key={`${marker.lat}-${marker.lng}`} position={[marker.lat, marker.lng]}>
                    {marker.label ? <Popup>{marker.label}</Popup> : null}
                </Marker>
            ))}
        </MapContainer>
    );
};

export default MapView;
