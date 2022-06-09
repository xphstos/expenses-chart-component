export const randomNumberRange = (min = 20, max = 100) =>
  Number(Math.random() * (max - min) + min);

export const numberFormat = (
  number,
  maximumSignificantDigits = 4,
  locale = "en-US",
  currency = "USD"
) =>
  new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumSignificantDigits,
  }).format(number);
