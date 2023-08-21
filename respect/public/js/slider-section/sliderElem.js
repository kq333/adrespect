import { sliderContent } from '../slider-section/sliderContent';

export const sliderElem = sliderContent.map(HTMLelem => {
  return `
  <div class="block gap-x-16 bg-[#DCC1AB] xl:flex">
  <div class="max-w-[688px]">
    <div class="pt-[144px] pl-[45px] pr-[45px]">
      <h2 class="md:text-6xl text-3xl font-monserrat font-medium">
        ${HTMLelem.header}
      </h2>
      <p class="text-base font-inter pt-[44px]">
        ${HTMLelem.text}
      </p>
    </div>
    <div class="py-18 pt-[72px] pb-[144px] pl-[45px] w-[688px] block md:flex gap-x-9">
      <button class="bg-[#1B5B31] pt-[12px] pl-[24px] pr-[24px] pb-[14px] border-[#1B5B31] rounded-full hover:opacity-50 text-[#F5F0EC] mb-[30px] md:mb-0">
        ${HTMLelem.btnText}
      </button>
      <a href="#section-gallery">
        <button class="border-2 sm:pt-[12px] pt-[8px] sm:pl-[24px] pl-[20px] sm:pr-[24px] pr-[20px] sm:pb-[14px] pb-[10px] border-[#1B5B31] rounded-full hover:opacity-50 text-[#1B5B31]  flex items-center gap-x-2">
          ${HTMLelem.btnText2}
          <span>
            <img src="${HTMLelem.btn2Img}" alt="icon">
          </span>
        </button>
      </a>
    </div>
  </div>
  <div class="relative">
    <div id="slider-image-content" class="md:h-[737px] md:w-[496px] overflow-hidden">

      <div class="h-[691px] md:w-full" id="#slider-image-content">
        <img class="h-[95%] w-full object-fill absolute" src="./public/icons/about-company-image/PhotoAboutCompany.png" alt="image">
      </div>
    </div>
    <div id="slider-btn" class="absolute bottom-0  right-0 justify-self:flex-end gap-x-8 flex bg-[#F5F0EC] px-6 py-6">
      <button data-name="-1" class="hover:cursor-pointer hover:opacity-50">
        <img src="${HTMLelem.sliderBtn}" alt="icon">
      </button>
      <button data-name="1" class="hover:cursor-pointer hover:opacity-50">
        <img src="${HTMLelem.sliderBtn2}" alt="icon">
      </button>
    </div>
  </div>
</div>

  `;
});
