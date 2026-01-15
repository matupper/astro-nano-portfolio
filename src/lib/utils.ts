import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric"
  }).format(date);
}

export function readingTime(content: string | undefined) {
  if (!content) {
    return "1 min read";
  }
  // Remove HTML tags if present, then remove markdown syntax
  let textOnly = content.replace(/<[^>]+>/g, ""); // Remove HTML tags
  textOnly = textOnly.replace(/[#*`_~\[\]()]/g, ""); // Remove markdown syntax
  textOnly = textOnly.replace(/\n+/g, " "); // Replace newlines with spaces
  const wordCount = textOnly.trim().split(/\s+/).filter(word => word.length > 0).length;
  const readingTimeMinutes = Math.max(1, Math.ceil(wordCount / 200));
  return `${readingTimeMinutes} min read`;
}

export function dateRange(startDate: Date, endDate?: Date | string): string {
  const startMonth = startDate.toLocaleString("default", { month: "short" });
  const startYear = startDate.getFullYear().toString();
  let endMonth;
  let endYear;

  if (endDate) {
    if (typeof endDate === "string") {
      endMonth = "";
      endYear = endDate;
    } else {
      endMonth = endDate.toLocaleString("default", { month: "short" });
      endYear = endDate.getFullYear().toString();
    }
  }

  return `${startMonth}${startYear} - ${endMonth}${endYear}`;
}

type EntryLike = { collection: string; id: string };

export function entryHref(entry: EntryLike): string {
  // With Astro Content Layer loaders, entries expose `id` (not `slug`).
  // Our projects live at `.../<project>/index.md`, so strip the trailing `/index`.
  if (entry.collection === "projects") {
    const id = entry.id.replace(/\/index$/, "").toLowerCase();
    return `/${entry.collection}/${id}`;
  }
  return `/${entry.collection}/${entry.id}`;
}