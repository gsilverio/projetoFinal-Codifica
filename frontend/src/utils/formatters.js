export const formatPrice = (price) => {
  const params = { maximumFractionDigits: 2, minimumFractionDigits: 2 };
  return new Intl.NumberFormat("pt-Br", params).format(price);
};
