"use strict";
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
const user = {
    username: "JohnDoe",
    age: 25,
    firstname: "John"
};
console.log(isLegal(user));
