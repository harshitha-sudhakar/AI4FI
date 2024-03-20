//array of facts
var factList = ["Compared to White adults, 48% of U.S adults think the people who design artificial intelligence systems do not take the experiences of Asian, Black, or Hispanic adults into account accurately", "Nearly half of U.S. adults (45%) say they are equally concerned and excited about AI.", "16% of those who are more concerned about the increased use of AI say it could lead to privacy problems, surveillance or hacking", "7% of people who express more concern than excitement about AI offer that it would make people overly reliant on this technology"];
//create variables
  var fact = document.getElementById("fact");
  var factBtn = document.getElementById("factBtn");
  var count = 0;
//ensure that DOM is donwloaded
  if(factBtn) {
    factBtn.addEventListener("click", displayFact);
  }
//displays fact, resets to 0 if reached end of array
  function displayFact() {
    fact.innerHTML = factList[count];
    count++;
    if(count == factList.length) {
      count = 0;
    }
  }