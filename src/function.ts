type Name = {name: string, price: number}

function printName(arg: Name) {
    console.log(arg.name)
    console.log(arg.price)
}

printName({name: "BTC", price: 70000})
