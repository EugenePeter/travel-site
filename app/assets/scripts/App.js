
/*var $ = require('jquery');
import Person from './modules/Person';


class Adult extends Person {
    payTaxes() {
        console.log(this.name + " now owes 0$ in taxes. ");
    }
}


var Eugene = new Person("Eugene Peter", "black");

Eugene.greet();

var   Penelope = new Adult("Penelope Eden", "blue-green");

Penelope.greet();
Penelope.payTaxes();*/


/*
var $ = require('jquery');

import MobileMenu from './modules/MobileMenu'; 

var mobileMenu = new MobileMenu();
*/

import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';
 
var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "75%");
new RevealOnScroll($(".testimonial"), "90%");

var stickyHeader = new StickyHeader();
var modal = new Modal();





