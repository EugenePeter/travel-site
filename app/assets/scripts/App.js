/* 

var $ = require('jquery');
import Person from './modules/Person';


class Adult extends Person {
    payTaxes() {
        console.log(this.name + " now owes 0$ in taxes. ");
    }
}


var Eugene = new Person("Eugene Peter", "black"),
    Penelope = new Adult("Penelope Eden", "blue-green");


Eugene.greet(); 
Penelope.greet();

Penelope.payTaxes();

*/



import MobileMenu from './modules/MobileMenu'; 

var mobileMenu = new MobileMenu();

