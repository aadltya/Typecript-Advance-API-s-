interface User {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
}

type UpdateProps =  Pick<User, 'name' | 'age' | 'password'>

type UpdatePropsOptional = Partial<UpdateProps>

function updateUser(updateProps: UpdatePropsOptional) {

}
