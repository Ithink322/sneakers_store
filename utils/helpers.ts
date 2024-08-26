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

export function conjugateTovar(count: number): string {
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return "товаров";
  }

  if (lastDigit === 1) {
    return "товар";
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    return "товара";
  } else {
    return "товаров";
  }
}
