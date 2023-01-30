class Lamp {
    isOn = false;
    constructor() {
    }
    turnOn (){
        this.isOn = true;
    }
    turnOff() {
        this.isOn = false;
    }
    showInfo() {
        console.log(`ON: ${this.isOn}`);
    }
}
class Switch {
    isOn = false;
    constructor(Lamp) {
        this.lamp = Lamp;
    }
    connectToLamp (Lamp){
        this.lamp = Lamp;
    }
    turnOn (){
        this.isOn = true;
        if (this.lamp !== undefined) {
            this.lamp.turnOn();
        }
    }
    turnOff() {
        this.isOn = false;
        if (this.lamp !== undefined) {
            this.lamp.turnOff();
        }
    }
    showInfo() {
        console.log(`ON: ${this.isOn}, connected to ${this.lamp}`);
    }
}

let aLamp = new Lamp();
let aSwitch = new Switch();
aLamp.showInfo();
aSwitch.showInfo();

aSwitch.connectToLamp(aLamp);
aSwitch.showInfo();

aSwitch.turnOn();
aLamp.showInfo();
aSwitch.showInfo();

aSwitch.turnOff();
aLamp.showInfo();
aSwitch.showInfo();
