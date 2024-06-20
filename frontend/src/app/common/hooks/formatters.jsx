export function formattedPrice(price) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

export function capitalizeWords(str) {
  if (!str) return "";
  return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
}

export function formattedPhone(number) {
  if (!number) return "No Phone"; // Return a default message if the phone number is not provided
  const cleaned = ("" + number).replace(/\D/g, "");
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return "(" + match[1] + ") " + match[2] + "-" + match[3];
  }
  return "Invalid Number"; // Return a message for invalid numbers
};