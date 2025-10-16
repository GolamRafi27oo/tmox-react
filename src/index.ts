import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

export function tmox(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
