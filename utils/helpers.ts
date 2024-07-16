export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\wа-яё]/g, "-")
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function unslugify(slug: string): string {
  return slug
    .replace(/-/g, " ")
    .replace(/^\s+|\s+$/g, "") // Trim leading and trailing spaces
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
