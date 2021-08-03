// Leave as it is
const pipe = (f, g) => (...a) => g(f(...a))


const sort = a => {
    // SHOULD OPTIMIZE
    return a.sort((a, b) => a - b);
};

const findIndex = a => b => {
    // SHOULD OPTIMIZE
    return a.indexOf(b);
}


const insert = a => b => {
    // SHOULD OPTIMIZE
    return [...a, b];
}


const remove = a => b => {
    // SHOULD OPTIMIZE
    return a.filter(i => i !== b);
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