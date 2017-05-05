function validateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(inputText.value.match(mailformat)) {
    document.emailForm.email1.focus();
    alert("Email submission successful!");
    return true;
  }
  else {
    alert("You have entered an invalid email address!");
    document.emailForm.email1.focus();
    return false;
  }
}
