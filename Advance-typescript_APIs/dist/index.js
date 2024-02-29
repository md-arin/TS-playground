"use strict";
function getAge(user1, user2) {
    return user1.age + user2.age;
}
const ans = getAge({ name: "John", age: 30 }, { name: "Lew", age: 22 });
console.log(ans);
