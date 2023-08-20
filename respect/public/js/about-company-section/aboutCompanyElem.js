import { aboutCompanyContent } from '../about-company-section/contentAboutCompany';

export const aboutCompanySection = aboutCompanyContent.map(HTMLelem => {
  return `
    <div class="lg:flex font-inter xl:gap-16 md:gap-8 bg-[#1B5B31] text-[#F5F0EC] block">
      <div class="md:min-w-[688px] md:min-h-[720px] relative">
        <img src="${HTMLelem.bigImage}" alt="image" class="w-full h-full object-cover">
      </div>

      <div class="py-24 xl:pl-24 md:pl-4 pl-6 pr-2">
        <div>
          <div class="text-xs">
            ${HTMLelem.smallText}
          </div>

          <h2 class="md:text-5xl font-medium py-4">${HTMLelem.header}</h2>
          <p class="text-base py-10 tracking-tighter">${HTMLelem.text}</p>

          <div class="pt-[72px]">
            <button class="flex pt-4 pr-5 pb-4 pl-6 items-center rounded-full border-2 border-[#F5F0EC] hover:opacity-50">
              ${HTMLelem.btnText}
              <img src="${HTMLelem.btnIcon}" alt="arrow image" class="pl-2">
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
});
