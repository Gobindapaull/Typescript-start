const json = JSON.parse("55");
console.log(typeof json);

const names: string[] = [];
names.push("BTC");
names.push("ETH");
console.log(names);

const f = new Function("x", "return x * x");
const _debugger = new Function("debugger");
console.log(f(4));
console.log(_debugger());
