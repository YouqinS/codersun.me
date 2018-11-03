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