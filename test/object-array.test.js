const {uniquekey} = require("../src/libs/objects-array");


test("La funcion no explota", () => {
    uniquekey([]);
});

test("Si recibe un array vacio, devuelve un array vacio", () => {
    // const input = [];
    // const expected = [];
    // const result = uniquekey(input);
    // expect(result).tobe(expected);

    const resultado = uniquekey([]);
    expect(resultado).toEqual([]);
});

test("Si recibe un array con un objeto vacio, devuelve un array vacio", () => {
    const resultado = uniquekey([{}]);
    expect(resultado).toEqual([]);
});


test("Si recibe un array con un objeto de una clave, devuelve esa clave", () => {
    const array = [{ name: "pepe"}]
    const resultado = uniquekey(array);
    expect(resultado).toEqual(["name"]);
});


test("Si recibe un array con un objeto con 3 claves, devuelve las claves", () => {
    const array = [{ name: "pepe", surname: "perez", age: 19}];
    const resultado = uniquekey(array);
    expect(resultado).toEqual(["name", "surname", "age"]);
});


test("Si recibe un array con dos objetos de una clave diferentes, devuelve las claves", () => {
    const array = [{ name: "pepe"}, {surname: "perez"}];
    const resultado = uniquekey(array);
    expect(resultado).toEqual(["name", "surname"]);
});
 

test("Si recibe un array con dos objetos con la misma clave, devuelve una sola clave", () => {
    const array = [{ name: "pepe"}, {name: "pote"}];
    const resultado = uniquekey(array);
    expect(resultado).toEqual(["name"]);
});


test("Si recibe un array con muchos objetos con claves diferentes e iguales, devuelve las claves unicas", () => {
    const array = [
        {name: "pepe"}, 
        {name: "pote", food:"Pizza", sport:"Futbol"}, 
        {sport:"voleyball", city:"Armenia", surname: "Lopez"}
    ];
    const resultado = uniquekey(array);
    expect(resultado).toEqual(["name", "food", "sport", "city", "surname"]);
});


