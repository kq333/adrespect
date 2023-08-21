import Macy from 'macy';

import { createNavbar } from './public/js/navbar/navbar';
import { createNavbarMobile } from './public/js/navbar-mobile/navbarMobile'
import { OffertaSection } from './public/js/offerta-section/offertaElem'
import { aboutCompanySection } from './public/js/about-company-section/aboutCompanyElem'
import { instagramBlockElem } from './public/js/instagram-block-section/instagramSectionElem'
import { footerElem } from './public/js/footer-section/footerElem'
import { gallerySection } from './public/js/gallery-section/galleryElem'
import { openPopup } from './public/js/gallery-section/openPopup'
import { openGallery } from './public/js/gallery-section/OpenGallery'
import { sliderElem } from './public/js/slider-section/sliderElem'
import { caruselEngine } from './public/js/slider-section/caruselEngine'


document.addEventListener('DOMContentLoaded', () => {
  const getNavbarElem = document.getElementById('header');
  const getOfertaSection = document.querySelector('#section-offer');
  const getAboutCompanySection = document.querySelector('#section-about-company');
  const getInstagramSection = document.querySelector('#section-instagram-block');
  const getFooterSection = document.querySelector('#footer');
  const getSliderElem = document.querySelector('#slider-section');


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

  if (getFooterSection) {
    getFooterSection.innerHTML = footerElem;
  } else {
    console.error("'footer section' not found.");
  }

  if (getSliderElem) {
    getSliderElem.innerHTML = sliderElem;
  } else {
    console.error("'slider section' not found.");
  }


  (async () => {
    const getGallerySection = document.querySelector('#section-gallery');
    if (!getGallerySection) {
      console.error("'gallery' element not found.");
      return;
    }

    const galleryHTML = await gallerySection();
    getGallerySection.innerHTML = galleryHTML;

    const getGalleryImage = document.querySelectorAll("#image-gallery-elem");
    openPopup(getGalleryImage);

    const macy = Macy({
      container: '#gallery-image',
      trueOrder: false,
      waitForImages: false,
      columns: 3,
      margin: 43,
      breakAt: {
        940: 2,
        520: 1,
        400: 1
      }
    });
    macy.run();
  })();

setTimeout(() => {

  const getImageGrid = document.querySelector("#gallery-image");
  const inlineStyle = getImageGrid.style.cssText;

  const heightValue = /height:\s*([^;]+)/.exec(inlineStyle);
  const getStartHeight = heightValue[1];


  const getGalleryGradient = document.querySelector('#gallery-gradient');
  const getOpenGallery = document.querySelector('#open-gallery');



  const windowWidth = window.innerWidth;
  console.log(`Window width: ${windowWidth}px`);

 /*  getImageGrid.classList.remove('!h-[1430px]')
  getImageGrid.style.heigh = '' */


console.log(getImageGrid)

  openGallery(getOpenGallery, getGalleryGradient, getImageGrid, getStartHeight)

}, 700);



const getBtnSliders = document.querySelectorAll('#slider-btn button');

getBtnSliders.forEach(button => {
    button.addEventListener('click', () => {
        const dataName = button.getAttribute('data-name');
        caruselEngine(dataName)
    });
});




});
