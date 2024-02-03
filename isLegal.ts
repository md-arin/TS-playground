interface User {
    username: string,
    age: number,
    firstname: string
}

function isLegal(user: User){

    if(user.age>18){
        return true;
    } else{
        return false;
    }
}

const user : User = {
    "username": "JohnDoe", 
    "age" : 25, 
    "firstname":"John"
}

console.log(isLegal(user));