class Cat {
    foodCount = 0;
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    eat(mouse){
        this.weight += mouse.weight/2;
        mouse.die();
        this.foodCount ++;
    }
    showInfo(){
        console.log(`${this.name} the cat weighs ${this.weight}, ate ${this.foodCount} mice.`)
    }
}
class Mouse {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
        this.isAlive = true;
    }
    die (){
        this.isAlive = false;
    }
    showInfo(){
        if (this.isAlive){
            console.log(`${this.name} the mouse weighs ${this.weight}, is still alive.`)
        } else {
            console.log(`${this.name} the mouse is dead.`)
        }

    }
}
let mickey = new Mouse("Mickey", 150);
mickey.showInfo();
mickey.die();
mickey.showInfo();