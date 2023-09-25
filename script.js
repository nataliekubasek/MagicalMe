function quizQuestion() {
  var password = document.getElementById("passwordBox");
  var passwordText = password.value.toUpperCase();
  if (passwordText == "3:49") {
    return true;
  }
  alert("That is incorrect, try again!");
  return false;
}