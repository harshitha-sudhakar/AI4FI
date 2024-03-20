/* .js files add interaction to your website */
//create variables 
var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");
//ensure that dom is downloaded
if(scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
//generates and displays script
  function generateScript() {
    var name = document.getElementById("name").value;
    var location = document.getElementById("location").value;
    var learning = document.getElementById("learning").value;

    displayScript.innerHTML = "Hello, my name is " + name + " and I live in " + location + ". I am calling to ask you to support the H.R 4503 AI Training and Expansion Act for expanding AI literacy in companies. As a student, my learning now depends on my access to the internet. For example, " + learning + ". Please support the H.R 4503 AI Training and Expansion Act for expanding AI literacy in companies.";
  }

}
