// tsc index.ts && node index.js

let myBool: boolean = false || true;
console.log(myBool) // always true


// array push method
let arr = ['India', 'USA', 'Russia']
arr.push("Japan")
console.log(arr)

let numOrString: (string | number)[]
numOrString = [1, 'two', 3, 'four']
console.log(numOrString)


// object with optional property
let user: {
    name: string;
    age: number;
    isAdmin: boolean;
    phone?: string;
}

user = {
    name: 'john',
    age: 25,
    isAdmin: true
}

// any type array
let arr2: any[]
arr2 = [1, 'two', true, 0, undefined, null]
console.log(arr2)

// function
let say = () => {
    console.log('Hi')
}
say()

let mul = (num: number): number => {
    return num * 2;
}

type UserType = {
    username: string;
    age: number;
    phone?: string;
}
let func = (user: UserType) => {
    console.log(user.username)
}
