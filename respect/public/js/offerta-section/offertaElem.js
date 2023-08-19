import { offertaContent } from './offertaContent'

export const OffertaSection = offertaContent.map(contentItem => {

    const cardsHTML = contentItem.card.map(cardItem => `
      <div class="bg-white max-w-[378px] rounded-lg mx-auto">
      <div class="py-12 px-10">
        <img src="${cardItem.icon}" alt="logo">
        <h3 class="pt-[34px] text-[28px]">${cardItem.cardHeader}</h3>
        <p class="pt-3 text-xs font-inter">${cardItem.cardText}</p>
        <div class="flex items-center pt-[63px]">
          <div class="text-[#1B5B31]">${cardItem.btnText}</div>
            <img src="${cardItem.btnIcon}" class="pl-1 hover:cursor-pointer" alt="arrow icon">
          </div>
        </div>
      </div>
    `);

    return `
      <div class="bg-[#F5F0EC]">
        <div class="md:px-40 md:py-24   px-14 py-12">
        <div class="mx-auto ">
          <div class="text-[#1B5B31]
          text-xs">${contentItem.smallText}</div>
          <h2 class="pt-4 md:text-5xl text-3xl font-medium">${contentItem.header}</h2>
          <p class="pt-8 tracking-tighter md:w-[70%] w-full font-inter">${contentItem.text}</p>
        </div>
        </div>
        <div class="flex md:gap-x-4  justify-center pb-40 md:flex-row   flex-col pl-[9px] pr-[9px] ">
          ${cardsHTML}
        </div>
      </div>
    `;
  });
