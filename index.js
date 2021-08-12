import { pipe, always, applySpec } from 'ramda';

const getValue = (o, sortKey) => sortKey ? o[sortKey] : o

const sort = (list, sortKey) => {
  // SHOULD IMPLEMENT
  return list;
};

const findIndex = (list, sortKey) => value => {
  // SHOULD IMPLEMENT
  return -1;
}


const insert = (list, sortKey, item) => {
  // SHOULD IMPLEMENT a preserving order insertion
  return list;
}


const remove = (list, sortKey, value) => {
  // SHOULD IMPLEMENT
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
