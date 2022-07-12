const imgBox = document.querySelector(".imgBox");
const whiteBoxes = document.getElementsByClassName("whiteBox");

imgBox.addEventListener("dragstart", (e) => {
  e.target.className += " hold";
  setTimeout(() => {
    e.target.className = "hide";
  }, 0);
});

imgBox.addEventListener("dragend", (e) => {
  e.target.className = "imgBox";
});

for (whiteBox of whiteBoxes) {
 whiteBox.addEventListener("dragover", (e) => {
    // console.log("drag over has been trigger.");
    e.preventDefault();
  });

  whiteBox.addEventListener("dragenter", (e) => {
    // console.log("drag enter has been trigger.");
    e.target.className += " dashed";
  });

  whiteBox.addEventListener("dragleave", (e) => {
    // console.log("drag leave has been trigger.");
    e.target.className = "whiteBox";
  });

  whiteBox.addEventListener("drop", (e) => {
    // console.log("drag drop has been trigger.");
    e.target.append(imgBox);
  });
}
