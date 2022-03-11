export function findItem(label, items) {
  const item = items.find((d) => d.label == label);
  if (item) {
    return item;
  } else return false;
}
