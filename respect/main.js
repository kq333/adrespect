import { createNavbar } from './public/js/navbar/navbar';
import { createNavbarMobile } from './public/js/navbar-mobile/navbarMobile'
import { OffertaSection } from './public/js/offerta-section/offertaElem'
import { aboutCompanySection } from './public/js/about-company-section/aboutCompanyElem'
import { instagramBlockElem } from './public/js/instagram-block-section/instagramSectionElem'


document.addEventListener('DOMContentLoaded', () => {
  const getNavbarElem = document.getElementById('header');
  const getOfertaSection = document.querySelector('#section-offer');
  const getAboutCompanySection = document.querySelector('#section-about-company');
  const getInstagramSection = document.querySelector('#section-instagram-block');


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

  if (getAboutCompanySection) {
    getAboutCompanySection.innerHTML = aboutCompanySection;
  } else {
    console.error("'about company section' not found.");
  }

  if (getInstagramSection) {
    getInstagramSection.innerHTML = instagramBlockElem;
  } else {
    console.error("'instagram section' not found.");
  }


});
