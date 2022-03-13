let propTabs = {
  firstHeader:
    document.getElementById('menu-header').firstElementChild,
  firstContent:
    document.getElementById('menu-content').firstElementChild,
  headerLinks:
    document.querySelectorAll('#menu-header li a'),
  headerList:
  document.querySelectorAll('#menu-header li'),
  divsContent:
  document.querySelectorAll('#menu-content >div'),
  contentActive:
  null,
}

let metTabs = {

    start:
      function() {
        propTabs.firstHeader.className = 'active';
        propTabs.firstContent.className = 'active';

        for(let i=0; i<propTabs.headerLinks.length; i++) {
            propTabs.headerLinks[i].addEventListener('click', metTabs.changeMenu)
        }
    },

    changeMenu:
      function(e) {
         e.preventDefault();
         for(let i =0; i <propTabs.headerList.length; i++) {
             propTabs.headerList[i].className = '';
         }

         for(let i =0; i <propTabs.divsContent.length; i++) {
            propTabs.divsContent[i].className = 'postres cafes';
        }

        this.parentElement.className = 'active';
        propTabs.contentActive = this.getAttribute('href');
        document.querySelector(propTabs.contentActive).className = 'active';
      }

}

metTabs.start();








/*  

let propTabs = {
    firstHeader:
    document.getElementById('encabezado-menu').firstElementChild,
    firstContent:
    document.getElementById('contenido-menu').firstElementChild,
    headerLinks:
    document.querySelectorAll('#encabezado-menu li a'),
    headerList:
    document.querySelectorAll('#encabezado-menu li'),
    divsContent:
    document.querySelectorAll('#contenido-menu > div'),
}

let metTabs = {
  start:
    function() {
      propTabs.firstHeader.className = '';
      propTabs.firstContent.className = '';

      for(let i=0; i < propTabs.headerLinks.length; i++) {
          propTabs.headerLinks[i].addEventListener('click', metTabs.changeMenu);
      }
  },

  changeMenu:
    function(e) {
      e.preventDefault(e);

      for(let i = 0; i < propTabs.headerList.length; i++) {
          propTabs.headerList[i].className = '';
      }

      for(let i = 0; i < propTabs.divsContent.length; i++) {
        propTabs.divsContent[i].className = '';
    }

      this.parentElement.className = 'active';
      propTabs.contentActive = this.getAttribute('href');
      document.querySelector(propTabs.contentActive).className = 'active'; 
    },


}

metTabs.start();  */