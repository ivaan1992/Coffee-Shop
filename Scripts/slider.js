let propSlider = {
  slider: 
    document.getElementById('slider'),
  slide1:
    null,
}

let metSlider = {
  start:
    function() {
      setInterval(metSlider.moveSlide, 2500);
    },

  moveSlide:
    function() {    
      propSlider.slider.style.transition = 'all 1s ease';
      propSlider.slider.style.marginLeft = '-100%';

      setTimeout(function() {
        propSlider.slide1 = propSlider.slider.firstElementChild;
        propSlider.slider.appendChild(propSlider.slide1);

        propSlider.slider.style.transition = 'unset';
        propSlider.slider.style.marginLeft = 0;
      }, 1000);
    },
}

metSlider.start();