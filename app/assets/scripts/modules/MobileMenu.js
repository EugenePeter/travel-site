import $ from 'jquery';

/* -- this is a jquery spaghetti code example--
class MobileMenu {
    constructor() {
        $(".menu-icon").click(function() {
            alert("the menu icon was click"); 
        });
    }
} 
*/

class MobileMenu {
    constructor() {
        this.menuIcon = $(".menu-icon");
        this.menuContent = $(".site-header__menu-content");
        this.events();
    }
    
    events() {
        this.menuIcon.click(this.toggleTheMenu.bind(this));
    }
    
    toggleTheMenu() {
        this.menuContent.toggleClass("site-header__menu-content--is-visible");
    }
} 

export default MobileMenu;