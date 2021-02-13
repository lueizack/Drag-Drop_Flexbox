console.log("Drag and drop index.js");

const imgBox = document.querySelector(".imgBox");

whiteBoxes = document.getElementsByClassName("whiteBox");

//Event listener for draggable element imgBox
imgBox.addEventListener("dragstart", (e) => {
  console.log("This is dragSTART");
  e.target.className += " hold";
  setTimeout(() => {
    e.target.className += " hide";
  }, 0);
});

imgBox.addEventListener("dragend", (e) => {
  console.log("This is dragEND");
  e.target.className = "imgBox";
});

for (whiteBox of whiteBoxes) {
  whiteBox.addEventListener("dragover", (e) => {
    console.log("Drag OVER has been triggered");
    e.preventDefault();
  });

  whiteBox.addEventListener("dragenter", (e) => {
    console.log("Drag ENTER has been triggered");
    e.target.className += ' dashed'; 
  });

  whiteBox.addEventListener("dragleave", (e) => {
    console.log("Drag LEAVE has been triggered");
    e.target.className = 'whiteBox';
  });

  whiteBox.addEventListener("drop", (e) => {
    console.log("Drag DROP has been triggered");
    e.target.append(imgBox);
    e.target.className = 'whiteBox';
  });
}
