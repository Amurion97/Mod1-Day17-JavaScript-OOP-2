class Cat {
    foodCount = 0;

    constructor(name, weight, speed) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
    }

    eat(mouse) {
        if (mouse.isAlive && mouse.speed < this.speed) {
            this.weight += mouse.weight / 2;
            mouse.die();
            this.foodCount++;
        }
    }

    showInfo() {
        console.log(`${this.name} the cat weighs ${this.weight}, ate ${this.foodCount} mice.`)
    }
}

class Mouse {
    constructor(name, weight, speed) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.isAlive = true;
    }

    die() {
        this.isAlive = false;
    }

    showInfo() {
        if (this.isAlive) {
            console.log(`${this.name} the mouse weighs ${this.weight}, is still alive.`)
        } else {
            console.log(`${this.name} the mouse is dead.`)
        }

    }
}

let mickey = new Mouse("Mickey", 150, 15);
mickey.showInfo();
// mickey.die();
mickey.showInfo();
let tom = new Cat("Tom", 200, 20);
console.log(tom);
let jerry = new Mouse("Jerry", 100, 25);
console.log(jerry);
tom.eat(mickey);
tom.eat(jerry);
tom.showInfo();
mickey.showInfo()