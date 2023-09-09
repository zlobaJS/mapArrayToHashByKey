const mapArrayToHashByKey = (array, key) =>
    array.reduce(
        (result, item) =>
            item && item.hasOwnProperty(key)
                ? {
                    ...result,
                    [item[key]]: item,
                    [`_${key}s`]: [...(result[`_${key}s`] || []), item[key]],
                }
                : result,
        { [`_${key}s`]: [] }
    );

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