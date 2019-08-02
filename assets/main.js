const main = () => {
  
  // Menu
  const hamburger = document.querySelector('.hamburger');
  const listMobile =  document.querySelector('.mobile-list-menu');
  if(listMobile){
    hamburger.addEventListener('click', (e)=>{
      listMobile.classList.toggle('visible');
      hamburger.classList.toggle('opened')
    })
  }

  const itemsMenuMobile = document.querySelectorAll('.item-menu-mobile');
  itemsMenuMobile.forEach((e, index)=>{
    e.addEventListener('click', (event)=>{
      e.lastElementChild.classList.toggle('sub-open')
    })
  });
 // Appearing menu
  TweenMax.staggerFromTo(".item-menu", 0.8,
  {
      alpha: 0,
      y: -10
  },
  {
      alpha: 1,
      y: 0,
      ease: Power3.easeOut
  },
  0.2);
  
}

window.addEventListener('load', main);