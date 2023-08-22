
import { gallerySection, updateButton} from './galleryElem'

let isOpen = false;

export const openGallery = (btnEvent, htmlElem, galleryElem, galleryheight) => {

    btnEvent.addEventListener('click', () => {
        isOpen = !isOpen;

        updateButton(isOpen);
        gallerySection();

      const galleryHeight = parseInt(galleryheight) + 140;
      const finalOpenedGallery = (galleryHeight.toString() + "px");
      const windowWidth = window.innerWidth;

        if (isOpen) {

          galleryElem.classList.remove('md:!h-[1430px]');
          galleryElem.classList.remove('!h-[700px]');
          galleryElem.classList.add('animate-dropdown');

          galleryElem.style.height = finalOpenedGallery;
          htmlElem.style.display = 'none';

        } else {

            if (windowWidth <= 768) {
                galleryElem.style.height = '800px';
                htmlElem.style.display = 'block';

            } else {
                galleryElem.style.height = '1430px';
                htmlElem.style.display = 'block';
            }
        }
    })
};
