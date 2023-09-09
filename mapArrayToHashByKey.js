const mapArrayToHashByKey = (array, key) => {
    if (array === null || array === undefined) {
        return { [`_${key}s`]: [] };
    }

    return array.reduce(
        (res, item) =>
            item && item.hasOwnProperty(key)
                ? {
                    ...res,
                    [item[key]]: item,
                    [`_${key}s`]: [...(res[`_${key}s`] || []), item[key]],
                }
                : res,
        { [`_${key}s`]: [] }
    );
};

const data = [
    {
        id: 1,
        age: 25,
        address: {
            city: "New York",
            zipCode: 10001,
        },
        name: "John",
        surname: "Doe",
    },
    {
        id: 2,
        age: 30,
        address: {
            city: "Los Angeles",
            zipCode: 90001,
        },
        name: "Jane",
        surname: "Smith",
    },
];


const hash = mapArrayToHashByKey(data, 'age');
console.log(hash)
