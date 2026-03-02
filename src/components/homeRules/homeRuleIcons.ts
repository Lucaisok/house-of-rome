import {
    Clock,
    LogIn,
    LogOut,
    Cigarette,
    CigaretteOff,
    PawPrint,
    Ban,
    PartyPopper,
    type LucideIcon
} from "lucide-react";

export type HomeRuleKey = "checkIn" | "checkOut" | "selfCheckin" | "smokingAllowed" | "smokingNotAllowed" | "petsAllowed" | "petsNotAllowed" | "partiesAllowed" | "partiesNotAllowed";

export const homeRuleIcons: Record<HomeRuleKey, LucideIcon> = {
    checkIn: LogIn,
    checkOut: LogOut,
    selfCheckin: Clock,
    smokingAllowed: Cigarette,
    smokingNotAllowed: CigaretteOff,
    petsAllowed: PawPrint,
    petsNotAllowed: Ban,
    partiesAllowed: PartyPopper,
    partiesNotAllowed: Ban,
};
