

const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

function updateSize() {
  var columns = document.getElementById("columns")
  console.log("Is columns null? " + (columns == null))

  // heightOutput.textContent = window.innerHeight;
  // widthOutput.textContent = window.innerWidth;
  console.log("width: " + window.innerWidth)
  console.log("height: " + window.innerHeight)

  if(window.innerWidth < 550) {
    console.log("Here!!")
    
    console.log("changing layout to one column")
    columns.style.flexDirection = "column"
  }
}
if(document != null) {
  updateSize();
}

window.addEventListener("resize", updateSize);

