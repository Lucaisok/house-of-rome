import {
    Wifi,
    Wind,
    Tv,
    Coffee,
    UtensilsCrossed,
    Shirt,
    PawPrint,
    type LucideIcon,
} from "lucide-react";
import type { Amenity } from "@/content/apartments";

export const amenityIcons: Record<Amenity, LucideIcon> = {
    Wifi,
    "Air Conditioning": Wind,
    TV: Tv,
    "Coffee Maker": Coffee,
    "Full Kitchen": UtensilsCrossed,
    Dryer: Shirt,
    Washer: Shirt,
    "Pet Friendly": PawPrint,
};
