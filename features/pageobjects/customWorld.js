import { setWorldConstructor } from '@cucumber/cucumber';

class CustomWorld {
    constructor() {
        this.variable = 0;
    }

    setTo(value) {
        this.variable = value;
    }

    incrementBy(value) {
        this.variable += value;
    }
}

setWorldConstructor(CustomWorld);
