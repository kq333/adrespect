import { fetchRandomImages } from '../Api/api';

let counter = 0;

export const caruselEngine = (param) => {
  const getsliderImageWrapper = document.querySelector('#slider-image-content');
  
  const getImages = async () => {
    try {
      const data = await fetchRandomImages();
      const arrLength = data.length;

      if (param === '1') {
        counter++;

        if (counter === arrLength) {
          counter = 0;
        }
      }

      if (param === '-1') {
        counter--;

        if (counter === -1) {
          counter = arrLength - 1;
        }
      }

      const img = `
      <div class="h-[691px] md:w-full">
        <img class="xl:h-[95%] xl:w-[88%] h-full w-full object-fill absolute   animate-fade-in-out" alt = "image"
        src="${data[counter].download_url}"
        >
      </div>
      `;
      getsliderImageWrapper.innerHTML = img;
    } catch (error) {
      console.log(error);
    }
  };

  getImages();
};
