import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function truncateText(text: string, maxLength: number) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
}

export const checkStatus = (
  status:
    | "Closed"
    | "Active"
    | "Deleted"
    | "Visibility Paused"
    | "removed by admin"
) => {
  switch (status) {
    case "Closed":
      return "text-blue-600 bg-blue-50";
    case "Active":
      return "text-green-600 bg-green-50";
    case "Deleted":
      return "text-gray-600 bg-gray-50";
    case "Visibility Paused":
      return "text-red-600 bg-red-50";
    case "removed by admin":
      return "text-red-600 bg-red-50";
  }
};

export const SearchFunction = ({
  data,
  search,
}: {
  data: { label: string; value: string }[];
  search: string;
}) => {
  const searchData = data?.filter((item) =>
    item.label.toLowerCase()?.includes(search.toLowerCase())
  );
  return searchData;
};
