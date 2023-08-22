export const openPopup = (galleryImageElements) => {
    const getAppElem = document.querySelector('#app');
    const popupContainer = document.createElement('div');
    popupContainer.id = 'popup';
    popupContainer.className = 'fixed inset-0 flex items-center justify-center hidden bg-[#DCC1AB] z-50';


    const hideScrollbar = () => {
      document.body.style.overflow = 'hidden';
    };

    const showScrollbar = () => {
      document.body.style.overflow = 'auto';
    };

    galleryImageElements.forEach((elem) => {
      elem.addEventListener('click', () => {
        const popupHTML = `
          <div class="bg-white w-1/2 p-6 rounded-lg shadow-lg z-50">
            <img src="${elem.src}" alt="Popup Image" class="mx-auto  md:max-w-md">
            <button id="closePopup" class="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Zamknij</button>
          </div>
        `;

        popupContainer.innerHTML = popupHTML;

        getAppElem.appendChild(popupContainer);

        popupContainer.classList.remove('hidden');

        hideScrollbar();

        const closePopupButton = popupContainer.querySelector('#closePopup');
        closePopupButton.addEventListener('click', () => {
          popupContainer.classList.add('hidden');
          popupContainer.innerHTML = '';
          showScrollbar();
        });
      });
    });
  };
