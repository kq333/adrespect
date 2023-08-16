import { createNavbar } from './public/js/navbar/navbar';
import { createNavbarMobile } from './public/js/navbar/navbar-mobile/navbarMobile'

document.addEventListener('DOMContentLoaded', () => {
  const getNavbarElem = document.getElementById('header');


  if (getNavbarElem) {
    getNavbarElem.appendChild(createNavbar());
    getNavbarElem.appendChild(createNavbarMobile());
  } else {
    console.error(" 'navbar' not found.");
  }


});
