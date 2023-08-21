import { navbarContent } from './content.js';
import { searchInputTemplate } from './searchElem.js';

export function createNavbar() {
  const navbarElem = document.createElement('nav');
  navbarElem.classList.add('md:block', 'hidden');

  navbarContent.forEach(contentData => {
    const ul = document.createElement('ul');
    ul.classList.add(
     'flex', 'justify-end', 'pt-6', 'pb-6','pl-[89px]','pr-[89px]','gap-x-12','md:pl-[45px]', 'md:pr-[45px]', 'max-lg:gap-x-4'
    );

    if (contentData.logo) {
      const elemSpan = document.createElement('span');
      elemSpan.classList.add('flex', 'justify-center', 'items-center')

      const elemLi = document.createElement('li');
      elemLi.classList.add('mr-auto');
      elemLi.appendChild(elemSpan);

      const logoImg = document.createElement('img');
      elemSpan.appendChild(logoImg);
      logoImg.src = contentData.logo;
      logoImg.alt = 'Logo';
      ul.appendChild(elemLi);
    }

    contentData.menuItems.forEach(menuItem => {
      const menuItemElem = document.createElement('li');
      menuItemElem.classList.add('flex', 'relative', 'justify-end');
      const span = document.createElement('span');
      span.classList.add('flex', 'justify-center', 'items-center', 'text-sm')
      menuItemElem.appendChild(span);
      span.textContent = menuItem.text;

      if (menuItem.logo) {
        const spanElem = document.createElement('span');

        const menuItemLogo = document.createElement('img');
        spanElem.classList.add('flex', 'pl-1', 'z-50');

        spanElem.appendChild(menuItemLogo);
        menuItemLogo.src = menuItem.logo;
        menuItemLogo.alt = 'MenuItem Logo';

        menuItemLogo.classList.add('cursor-pointer', 'z-10');

        menuItemLogo.addEventListener('click', () => {
          const submenu = menuItemElem.querySelector('ul');
          submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';

          if (submenu.style.display === 'block') {
            submenu.style.position = 'absolute';
            submenu.style.zIndex = '20';
            submenu.style.color = 'white';
            submenu.style.paddingTop = '30px';
            submenu.classList.add('animate-roll-down');
          } else {
            submenu.style.position = 'static';
            submenu.style.display = 'none';
            submenu.style.paddingTop = '0';
          }
        });

        spanElem.appendChild(menuItemLogo);
        menuItemElem.appendChild(spanElem);
      }

      if (menuItem.content) {
        const submenu = document.createElement('ul');
        submenu.classList.add('hidden');

        menuItem.content.forEach(submenuItemText => {
          const submenuItem = document.createElement('li');

          submenuItem.classList.add('pt-4','py-2', 'cursor-pointer', 'flex', 'justify-center' , 'hover:text-slate-500' );

          submenuItem.textContent = submenuItemText;
          submenu.appendChild(submenuItem);
        });

        menuItemElem.appendChild(submenu);
      }

      ul.appendChild(menuItemElem);
    });

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

    navbarElem.appendChild(ul);
  });

  return navbarElem;
}
