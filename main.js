

let positionBall = ["7.6", "1.7", "65.64", "0","17", "57.74","0","0","0","15.64","35","55","23"]

document.addEventListener('scroll',  ()=> {

  // document.querySelector('.showScroll-1').style = `top:${+(window.getComputedStyle(document.querySelector('.showScroll-1'),null).top.slice(0,-2)) +1}px`
  
  if (document.documentElement.clientWidth <= 600) {
    positionBall = ["5", "0", "20", "0","23", "38","20","0","0","0","55","70","25"]
    document.querySelector('.section-main__content-item:last-child').style=`top:${ +'8' - pageYOffset/20}%`
    // document.querySelector('.ball-inner-1').style=`top:${ +positionBall[0] + pageYOffset/70}%`
    // document.querySelector('.ball-inner-2').style=`top:${ +positionBall[1] + pageYOffset/70}%`
    // document.querySelector('.ball-inner-3').style=`top:${ +positionBall[2] + pageYOffset/70}%`
    // document.querySelector('.ball-inner-4').style=`top:${ +positionBall[3] + pageYOffset/70}%`
    document.querySelector('.ball-inner-5').style=`top:${ +positionBall[4] + pageYOffset/100}%`
    document.querySelector('.ball-inner-6').style=`bottom:${ +positionBall[5] + pageYOffset/70}%`
    document.querySelector('.ball-inner-7').style=`bottom:${ +positionBall[6] + pageYOffset/70}%`
    // document.querySelector('.ball-inner-8').style=`bottom:${ +positionBall[7] - pageYOffset/50}%`
    // document.querySelector('.ball-inner-9').style=`bottom:${ +positionBall[8] - pageYOffset/50}%`
    document.querySelector('.ball-inner-10').style=`bottom:${ +positionBall[9] - pageYOffset/100}%`
    document.querySelector('.ball-inner-11').style=`bottom:${ +positionBall[10] + pageYOffset/100}%`
    document.querySelector('.ball-inner-12').style=`bottom:${ +positionBall[11] - pageYOffset/100}%`
    document.querySelector('.ball-inner-13').style=`bottom:${ +positionBall[12] - pageYOffset/50}%`
    
    
  } else {
    document.querySelector('.ball-inner-1').style=`top:${ +positionBall[0] + pageYOffset/70}%`
    // document.querySelector('.ball-inner-2').style=`top:${ +positionBall[1] + pageYOffset/15}%`
    // document.querySelector('.ball-inner-3').style=`top:${ +positionBall[2] + pageYOffset/70}%`
    // document.querySelector('.ball-inner-4').style=`top:${ +positionBall[3] + pageYOffset/18}%`
    // document.querySelector('.ball-inner-5').style=`top:${ +positionBall[4] + pageYOffset/100}%`
    document.querySelector('.ball-inner-6').style=`top:${ +positionBall[5] - pageYOffset/70}%`
    // document.querySelector('.ball-inner-7').style=`top:${ +positionBall[6] + pageYOffset/100}%`
   
    // document.querySelector('.ball-inner-8').style=`bottom:${ +positionBall[7] + pageYOffset/100}%`
    // document.querySelector('.ball-inner-9').style=`bottom:${ +positionBall[8] + pageYOffset/100}%`
    document.querySelector('.ball-inner-10').style=`bottom:${ +positionBall[9] + pageYOffset/100}%`
    document.querySelector('.ball-inner-11').style=`bottom:${ +positionBall[10] + pageYOffset/100}%`
    document.querySelector('.ball-inner-12').style=`bottom:${ +positionBall[11] - pageYOffset/50}%`
    document.querySelector('.ball-inner-13').style=`bottom:${ +positionBall[12] + pageYOffset/150}%`
    document.querySelector('.section-main__content-item:last-child').style=`bottom:${ +'0' + pageYOffset/10}px`
 
  }
 
});

window.addEventListener('resize', () => {
  if (document.documentElement.clientWidth== 600) {
   location.reload() 
  }
})

window.addEventListener("orientationchange", function() {
  location.reload() 
}, false);

