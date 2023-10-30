var topCardList = document.querySelector('.top-card-list');
var  topIndicatorList = document.querySelector('.top-indicator');

var latestList = document.querySelector('.latest-list');
var  latestIndicator = document.querySelector('.latest-indicator');
var  right = document.querySelector('.chevron-right');
var  left = document.querySelector('.chevron-left');


topCardList.addEventListener('scroll',()=>{
   var child =  topIndicatorList.querySelectorAll('.indicator')
    var per =  topCardList.scrollLeft/topCardList.clientWidth*100

    if(per<40){
        child[0].classList.add('indicator-active')
        child[1].classList.remove('indicator-active')
        child[2].classList.remove('indicator-active')
     }

    if(per>40){
       child[1].classList.add('indicator-active')
       child[0].classList.remove('indicator-active')
       child[2].classList.remove('indicator-active')
    }

     if(per>70){
            child[2].classList.add('indicator-active')
            child[0].classList.remove('indicator-active')
            child[1].classList.remove('indicator-active')
         
    }

  

})




right.addEventListener('click',()=>{
      latestList.scrollLeft = latestList.scrollLeft + 200;
      var child =  latestIndicator.querySelectorAll('.indicator')
var per =  latestList.scrollLeft/latestList.clientWidth*100
      if(per<20){
         child[0].classList.add('indicator-active')
         child[1].classList.remove('indicator-active')
         child[2].classList.remove('indicator-active')
         child[3].classList.remove('indicator-active')
         child[4].classList.remove('indicator-active')
      }
 
     if(per>20){
        child[1].classList.add('indicator-active')
        child[0].classList.remove('indicator-active')
        child[2].classList.remove('indicator-active')
        child[4].classList.remove('indicator-active')
        child[3].classList.remove('indicator-active')
     }
 
      if(per>40){
             child[2].classList.add('indicator-active')
             child[0].classList.remove('indicator-active')
             child[1].classList.remove('indicator-active')
             child[4].classList.remove('indicator-active')
             child[3].classList.remove('indicator-active')
          
     }

     if(per>60){
      child[3].classList.add('indicator-active')
      child[0].classList.remove('indicator-active')
      child[1].classList.remove('indicator-active')
      child[2].classList.remove('indicator-active')
      child[4].classList.remove('indicator-active')
   
}


if(per>80){
   child[4].classList.add('indicator-active')
   child[3].classList.remove('indicator-active')
   child[2].classList.remove('indicator-active')
   child[1].classList.remove('indicator-active')
   child[0].classList.remove('indicator-active')

}

})

left.addEventListener('click',()=>{
   latestList.scrollLeft = latestList.scrollLeft - 200;

   var child =  latestIndicator.querySelectorAll('.indicator')
   var per =  latestList.scrollLeft/latestList.clientWidth*100

   if(per<20){
      child[0].classList.add('indicator-active')
      child[1].classList.remove('indicator-active')
      child[2].classList.remove('indicator-active')
      child[3].classList.remove('indicator-active')
      child[4].classList.remove('indicator-active')
   }

  if(per>20){
     child[1].classList.add('indicator-active')
     child[0].classList.remove('indicator-active')
     child[2].classList.remove('indicator-active')
     child[4].classList.remove('indicator-active')
     child[3].classList.remove('indicator-active')
  }

   if(per>40){
          child[2].classList.add('indicator-active')
          child[0].classList.remove('indicator-active')
          child[1].classList.remove('indicator-active')
          child[4].classList.remove('indicator-active')
          child[3].classList.remove('indicator-active')
       
  }

  if(per>60){
   child[3].classList.add('indicator-active')
   child[0].classList.remove('indicator-active')
   child[1].classList.remove('indicator-active')
   child[2].classList.remove('indicator-active')
   child[4].classList.remove('indicator-active')

}


if(per>80){
child[4].classList.add('indicator-active')
child[3].classList.remove('indicator-active')
child[2].classList.remove('indicator-active')
child[1].classList.remove('indicator-active')
child[0].classList.remove('indicator-active')

}

})


