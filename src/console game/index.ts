import chalk from 'chalk'
import inquirer from 'inquirer';

class Player {
    constructor(_name) {
        this.fuel = 100;
        this.name = _name;
    }
}
class Opponent {
    constructor(_name) {
        this.fuel = 100;
        this.name = _name;
    }
}
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Please enter your name"
});
let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Select your opponent",
    choices: ["Skeleton", "Assassin", "Zombie"]
});
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);

if (opponent.select == "Skeleton") {
    console.log(`${chalk.bold.red(p1.name)} VS ${chalk.bold.green(o1.name)}`)
    let ask = await inquirer.prompt({
        type: "list",
        name: "opt",

        choices: ["Attack", "Drink Portion", "Run for your life.."]
    })

    if (ask.opt == "Attack") {
        console.log('attack')
    }
    if (ask.opt == "Drink Portion") {
        console.log('drink portion')
    }
    if (ask.opt == "Run for your life..") {
        console.log('run for your life..')
    }
}
