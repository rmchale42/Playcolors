 <script>
  
  //create variables to represent colors used
  const thebut = document.getElementById("memory");
  const red = "red";
  const blue = "blue";
  const green = "green";
  const gray = "gray";
  const yellow = "yellow";
  const purple = "purple";
  const black = "black";
  const orange = "orange";
  const pink = "pink";
  const brown = "brown";
  
  //creating variables for the counters
  let redcount = 0;
  let bluecount = 0;
  let greencount = 0;
  let graycount = 0;
  let yellowcount = 0;
  let purplecount = 0;
  let blackcount = 0;
  let orangecount = 0; 
  let pinkcount = 0;
  let browncount = 0;

  
  function getValue() {
  return document.getElementById("mySelect").value
}

  //Function to change the number of colors displayed based on amount chosen from dropdown menu
  function changeNumbers(selectednum) {

  let x = selectednum;
  
  switch (x) {
    case "2":
      document.getElementById("three").style.display = "none";
      document.getElementById("four").style.display = "none";
      document.getElementById("five").style.display = "none";
      document.getElementById("six").style.display = "none";
      document.getElementById("seven").style.display = "none";
      document.getElementById("eight").style.display = "none"; 
      document.getElementById("nine").style.display = "none";
      document.getElementById("ten").style.display = "none";
      document.getElementById("c3").style.display = "none";
      document.getElementById("c4").style.display = "none";
      document.getElementById("c5").style.display = "none";
      document.getElementById("c6").style.display = "none";
      document.getElementById("c7").style.display = "none";
      document.getElementById("c8").style.display = "none"; 
      document.getElementById("c9").style.display = "none";
      document.getElementById("c10").style.display = "none";
      break;
    case "3":
      document.getElementById("three").style.display = "grid";
      document.getElementById("four").style.display = "none";
      document.getElementById("five").style.display = "none";
      document.getElementById("six").style.display = "none";
      document.getElementById("seven").style.display = "none";
      document.getElementById("eight").style.display = "none"; 
      document.getElementById("nine").style.display = "none";
      document.getElementById("ten").style.display = "none";
      document.getElementById("c3").style.display = "grid";
      document.getElementById("c4").style.display = "none";
      document.getElementById("c5").style.display = "none";
      document.getElementById("c6").style.display = "none";
      document.getElementById("c7").style.display = "none";
      document.getElementById("c8").style.display = "none"; 
      document.getElementById("c9").style.display = "none";
      document.getElementById("c10").style.display = "none";
      break;
    case "4":
      document.getElementById("three").style.display = "grid";
      document.getElementById("four").style.display = "grid";
      document.getElementById("five").style.display = "none";
      document.getElementById("six").style.display = "none";
      document.getElementById("seven").style.display = "none";
      document.getElementById("eight").style.display = "none"; 
      document.getElementById("nine").style.display = "none";
      document.getElementById("ten").style.display = "none";
      document.getElementById("c3").style.display = "grid";
      document.getElementById("c4").style.display = "grid";
      document.getElementById("c5").style.display = "none";
      document.getElementById("c6").style.display = "none";
      document.getElementById("c7").style.display = "none";
      document.getElementById("c8").style.display = "none"; 
      document.getElementById("c9").style.display = "none";
      document.getElementById("c10").style.display = "none";
      break;
    case "5":
      document.getElementById("three").style.display = "grid";
      document.getElementById("four").style.display = "grid";
      document.getElementById("five").style.display = "grid";
      document.getElementById("six").style.display = "none";
      document.getElementById("seven").style.display = "none";
      document.getElementById("eight").style.display = "none"; 
      document.getElementById("nine").style.display = "none";
      document.getElementById("ten").style.display = "none";
      document.getElementById("c3").style.display = "grid";
      document.getElementById("c4").style.display = "grid";
      document.getElementById("c5").style.display = "grid";
      document.getElementById("c6").style.display = "none";
      document.getElementById("c7").style.display = "none";
      document.getElementById("c8").style.display = "none"; 
      document.getElementById("c9").style.display = "none";
      document.getElementById("c10").style.display = "none";
      break;
    case "6":
      document.getElementById("three").style.display = "grid";
      document.getElementById("four").style.display = "grid";
      document.getElementById("five").style.display = "grid";
      document.getElementById("six").style.display = "grid";
      document.getElementById("seven").style.display = "none";
      document.getElementById("eight").style.display = "none"; 
      document.getElementById("nine").style.display = "none";
      document.getElementById("ten").style.display = "none";
      document.getElementById("c3").style.display = "grid";
      document.getElementById("c4").style.display = "grid";
      document.getElementById("c5").style.display = "grid";
      document.getElementById("c6").style.display = "grid";
      document.getElementById("c7").style.display = "none";
      document.getElementById("c8").style.display = "none"; 
      document.getElementById("c9").style.display = "none";
      document.getElementById("c10").style.display = "none";
      break;
    case "7":
      document.getElementById("three").style.display = "grid";
      document.getElementById("four").style.display = "grid";
      document.getElementById("five").style.display = "grid";
      document.getElementById("six").style.display = "grid";
      document.getElementById("seven").style.display = "grid";
      document.getElementById("eight").style.display = "none"; 
      document.getElementById("nine").style.display = "none";
      document.getElementById("ten").style.display = "none";
      document.getElementById("c3").style.display = "grid";
      document.getElementById("c4").style.display = "grid";
      document.getElementById("c5").style.display = "grid";
      document.getElementById("c6").style.display = "grid";
      document.getElementById("c7").style.display = "grid";
      document.getElementById("c8").style.display = "none"; 
      document.getElementById("c9").style.display = "none";
      document.getElementById("c10").style.display = "none";
      break;
    case "8":
      document.getElementById("three").style.display = "grid";
      document.getElementById("four").style.display = "grid";
      document.getElementById("five").style.display = "grid";
      document.getElementById("six").style.display = "grid";
      document.getElementById("seven").style.display = "grid";
      document.getElementById("eight").style.display = "grid";
      document.getElementById("nine").style.display = "none";
      document.getElementById("ten").style.display = "none";
      document.getElementById("c3").style.display = "grid";
      document.getElementById("c4").style.display = "grid";
      document.getElementById("c5").style.display = "grid";
      document.getElementById("c6").style.display = "grid";
      document.getElementById("c7").style.display = "grid";
      document.getElementById("c8").style.display = "grid"; 
      document.getElementById("c9").style.display = "none";
      document.getElementById("c10").style.display = "none";
      break;
    case "9":
      document.getElementById("three").style.display = "grid";
      document.getElementById("four").style.display = "grid";
      document.getElementById("five").style.display = "grid";
      document.getElementById("six").style.display = "grid";
      document.getElementById("seven").style.display = "grid";
      document.getElementById("eight").style.display = "grid";
      document.getElementById("nine").style.display = "grid";
      document.getElementById("ten").style.display = "none";
      document.getElementById("c3").style.display = "grid";
      document.getElementById("c4").style.display = "grid";
      document.getElementById("c5").style.display = "grid";
      document.getElementById("c6").style.display = "grid";
      document.getElementById("c7").style.display = "grid";
      document.getElementById("c8").style.display = "grid"; 
      document.getElementById("c9").style.display = "grid";
      document.getElementById("c10").style.display = "none";
      break;
    case "10":
      document.getElementById("three").style.display = "grid";
      document.getElementById("four").style.display = "grid";
      document.getElementById("five").style.display = "grid";
      document.getElementById("six").style.display = "grid";
      document.getElementById("seven").style.display = "grid";
      document.getElementById("eight").style.display = "grid";
      document.getElementById("nine").style.display = "grid";
      document.getElementById("ten").style.display = "grid";
      document.getElementById("c3").style.display = "grid";
      document.getElementById("c4").style.display = "grid";
      document.getElementById("c5").style.display = "grid";
      document.getElementById("c6").style.display = "grid";
      document.getElementById("c7").style.display = "grid";
      document.getElementById("c8").style.display = "grid"; 
      document.getElementById("c9").style.display = "grid";
      document.getElementById("c10").style.display = "grid";

    };

}


  function dropMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}

  function returnID(element) {
  return document.getElementsByClassName("board")[element].id;
}

  function pickColor() {
  window.alert("Please Choose a Color!");
}

  function gameOver() {
  window.alert("All the boxes are filled. Game Over!");
  }

  function checkForColor(squareID) {
  return Boolean(document.getElementById(squareID).style.backgroundColor);
}

  function storeColor(colour) {
  thebut.style.backgroundColor= colour;
}

  function changeColor(emptysquare) {
  let stored = thebut.style.backgroundColor;
  document.getElementById(emptysquare).style.backgroundColor = stored;
}

  //function to add to the counter for the color used
  function addToCount() {  
  const buttonColor = thebut.style.backgroundColor;
  
  switch (buttonColor) {
    case "red":
      redcount += 1;
      document.getElementById("c1").innerHTML =  "Counter = " + redcount;
      break;
    case "blue":
      bluecount += 1;
      document.getElementById("c2").innerHTML = "Counter = " + bluecount;
      break;
    case "green":
      greencount += 1;
      document.getElementById("c3").innerHTML = "Counter = " + greencount;
      break;
    case "gray":
      graycount += 1;
      document.getElementById("c4").innerHTML = "Counter = " + graycount;
      break;
    case "yellow":
      yellowcount +=1;
      document.getElementById("c5").innerHTML = "Counter = " + yellowcount;
      break;
    case "purple":
      purplecount +=1;
      document.getElementById("c6").innerHTML = "Counter = " + purplecount;
      break;
    case "black":
      blackcount +=1;
      document.getElementById("c7").innerHTML = "Counter = " + blackcount;
      break;
    case "orange":
      orangecount +=1;
      document.getElementById("c8").innerHTML = "Counter = " + orangecount;
      break;
    case "pink":
      pinkcount +=1;
      document.getElementById("c9").innerHTML = "Counter = " + pinkcount;
      break;
    case "brown":
      browncount += 1;
      document.getElementById("c10").innerHTML = "Counter = " + browncount;
   }
}
