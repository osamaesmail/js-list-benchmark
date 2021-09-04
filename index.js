import { pipe, always, applySpec } from 'ramda';
import TimSort from 'timsort';

const getValue = (o, sortKey) => sortKey ? o[sortKey] : o;

const sort = (list, sortKey) => {
  // SHOULD IMPLEMENT
  TimSort.sort(list, (a, b) => getValue(a, sortKey) - getValue(b, sortKey));
  return list;
};

const findIndex = (list, sortKey) => value => {
  // SHOULD IMPLEMENT
  let low = 0, high = list.length - 1;
  while (low <= high) {
    const mid = (low + high) >>> 1;
    if (getValue(list[mid], sortKey) === value) return mid;
    if (getValue(list[mid], sortKey) < value) {low = mid + 1}
    else {high = mid - 1}
  }
  return -1;
}


const insert = (list, sortKey, item) => {
  // SHOULD IMPLEMENT a preserving order insertion
  let i = list.length - 1;
  for (; i >= 0 && getValue(list[i], sortKey) > item; i--) {
    list[i + 1] = list[i];
  }
  list[i + 1] = item;
  return list;
}


const remove = (list, sortKey, value) => {
  // SHOULD IMPLEMENT
  const pos = findIndex(list, sortKey)(value);
  if (pos === -1) {return list}
  let left = pos - 1, right = pos + 1;
  while (getValue(list[left]) === value) {left--}
  while (getValue(list[right]) === value) {right++}
  list.splice(left + 1, right - left - 1);
  return list;
}

export const List = ({ sortKey, initial, initialOrder}) => {
  const items = initialOrder ? initial : sort(initial, sortKey);

  return {
    items,
    findIndex: findIndex(items, sortKey),
    remove: value => List({
      sortKey,
      initial: remove(items, sortKey, value),
      initialOrder: true
    }),

    insert: item => List({
      sortKey,
      initial: insert(items, sortKey, item),
      initialOrder: true
    })
  }
}
