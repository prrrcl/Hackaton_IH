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
  })
}

window.addEventListener('load', main);