export function capitalize(str) {
  const upperAll = str.toUpperCase();
  return upperAll.slice(0, 1) + upperAll.slice(1).toLowerCase();
}
