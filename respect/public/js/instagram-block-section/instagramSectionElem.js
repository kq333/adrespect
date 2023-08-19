import { instagramContent } from '../instagram-block-section/contentInstagramSection';

export const instagramBlockElem = instagramContent.map(HTMLelem => {
  return `
    <div class="bg-[#1B5B31] lg:py-[120px] lg:px-[110px] pl-6 pr-2 py-8 max-w-[1040px] mx-auto sm:flex gap-x-14 text-[#F5F0EC] items-center block">
      <div>
        <h2 class="lg:text-4xl text-2xl font-montserrat line-[120%] tracking-[1px]">
          ${HTMLelem.header}
        </h2>
      </div>
      <div class="font-inter">
        <div>
          <div class="py-6 md:py-0">
            <h3>
              ${HTMLelem.text}
            </h3>
          </div>
          <div class="py-3">
            <button class="bg-[#F5F0EC] text-[#1B5B31] pt-[10px] pl-6 pr-[24px] pb-3 border rounded-full">
              ${HTMLelem.btnText}
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
});
