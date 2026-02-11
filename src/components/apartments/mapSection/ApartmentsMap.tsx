import { apartments } from "@/content/apartments";
import MapView from "@/components/addressAndMap/MapView";

export const ApartmentsMap = () => {
    // Filter apartments with valid coordinates
    const markers = apartments
        .filter((apt) => apt.lat && apt.lng)
        .map((apt) => ({
            lat: apt.lat,
            lng: apt.lng,
            label: apt.name === "Spanish Steps Apartment & Terrace" ? "Spanish Steps" : apt.name,
        }));

    // Default center: average of all apartment coordinates, fallback to Rome center
    const center =
        markers.length > 0
            ? [
                markers.reduce((sum, m) => sum + m.lat, 0) / markers.length,
                markers.reduce((sum, m) => sum + m.lng, 0) / markers.length,
            ]
            : [41.9028, 12.4964]; // Rome center

    return <MapView center={center as [number, number]} markers={markers} zoom={13} />;
};
