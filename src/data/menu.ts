import type { ImageMetadata } from "astro";
import halveKip from "../assets/menu-halve-kip.webp";
import heleKip from "../assets/menu-hele-kip.webp";
import kindermenu from "../assets/menu-kindermenu.webp";
import type { KipName } from "../components/Kip.astro";

/** Placeholder menu — replace names, descriptions, prices and photos here. */
export type MenuItem = {
    id: string;
    name: string;
    description: string;
    /** Use a real price like "€ 14,00" once known. */
    price: string;
    image: ImageMetadata;
    imageAlt: string;
    tag?: string;
    /** Child's drawing that peeks out from behind the card on hover. */
    peek: KipName;
};

export const MENU_ITEMS: MenuItem[] = [
    {
        id: "halve-kip",
        name: "Halve kip",
        description: "Een halve kip aan het spit, met krokante patatjes en appelmoes.",
        price: "Prijs volgt",
        image: halveKip,
        imageAlt: "Bord met een gebraden halve kip, frietjes, appelmoes en salade",
        tag: "De klassieker",
        peek: "bol",
    },
    {
        id: "hele-kip",
        name: "Hele kip",
        description:
            "Een volledige kip aan het spit, ook als afhaalkip. Ideaal om thuis met het hele gezin te delen.",
        price: "Prijs volgt",
        image: heleKip,
        imageAlt: "Hele gebraden kip in een pan met groenten, frietjes en salade",
        tag: "Om te delen",
        peek: "kleur",
    },
    {
        id: "kindermenu",
        name: "Kindermenu",
        description: "Een kleinere portie kip met patatjes en appelmoes, op maat van onze jongste smulpapen.",
        price: "Prijs volgt",
        image: kindermenu,
        imageAlt: "Kinderbord met een kippenbout, frietjes, tomaatjes, komkommer en appelmoes",
        tag: "Voor de kleintjes",
        peek: "klein",
    },
];
