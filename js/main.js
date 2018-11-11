function validateForm() {
  const requiredElements = document.querySelectorAll(".required");
  const phoneNumber = document.forms ["infoForm"]["phonenumber"].value;
  const email = document.forms["infoForm"]["email"].value;
  const phoneNumberFormat = /^[+]\d{12}$/;
  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  for(let i = 0; i<requiredElements.length;i++){
    if (requiredElements[i].value === "") {
      alert("Required fields must be filled out");
      return false;
    }
  }

  if (!(regex.test(email))) {
    alert("You have entered an invalid email address!");
    return false;
  }else if(phoneNumber !== ""){
    if (!(phoneNumber.match(phoneNumberFormat))){
      alert("You have entered an invalid phone number");
      return false;
    }
  }else {
    return true;
  }
}




let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
}






//var lastKnownScrollY = 0;
//var currentScrollY = 0;
//var ticking = false;
//var idOfHeader = 'header';
//var eleHeader = null;
//const classes = {
//  pinned: 'header-pin',
//  unpinned: 'header-unpin',
//};
//function onScroll() {
//  currentScrollY = window.pageYOffset;
//  requestTick();
//}
//function requestTick() {
//  if (!ticking) {
//    requestAnimationFrame(update);
//  }
//  ticking = true;
//}
//function update() {
//  if (currentScrollY < lastKnownScrollY) {
//    pin();
//  } else if (currentScrollY > lastKnownScrollY) {
//    unpin();
//  }
//  lastKnownScrollY = currentScrollY;
//  ticking = false;
//}
//function pin() {
//    if (eleHeader == null) {
//        console.log("eleHeader is null, cannot pin")
//    } else if (eleHeader.classList.contains(classes.unpinned)) {
//    eleHeader.classList.remove(classes.unpinned);
//    eleHeader.classList.add(classes.pinned);
//  }
//}
//function unpin() {
//    if (eleHeader == null) {
//        console.log("eleHeader is null, cannot unpin")
//    } else if (eleHeader.classList.contains(classes.pinned) || !eleHeader.classList.contains(classes.unpinned)) {
//    eleHeader.classList.remove(classes.pinned);
//    eleHeader.classList.add(classes.unpinned);
//  }
//}
//window.onload = function() {
//  eleHeader = document.getElementsByClassName("header");
//     if (eleHeader == null) {
//        console.log("eleHeader is null, onload() could not initialize it")
//    }
//  document.addEventListener('scroll', onScroll, false);
//}