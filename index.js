 var swiper = new Swiper(".mySwiper",{
    spaceBetween:30,
     loop:true,
    centeredSlides:true,
     autoplay:{
        delay:4000,
        disableOnInteraction:false,
  },
 });

 

  // nav bar 

  let navLinks = document.querySelector('.navLinks');
  let menuBtn = document.querySelector('#menuBtn');

  menuBtn.onclick = () => {
    navLinks.classList.toggle('active');
  }




  // window scroll

  window.onscroll = () => {
     if (window.scrollY > 0){
       document.querySelector('.container .header ').classList.add('scroll');
     }else{
      document.querySelector('.container .header ').classList.remove('scroll');
    }
   }


