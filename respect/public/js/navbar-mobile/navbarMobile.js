
import { navbarContent } from '../navbar/content';
import { searchInputTemplate } from '../navbar/searchElem';

export function createNavbarMobile() {
  const navbarElem = document.createElement('nav');
  navbarElem.id = 'navbar-mobile';
  navbarElem.classList.add('md:hidden', 'block');

  const getAppElem = document.querySelector('#header');

  const ul = document.createElement('ul');
  ul.classList.add(
    'flex', 'justify-end', 'py-5', 'px-10', 'gap-x-8', 'h-[82px]'
  );

  navbarContent.forEach(contentData => {
    if (contentData.logo) {
      const elemLi = document.createElement('li');
      elemLi.classList.add('mr-auto', 'flex', 'items-center');

      const elemSpan = document.createElement('span');
      elemSpan.classList.add('flex', 'justify-center', 'items-center');

      const logoImg = document.createElement('img');
      logoImg.src = contentData.logo;
      logoImg.alt = 'Logo';

      elemSpan.appendChild(logoImg);
      elemLi.appendChild(elemSpan);
      ul.appendChild(elemLi);
    }


  if (contentData.searchLogo) {

    const elemSpan = document.createElement('span');
    const elemLi = document.createElement('li');
    elemLi.classList.add('flex', 'justify-center', 'items-center', 'hover:cursor-pointer')

    elemLi.appendChild(elemSpan)

    const searchLogoImg = document.createElement('img');
    elemSpan.appendChild(searchLogoImg);


    searchLogoImg.src = contentData.searchLogo;
    searchLogoImg.alt = 'Search Icon';
    ul.appendChild(elemLi);

    searchLogoImg.addEventListener('click', () => {
      ul.removeChild(elemLi);

      const inputWrapper = document.createElement('li');
      inputWrapper.innerHTML = searchInputTemplate;

      inputWrapper.classList.add('search-input-wrapper');

      setTimeout(()=> {
        inputWrapper.classList.add('search-input-open');
      }, 10)

      const closeButtonSpan = inputWrapper.querySelector('#closeElem');
      closeButtonSpan.classList.add('hover:cursor-pointer');
      closeButtonSpan.addEventListener('click', () => {

        ul.removeChild(inputWrapper);
        ul.appendChild(elemLi);

      });

      ul.appendChild(inputWrapper);
    });
  }

  const elemLis = document.createElement('li');
  elemLis.classList.add('order-last', 'flex', 'items-center', 'hover:cursor-pointer')
  const elemSpans = document.createElement('span');

  elemLis.appendChild(elemSpans);
  const logoImgs = document.createElement('img');
  logoImgs.id = 'menu';
  elemSpans.appendChild(logoImgs);
  logoImgs.src = '../../../icons/menu.svg';
  logoImgs.alt = 'menu';
  ul.appendChild(elemLis);

  });


function createOpenMenu() {

  const createElem = document.createElement('div');
  createElem.id = 'mobile-menu-wrapper';

  createElem.classList.add('h-full', 'w-full', 'bg-slate-500', 'fixed', 'top-0', 'z-10', 'md:hidden');
  createElem.classList.add('slider');


    getAppElem.appendChild(createElem);

    const createWrapperElem = document.createElement('div');
    createWrapperElem.classList.add('max-w-md', 'mx-auto', 'pr-4', 'pl-4');

    createElem.appendChild(createWrapperElem);

    const createElemDiv = document.createElement('div');
    createElemDiv.classList.add('flex', 'justify-end', 'mt-10')
    createWrapperElem.appendChild(createElemDiv);

    const createElemImg = document.createElement('img');

    createElemImg.src = '../../../icons/close.svg'
    createElemImg.classList = 'close-mobile-menu'

    createElemDiv.appendChild(createElemImg)
    const crateUl= document.createElement('ul');
    crateUl.classList.add('mx-auto', 'mt-40');
    createWrapperElem.appendChild(crateUl)


navbarContent.forEach(contentData => {

    contentData.menuItems.forEach(contentText => {

        if (contentText.text) {
            const createLi = document.createElement('li');
            createLi.classList.add('py-4');
            const spanElem = document.createElement('div');
            spanElem.classList.add('text-2xl', 'flex');
            createLi.appendChild(spanElem)

            crateUl.appendChild(createLi);
            spanElem.innerText =  contentText.text;


            if(contentText.logo) {

                const divElem = document.createElement('div');
                divElem.classList.add('flex', 'items-center', 'pl-2')
                createLi.appendChild(divElem)
                spanElem.appendChild(divElem)
                const createElemImg = document.createElement('img');
                createElemImg.src = contentText.logo;
                createElemImg.alt = 'btn Menu';
                createElemImg.id = 'submenu-mobile'
                divElem.appendChild(createElemImg);

            }

            if (contentText.content) {
                const submenu = document.createElement('ul');
                submenu.id = 'submenu-list'
                submenu.classList.add('hidden')
                contentText.content.forEach(elem => {
                    const createElemLi = document.createElement('li');
                    createElemLi.classList.add('pt-2')
                    submenu.appendChild(createElemLi);
                    createElemLi.innerText = elem
                })

                createLi.appendChild(submenu)
            }
        }
    })
})

}

  navbarElem.appendChild(ul);

  document.addEventListener('click', () => {

    const parentContainer = document.querySelector('#navbar-mobile');
    const menuImage = parentContainer.querySelector('#menu');

    menuImage.addEventListener('click', () => {

      const getOpenmobileMenu = document.querySelector('#mobile-menu-wrapper');

      if (!getOpenmobileMenu) {

        createOpenMenu();

        const getCloseMobileMenu = document.querySelector('.close-mobile-menu')

        getCloseMobileMenu.addEventListener('click', () => {

          const getmobileMenuWrapper = document.querySelector('#mobile-menu-wrapper');

          getmobileMenuWrapper.remove();
         });

         const getSubmenuMobile = document.querySelector('#submenu-mobile');
         const getSubmenuMobileList = document.querySelector('#submenu-list');

         getSubmenuMobile.addEventListener('click', () => {

         const getClassName =  getSubmenuMobileList.classList
         const classNames = Array.from(getClassName).join(' ');

          if (classNames.includes('hidden')) {

            getSubmenuMobileList.classList.remove('hidden');
            getSubmenuMobileList.classList.add('animate-roll-down');
            getSubmenuMobileList.classList.add('block');

          } else {
            getSubmenuMobileList.classList.remove('animate-roll-down');
            getSubmenuMobileList.classList.remove('block');
            getSubmenuMobileList.classList.add('hidden');

          }
         })
      }
    });
  });

  return navbarElem;
}
