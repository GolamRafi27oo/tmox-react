import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
export function tmox(...inputs) {
    return twMerge(clsx(inputs));
}
