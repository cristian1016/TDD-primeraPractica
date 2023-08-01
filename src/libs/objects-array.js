//dado el aaray de objetos, debo de encontrar sus claves unicas
const uniquekey = (array) => {
    // if (array.length === 0) {
    //     return [];
    // }
    // if (array.length === 1) {
    //     const element = array[0];
    //     const key = Object.keys(element);
    //     return key;
    // }
    // const uniquekeys = new Set();
    // for (const element of array) {
    //     const keys = Object.keys(element);
    //     for (const key of keys) {
    //         uniquekeys.add(key)
    //     }
    // }
    // // return [...keys];
    // return Array.from(uniquekeys);


    const arrayOfKeys = array.map((element) => Object.keys(element));
    const uniquekeys =  [].concat(...arrayOfKeys);
    const uniquekeysSet = new Set(uniquekeys);

    return Array.from(uniquekeysSet);

};


module.exports = { uniquekey };

