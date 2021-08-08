import { pipe } from 'ramda'

const getValue = (o, attr) => attr ? o[attr] : o

export const sort = (list, attr) => {
  // SHOULD OPTIMIZE
  return list.sort((a, b) => getValue(a, attr) - getValue(b, attr));
};

export const findIndex = (list, attr) => value => {
  // SHOULD OPTIMIZE
  return list.findIndex(i => getValue(i, attr) === value);
}


export const insert = (list, attr) => item => {
  // SHOULD OPTIMIZE
  return [...list, item];
}


export const remove = (list, attr) => value => {
  // SHOULD OPTIMIZE
  return list.filter(i => getValue(i) !== value);
}

export const List = (initial, attr) => {
  const items = sort(initial, attr);

  return {
    items,
    insert: pipe(insert(items, attr), List),
    remove: pipe(remove(items, attr), List),
    findIndex: findIndex(items, attr)
  }
}
