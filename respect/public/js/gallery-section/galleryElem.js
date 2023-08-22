import { fetchRandomImages } from '../Api/api';

export const updateButton = (isOpen) => {

  const buttonText = isOpen ? 'Zwiń' : 'Rozwiń';
  const imgSrc = !isOpen ? '../../icons/gallery-section/arrowDown.svg' : '../../icons/gallery-section/arrow-up.svg';

  return `
    <button id="open-gallery" class="flex items-center gap-x-2 font-inter pt-3 pl-5 pb-3 pr-5 border-2 rounded-full border-black hover:opacity-50">
      ${buttonText}
      <img src="${imgSrc}" alt="icon">
    </button>
  `;
};

export const gallerySection = async () => {

  try {
    const images = await fetchRandomImages();
    const imageElements = images.map(HTMLelem => {
      return `
        <img src="${HTMLelem.download_url}" alt="cat Image" class="z-0 hover:opacity-50 cursor-pointer transition-transform transform scale-105 hover:scale-110" id="image-gallery-elem">
      `;
    });

    const htmlString = imageElements.join('');

    return `
      <div class="bg-[#DCC1AB] relative">
        <div class="md:px-40 px-4 md:pt-32 pt-16 md:pb-24 pb-16">
          <div class="text-[#1B5B31] font-inter text-xs">Realizje</div>
          <h2 class="md:text-5xl text-3xl font-medium font-Montserrat py-4">
            Nasze <span class="md:text-5xl text-3xl font-medium font-Montserrat py-4 italic">projekty</span>
          </h2>
        </div>

        <div class="overflow-hidden z-0 md:!h-[1430px] !h-[700px]" id="gallery-image">
          ${htmlString}
        </div>

        <div id="gallery-gradient" class="h-[300px]  w-full z-20 bottom-0 absolute bg-gradient-to-t from-[#DCC1AB] to-[rgba(214, 183, 158, 0.00)] bg-transparent">
        </div>
        <div class="bottom-20 z-40 flex justify-center absolute w-full" id="btn-wrapper">
        ${updateButton()}
        </div>
      </div>
    `;
  } catch (error) {
    console.error('Error fetching random images:', error);
    return '';
  }
};
