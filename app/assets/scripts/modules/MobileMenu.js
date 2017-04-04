/*import $ from 'jquery';*/

/* -- this is a jquery spaghetti code example--
class MobileMenu {
    constructor() {
        $(".menu-icon").click(function() {
            alert("the menu icon was click"); 
        });
    }
} 
*/

/*class MobileMenu {
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

export default MobileMenu;*/

import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.siteHeader = $(".site-header");
        this.menuIcon = $(".site-header__menu-icon");
        this.events();
        this.menuContent = $(".site-header__menu-content");
    }
    
    events() {
        this.menuIcon.click(this.toggleTheMenu.bind(this));
    }
    
    toggleTheMenu() {
        this.menuContent.toggleClass("site-header__menu-content--is-visible");
        this.siteHeader.toggleClass("site-header--is-expanded");
        this.menuIcon.toggleClass("site-header__menu-icon--close-x");
    }
}

export default MobileMenu;