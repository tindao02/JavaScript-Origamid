const initTabNav = () => {
  const tabMenu     = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent  = document.querySelectorAll('[data-tab="content"] section');
  tabContent[0].classList.add('ativo');

  if(tabMenu.length && tabContent.length) {
    const activeTab = (index) => {
      tabContent.forEach(section => section.classList.remove('ativo'));
      const direcao = tabContent[index].dataset.anime;
      tabContent[index].classList.add('ativo', direcao);
    }
    
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => activeTab(index));
    });
  }
}
initTabNav();


const initAccordion = () => {
    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt'); 
    if(accordionList.length) {  
      accordionList[0].classList.add('ativo');
      accordionList[0].nextElementSibling.classList.add('ativo');

      function activeAccordion() {
        this.classList.toggle('ativo');
        this.nextElementSibling.classList.toggle('ativo');
      }

      accordionList.forEach(item => item.addEventListener('click', activeAccordion));
    }
}
initAccordion();

const initScrollSuave = () => {

  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    //const topo = section.offsetTop;

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    // window.scrollTo(0, topo);

    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth',
    // });
  }

  linksInternos.forEach(link => link.addEventListener('click', scrollToSection));
}
initScrollSuave();

const initAnimacaoScroll = () => {
  const sections = document.querySelectorAll('[data-anime="scroll"');

  if(sections.length) {
    const windowMetade = window.innerHeight * 0.6;
  
    const animaScroll = () => {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top - windowMetade;
        if(sectionTop < 0) {
          section.classList.add('ativo');
        }
      })
    }
    animaScroll();
    
    window.addEventListener('scroll', animaScroll);
  }
}
initAnimacaoScroll();