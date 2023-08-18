import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  ul.classList.add('splide__list');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    li.classList.add('splide__slide');
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'slider-slide-image';
      else div.className = 'slider-slide-body';
    });
    ul.append(li);
  });
  ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(ul);


  document.querySelectorAll('.slider-slide-body h3').forEach(h3 => {
    h3.classList.add('cards-title');
  });



  
  

document.querySelector('.slider').classList.add('splide__track');
document.querySelector('.slider-wrapper').classList.add('splide');


var splide = new Splide( '.splide', {
  loop: true,
  type: 'loop',
  perPage: 3,
  rewind : true,
  autoplay: true,
  drag   : 'free',
  snap   : true,
  perMove: 1,
} );

splide.mount();

}