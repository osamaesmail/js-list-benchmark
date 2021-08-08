import { pipe } from 'ramda';

const getValue = (o, attr) => attr ? o[attr] : o

export const sort = (list, attr) => {
  // SHOULD IMPLEMENT
  return list;
};

export const findIndex = (list, attr) => value => {
  // SHOULD IMPLEMENT
  return -1;
}


export const insert = (list, attr) => item => {
  // SHOULD IMPLEMENT
  return list;
}


export const remove = (list, attr) => item => {
  // SHOULD IMPLEMENT
  return list;
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
