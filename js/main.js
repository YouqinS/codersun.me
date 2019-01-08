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

//toggle menu
const showMenu = () =>{
  const menu = document.getElementById("menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
};

//hide menu
const hideMenu = () =>{
  const menu = document.getElementById("menu");
    menu.style.display = "none";
    alert("hihe");
};

//show it-content on homepage
const showSkillsProjects = () =>{
  const itContent = document.getElementById("it-content");
  // const menuSkill = document.getElementById("menuSkills");
  if(itContent.style.display === "none"){
    itContent.style.display = "block";
  }else {
    itContent.style.display = "none";
  }
};


//show download button
$(window).scroll(function() {
  const btn = document.getElementById("btn");
  if($(window).scrollTop() + $(window).height() === $(document).height()) {
    // alert("end");
    btn.style.visibility="visible";
  }else {
    btn.style.visibility="hidden";
  }
});


/*
const showHideMsgPopup = () =>{
  const msgPopup = document.getElementById("msgPopup");
  if (msgPopup.style.visibility === "visible"){
    msgPopup.style.visibility = "hidden";
  } else {
    msgPopup.style.visibility = "visible";
  }

};
*/


const popup=(showhide)=> {
    if(showhide === "show"){
        document.getElementById('msgPopup').style.visibility="visible";
    }

    if(showhide === "hide"){
        document.getElementById('msgPopup').style.visibility="hidden";
    }

};