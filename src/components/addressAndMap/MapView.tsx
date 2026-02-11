"use client";

import "leaflet/dist/leaflet.css";
import L, { type Map as LeafletMap } from "leaflet";
import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import ReactDOMServer from "react-dom/server";
import CustomPin from "./CustomPin";
import styles from "./MapView.module.css";

function getDivIcon(label: string) {
    return L.divIcon({
        className: '', // Prevent default styles
        html: ReactDOMServer.renderToString(<CustomPin name={label} />),
        iconSize: [90, 48],
        iconAnchor: [45, 48],
        popupAnchor: [0, -48],
    });
}

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
    const mapRef = useRef<LeafletMap | null>(null);

    useEffect(() => {
        if (!mapRef.current) return;
        const container = mapRef.current.getContainer();
        L.DomEvent.disableScrollPropagation(container);
    }, []);

    return (
        <MapContainer
            center={center}
            zoom={zoom}
            scrollWheelZoom={true}
            touchZoom={true}
            dragging={true}
            doubleClickZoom={true}
            className={styles.map ?? ""}
            ref={mapRef}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markers.map((marker) => (
                <Marker
                    key={`${marker.lat}-${marker.lng}`}
                    position={[marker.lat, marker.lng]}
                    icon={getDivIcon(marker.label || "")}
                    interactive={false}
                />
            ))}
        </MapContainer>
    );
};

export default MapView;
