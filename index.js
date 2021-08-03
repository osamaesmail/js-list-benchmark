// Leave as it is
const pipe = (f, g) => (...a) => g(f(...a))


const sort = a => {
    // SHOULD IMPLEMENT
    return a;
};

const findIndex = a => b => {
    // SHOULD IMPLEMENT
    return -1;
}


const insert = a => b => {
    // SHOULD IMPLEMENT
    return a;
}


const remove = a => b => {
    // SHOULD IMPLEMENT
    return a;
}

export const List = (initial) => {
    const items = sort(initial);

    return {
        items,
        insert: pipe(insert(items), List),
        remove: pipe(remove(items), List),
        findIndex: findIndex(items)
    }
}