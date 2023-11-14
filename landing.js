var topCardList = document.querySelector('.top-card-list');
var  topIndicatorList = document.querySelector('.top-indicator');

var latestList = document.querySelector('.latest-list');
var  latestIndicator = document.querySelector('.latest-indicator');
var  right = document.querySelector('.chevron-right');
var  left = document.querySelector('.chevron-left');
var  mright = document.querySelector('.mobile-chevron-right');
var  mleft = document.querySelector('.mobile-chevron-left');


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

latestList.addEventListener('scroll',()=>{
   var child =  latestIndicator.querySelectorAll('.indicator')
    var per =  latestList.scrollLeft/topCardList.clientWidth*100

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
      }
 
     else if(per>25 && per<60){
        child[1].classList.add('indicator-active')
        child[0].classList.remove('indicator-active')
        child[2].classList.remove('indicator-active')

     }
 
      else if(per>60){
             child[2].classList.add('indicator-active')
             child[0].classList.remove('indicator-active')
             child[1].classList.remove('indicator-active')
          
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
   }

  else if(per>25 && per<60){
     child[1].classList.add('indicator-active')
     child[0].classList.remove('indicator-active')
     child[2].classList.remove('indicator-active')

  }

   else if(per>60){
          child[2].classList.add('indicator-active')
          child[0].classList.remove('indicator-active')
          child[1].classList.remove('indicator-active')
       
  }

})

mright.addEventListener('click',()=>{
   latestList.scrollLeft = latestList.scrollLeft + 200;
   var child =  latestIndicator.querySelectorAll('.indicator')
var per =  latestList.scrollLeft/latestList.clientWidth*100
   if(per<20){
      child[0].classList.add('indicator-active')
      child[1].classList.remove('indicator-active')
      child[2].classList.remove('indicator-active')
   }

  else if(per>25 && per<60){
     child[1].classList.add('indicator-active')
     child[0].classList.remove('indicator-active')
     child[2].classList.remove('indicator-active')

  }

   else if(per>60){
          child[2].classList.add('indicator-active')
          child[0].classList.remove('indicator-active')
          child[1].classList.remove('indicator-active')
       
  }



})

mleft.addEventListener('click',()=>{
latestList.scrollLeft = latestList.scrollLeft - 200;

var child =  latestIndicator.querySelectorAll('.indicator')
var per =  latestList.scrollLeft/latestList.clientWidth*100

if(per<20){
   child[0].classList.add('indicator-active')
   child[1].classList.remove('indicator-active')
   child[2].classList.remove('indicator-active')
}

else if(per>25 && per<60){
  child[1].classList.add('indicator-active')
  child[0].classList.remove('indicator-active')
  child[2].classList.remove('indicator-active')

}

else if(per>60){
       child[2].classList.add('indicator-active')
       child[0].classList.remove('indicator-active')
       child[1].classList.remove('indicator-active')
    
}

})




var vid1 = document.querySelector('#vid1')
var vid1btn = document.querySelector('.vid1-btn');

vid1btn.addEventListener('click',()=>{
   if (vid1.paused) {
      vid1.play();
    } else {
      vid1.pause();
    }
})




var videoContainer = document.querySelector('.best-video-con');

 var bestvideos = videoContainer.querySelectorAll('.best-video');

 bestvideos.forEach((best)=>{
   var bestover = best.querySelector('.best-video-overlay');
   var bestply = best.querySelector('.best-video-ply');
   var durationcap = best.querySelector('p')
   var playbtn = best.querySelector('svg')
   bestply.onloadeddata = function() {
       var duration = `${Math.floor(bestply.duration/60)}:${Math.floor(bestply.duration%60)}` 
   durationcap.textContent = duration
  };
  

   playbtn.addEventListener('click',()=>{
      // bestover.style.display = "none";
      // bestply.play

      if (bestply.paused) {
         bestply.play();
         bestover.style.opacity = "0";

       } else {
         bestply.pause();
         bestover.style.opacity = "1";
         alert('kj')
       }                                                                                                                              
   },false)



   bestover.addEventListener('click',()=>{
      // bestover.style.display = "none";
      // bestply.play

      if (!bestply.paused) {
         bestply.pause();
         bestover.style.opacity = "1";

      }
   },true)
 })




 var controlLeft = document.querySelector(".control-left");
 var controlRight = document.querySelector('.control-right');
 var bestCon = document.querySelector('.best-container');


 controlRight.addEventListener('click',()=>{
   videoContainer.scrollLeft = videoContainer.scrollLeft + 500;
   var child =  bestCon.querySelectorAll('.indicator')
var per =  videoContainer.scrollLeft/videoContainer.clientWidth*100
   
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

controlLeft.addEventListener('click',()=>{
videoContainer.scrollLeft = videoContainer.scrollLeft - 500;

var child =  bestCon.querySelectorAll('.indicator')
var per =  videoContainer.scrollLeft/videoContainer.clientWidth*100
if(per<20){
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

