export const orderBy = field => (a, b) =>
  a[field] > b[field] ? 1 : b[field] > a[field] ? -1 : 0;
