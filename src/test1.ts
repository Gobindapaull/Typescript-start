// variable
export var x: string = "welcome";

// simple function
export function myFunction(): void {
    console.log('my little function for test');
}

// class
export class myClass {
    a: number;
    b: number;
    constructor(_a: number, _b: number) {
        this.a = _a;
        this.b = _b;
    }
    add = () => {
        return(this.a + this.b);
    }
}
