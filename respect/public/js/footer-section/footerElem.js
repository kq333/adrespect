import { footerContent } from '../../js/footer-section/footerContent';

export const footerElem = footerContent.map(HTMLelem => {
  return `
    <div class="text-[#F5F0EC] bg-[#111] lg:py-16 lg:px-52 py-4 px-4">
      <div class="max-w-[1040px]">
        <div class="xl:flex block md:mx-auto justify-between items-center">
          <div class="flex justify-center pt-[22px]">
            <img src="${HTMLelem.logo}" alt="logo">
          </div>
          <div class="lg:flex block items-center md:justify-end gap-x-6">
            <div class="flex justify-center pt-[22px]">${HTMLelem.header}</div>
            <div class="flex justify-center pt-[22px]">
              <button class="bg-[#1B5B31] pt-[12px] pl-[12px] pr-[12px] pb-[14px] border-[#1B5B31] rounded-full hover:opacity-50">
                ${HTMLelem.headerBtnText}
              </button>
            </div>
          </div>
        </div>
        <div class="py-16">
          <div class="border-2 border-l-4 border-[#F5F0EC]"></div>
        </div>
        <div class="xl:flex block justify-between">
          <div class="flex md:gap-x-12 gap-x-1 justify-between text-xs sm:text-base">
            <div>${HTMLelem.contact}</div>
            <div>${HTMLelem.instagram}</div>
            <div>${HTMLelem.facebook}</div>
            <div>${HTMLelem.linkedIn}</div>
          </div>
          <div class="flex flex-col justify-end">
            <div class="sm:flex mx-auto  block md:gap-x-12 gap-x-8 justify-center py-4 xl:py-0 text-base">
              <div class="text-center sm:text-left">${HTMLelem.tel}</div>
              <div class="py-2 sm:py-0">${HTMLelem.email}</div>
            </div>
          </div>
        </div>
        <div class="sm:flex block items-center justify-between sm:pt-[104px]  text-xs md:text-base ">
          <div class="flex gap-x-12 justify-center">${HTMLelem.copyright}</div>
          <div class="flex flex-col justify-end">
            <div class="flex sm:gap-x-4 gap-x-1 items-center sm:justify-start  justify-center py-2">
              ${HTMLelem.madeBy}
              <img src="${HTMLelem.companyLogo}" alt="logo">
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
});
