const originalObj = {
    key1: "1",
    key2: {key3: "2"}
}

const copiedObj = {...originalObj};

copiedObj.key1 = "2";
copiedObj.key2.key3 = "3";

console.log(originalObj);
console.log(copiedObj);