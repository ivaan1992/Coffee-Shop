let propTabs = {
  first_header: document.getElementById('links-header-menu').firstElementChild,
  first_content: document.getElementById('menu-coffee-content').firstElementChild,
  header_links: document.querySelectorAll('#links-header-menu li a'),
  li_header: document.querySelectorAll('#links-header-menu li'),
  divs_content: document.querySelectorAll('#menu-coffee-content div'),
  content_active: null,
}

let metTabs = {
  start: function() {
    propTabs.first_header.className = 'active';
    for(let i=0; i<propTabs.header_links.length; i++) {
      propTabs.header_links[i].addEventListener('click', metTabs.event);
    }
  },

  event: function(e) {
    e.preventDefault();
    deleteAllActivesAndAddActiveToElement(e.target.parentElement)
    
    const reference = e.target.getAttribute('href')
    const desserts = document.querySelector("#desserts")
    const drinks = document.querySelector("#drinks")
    
    if(reference == "#drinks") {
      addHideClassAndRemove(desserts, drinks)
      return 
    }
    addHideClassAndRemove(drinks, desserts)

  }
}

function deleteAllActivesAndAddActiveToElement(element) {
  document.querySelectorAll('.active').forEach(activeElement => activeElement.classList.remove('active'))

  element.classList.add('active')
}

function addHideClassAndRemove(element, secondElement) {
  element.classList.add('hide')
  secondElement.classList.remove('hide')
}

metTabs.start();