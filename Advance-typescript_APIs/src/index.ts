interface User {
    id: string,
    name: String,
    age: number,
    email: string,
    password: string
}

type updateProps = Pick <User, 'name' | 'age' | 'email' >;

type updatePropsOptional = Partial <updateProps>;

function updateUser(updatedprops: updateProps){

}
