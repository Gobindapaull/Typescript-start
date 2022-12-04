const number1 = document.querySelector('#number1') as HTMLInputElement;
const number2 = document.querySelector('#number2') as HTMLInputElement;
const button = document.querySelector('#btn');

const add = (number1: number, number2: number) => {
    return number1 + number2;
}

button.addEventListener('click', () => {
    console.log(add(+number1.value, +number2.value));
});
