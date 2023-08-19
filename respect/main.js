import { createNavbar } from './public/js/navbar/navbar';
import { createNavbarMobile } from './public/js/navbar/navbar-mobile/navbarMobile'

import { OffertaSection } from './public/js/navbar/offerta-section/offertaElem'

document.addEventListener('DOMContentLoaded', () => {
  const getNavbarElem = document.getElementById('header');
  const getOfertaSection = document.querySelector('#section-offer');

 
  if (getNavbarElem) {
    getNavbarElem.appendChild(createNavbar());
    getNavbarElem.appendChild(createNavbarMobile());
  } else {
    console.error(" 'navbar' not found.");
  }

  if (getOfertaSection) {
    getOfertaSection.innerHTML = OffertaSection;
  } else {
    console.error("'offerta section' not found.");
  }


});
