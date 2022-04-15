let propLightbox = {
      imgContainer:
        document.getElementsByClassName('lightbox'),
      imagen: 
        null,
      imagenSrc: 
        null,
      cuerpoDom:
        document.getElementsByTagName('body')[0],
      lightboxContainer:
        null,
      modal: 
        null,
      cerrarModal:
        null,
      animation:
        'fade',
  }
  
let metLightbox = {
  inicio: 
    function() {
        for(let i = 0; i < propLightbox.imgContainer.length; i++) {
          propLightbox.imgContainer[i].addEventListener('click', metLightbox.capturaImagen);
        }
    },
  capturaImagen: 
    function() {
        propLightbox.imagen = this;
        metLightbox.lightbox();
    },
  
  lightbox: 
    function() {
      propLightbox.imagenSrc = window.getComputedStyle(propLightbox.imagen, null).backgroundImage.slice(5, -2);
      propLightbox.cuerpoDom.appendChild(document.createElement('DIV')).setAttribute('id', 'lightbox-container');
      propLightbox.lightboxContainer = document.getElementById('lightbox-container');
      propLightbox.lightboxContainer.style.width = '100%';
      propLightbox.lightboxContainer.style.height = '100%';
      propLightbox.lightboxContainer.style.position = 'fixed';
      propLightbox.lightboxContainer.style.zIndex = '1000';
      propLightbox.lightboxContainer.style.background = 'rgba(0,0,0,0.8)';
      propLightbox.lightboxContainer.style.top = '0';
      propLightbox.lightboxContainer.style.left = '0';
      propLightbox.lightboxContainer.appendChild(document.createElement('DIV')).setAttribute('id', 'modal');
      propLightbox.modal = document.getElementById('modal');
      propLightbox.modal.style.height = '100%';
      propLightbox.modal.appendChild(document.createElement('IMG')).setAttribute('src', propLightbox.imagenSrc);
      propLightbox.modal.getElementsByTagName('img')[0].setAttribute('class', 'modal-image');
      if(propLightbox.animation == 'fade') {
          document.getElementsByClassName('modal-image')[0].style.opacity = 0;
          setTimeout(function() {
              document.getElementsByClassName('modal-image')[0].style.opacity = 1;
          }, 70);
      }
      propLightbox.modal.innerHTML += '<i id="close-modal" class="fa-solid fa-xmark"></i>';
      propLightbox.cerrarModal = document.getElementById('close-modal');
      propLightbox.cerrarModal.addEventListener('click', metLightbox.cerrarModal);

    },
    cerrarModal:
      function() {
        propLightbox.cuerpoDom.removeChild(propLightbox.lightboxContainer);
      }
}
  metLightbox.inicio();

