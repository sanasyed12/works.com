function loading(){
var tl = gsap.timeline()
tl.to("#yellowDiv" , {
    top:'-100%',
    delay: 0.5,
    duration:.4,
    ease : 'expo.out'
})
tl.to("#loader video" , {
    top:'-110%',
    delay: .5,
    duration:.9,
    ease : Expo.easeInOut
})
tl.to("#yellowDiv2" , {
    top:'-100%',
    delay: -.2,
    duration:.5,
    ease : 'expo.easeInOut'
},'a')
tl.to("#loader h1" , {
    delay: .1,
    color : '#000'
},'a')
tl.to("#loader " , {
    delay: .1,
    opacity : 0,
},'a')
}
loading()
var loader = document.querySelector("#loader")
function loaderDis(){
  setTimeout(()=>{
    loader.style.display = `none`
  },3000)}
  loaderDis()

const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});

var page2 = document.querySelector("#page2")
var elem = document.querySelectorAll(".elem")
elem.forEach(function(elems){
  elems.addEventListener("mouseenter" , function(){
    var bgimg = elems.getAttribute('data-image')
    page2.style.backgroundImage = `url(${bgimg})`;
    page2.style.backgroundRepeat = `no-repeat`;
    page2.style.backgroundSize = `cover`;
    page2.style.backgroundPosition = `center`
  })
})

document.querySelector("#footT h4").addEventListener("click" ,()=>{
  scroll.scrollTo(0)
})
document.querySelector("#footT i").addEventListener("click" ,()=>{
  scroll.scrollTo(0)
})