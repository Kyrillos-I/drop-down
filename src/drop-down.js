function makeDropDown(button, dropDownItems) {
  for (item of dropDownItems) {
    item.style.display = "none";
  }
  button.addEventListener("click", function () {
    for (item of dropDownItems) {
      if (item.style.display === "none") {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    }
  });
}
export default makeDropDown();
