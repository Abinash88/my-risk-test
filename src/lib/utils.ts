import Country from "@/components/shared/countries.json";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const dropDownData = Country?.map((item) => ({
  label: item?.country,
  value: item?.country,
}));

export const handleChangeToMB = (bytes: number | undefined) => {
  if (!bytes) return;
  const result = bytes / (1024 * 1024);
  return result.toFixed(3);
};
