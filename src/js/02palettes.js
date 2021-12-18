

// Elementos que cambian
const colorOptions = document.querySelectorAll(".design__radio");
const icon = document.querySelectorAll(".icon-js");
const tinyRectangle = document.querySelector(".rectangle-js");
const fullName = document.querySelector(".fullname-js");

//Handlefunction
function handleChangeColorCard(event) {
  const optionSelected = event.target.id;
  // FIRST OPTION BLUE-GREEN RECTANGLE&NAME
  if (optionSelected === "blue-green") {
    tinyRectangle.classList.remove("rectanglered");
    tinyRectangle.classList.remove("rectanglemix");
    tinyRectangle.classList.add("rectangleblue");
    fullName.classList.remove("namered");
    fullName.classList.remove("namemix");
    fullName.classList.add("nameblue");

    // SECOND OPTION RED-ORANGE RECTANGLE&NAME
  } else if (optionSelected === "red-orange") {
    tinyRectangle.classList.remove("rectangleblue");
    tinyRectangle.classList.remove("rectanglemix");
    tinyRectangle.classList.add("rectanglered");
    fullName.classList.remove("namemix");
    fullName.classList.remove("nameblue");
    fullName.classList.add("namered");

    // SECOND OPTION COLOR-MIX RECTANGLE&NAME
  } else if (optionSelected === "color-mix") {
    tinyRectangle.classList.remove("rectangleblue");
    tinyRectangle.classList.remove("rectanglered");
    tinyRectangle.classList.add("rectanglemix");
    fullName.classList.remove("namered");
    fullName.classList.remove("nameblue");
    fullName.classList.add("namemix");
  }//ICON CIRCLES
  for (const eachIcon of icon) {
    if (optionSelected === "blue-green") {
      eachIcon.classList.remove("mixiconcircle");
      eachIcon.classList.remove("rediconcircle");
      eachIcon.classList.add("blueiconcircle");
    } else if (optionSelected === "red-orange") {
      eachIcon.classList.remove("mixiconcircle");
      eachIcon.classList.remove("iconbluecircle");
      eachIcon.classList.add("rediconcircle");
    } else if (optionSelected === "color-mix") {
      eachIcon.classList.remove("rediconcircle");
      eachIcon.classList.remove("iconbluecircle");
      eachIcon.classList.add("mixiconcircle");
    }//ICONS
    
  }
}

for (const eachPalette of colorOptions) {
  eachPalette.addEventListener("click", handleChangeColorCard);
}

