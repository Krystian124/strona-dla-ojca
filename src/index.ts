import { Component1 } from './components/Component1/Component1';
import { Component2 } from './components/Component2/Component2';
import { Component3 } from './components/Component3/Component3';
import { Component4 } from './components/Component4/Component4';

const app = document.getElementById('app');

if (app) {
    const component1 = new Component1();
    const component2 = new Component2();
    const component3 = new Component3();
    const component4 = new Component4();

    app.innerHTML += component1.render();
    app.innerHTML += component2.render();
    app.innerHTML += component3.render();
    app.innerHTML += component4.render();
}