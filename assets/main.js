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

}

window.addEventListener('load', main);