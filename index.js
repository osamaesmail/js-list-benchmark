import { pipe, always, applySpec } from 'ramda';

const getValue = (o, attr) => attr ? o[attr] : o

const sort = (list, attr) => {
  // SHOULD IMPLEMENT
  return list;
};

const findIndex = (list, attr) => value => {
  // SHOULD IMPLEMENT
  return -1;
}


const insert = (list, attr, item) => {
  // SHOULD IMPLEMENT a preserving order insertion
  return list;
}


const remove = (list, attr, value) => {
  // SHOULD IMPLEMENT
  return list;
}

export const List = ({ attr, initial, initialOrder}) => {
  const items = initialOrder ? initial : sort(initial, attr);

  return {
    items,
    findIndex: findIndex(items, attr),
    remove: value => List({
      attr,
      initial: remove(items, attr, value),
      initialOrder: true
    }),

    insert: item => List({
      attr,
      initial: insert(items, attr, item),
      initialOrder: true
    })
  }
}
