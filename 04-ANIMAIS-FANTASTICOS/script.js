const tabMenu     = document.querySelectorAll('.js-tabmenu li');
const tabContent  = document.querySelectorAll('.js-tabconteudo section');
tabContent[0].classList.add('ativo');

if(tabMenu.length && tabContent.length) {
  const activeTab = (index) => {
    tabContent.forEach(section => section.classList.remove('ativo'));
    tabContent[index].classList.add('ativo');
    console.log(index);
  }

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => activeTab(index));
  });
}