/**
 * Central place for everything that changes per edition of VIBO Kiplekker.
 * Update the order URL, event details and contact info here.
 */
export const ORDER_URL = "https://bestelling.vibo-kiplekker.be";

/** Shown wherever a detail is not known yet. */
export const TBD = "Nog te bepalen";

export const SITE = {
    name: "VIBO Kiplekker",
    website: "www.vibo-kiplekker.be",
    purpose: "ten voordele van de bosklassen OV1",
    tagline: "Een heerlijke maaltijd voor een prachtig doel!",
    description:
        "Geniet van een lekkere maaltijd en steun tegelijkertijd de bosklassen van onze leerlingen. Samen maken we er een smakelijk succes van!",
};

export const EVENT_INFO = {
    datum: "Zondag 28 februari 2027",
    locatie: TBD,
    bestellenTot: TBD,
    afhaalmoment: TBD,
};

/** Contact placeholders — replace once known. */
export const CONTACT = {
    email: "",
    phone: "",
    address: "",
};

export const NAV_LINKS = [
    { label: "Home", href: "#top" },
    { label: "Over het evenement", href: "#over" },
    { label: "Menu", href: "#menu" },
    { label: "Praktische info", href: "#info" },
] as const;
