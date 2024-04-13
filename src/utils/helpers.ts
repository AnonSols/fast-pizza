export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currencyDisplay: "narrowSymbol",
    maximumSignificantDigits: 4,
    currency: "NGN",
  }).format(value + 10000);
}

export function formatDate(dateStr: string) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateStr));
}

export function calcMinutesLeft(dateStr: string) {
  const d1 = new Date().getTime();
  const d2 = new Date(dateStr).getTime();
  return Math.round((d2 - d1) / 60000);
}
