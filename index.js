//oninput text ler için
//onchange select ler için

function writeName() {
  document.getElementById("cvName").innerHTML =
    document.getElementById("fullname").value;
}

function writeDegree() {
  document.getElementById("cvDegree").innerHTML =
    document.getElementById("degree").value;
}

function writePhone() {
  document.getElementById("cvPhone").innerHTML =
    document.getElementById("phone").value;
}

function writeEmail() {
  document.getElementById("cvEmail").innerHTML =
    document.getElementById("email").value;
}

function writeWebsite() {
  document.getElementById("cvWeb").innerHTML =
    document.getElementById("webSite").value;
}

function writeAddress() {
  document.getElementById("cvAddress").innerHTML =
    document.getElementById("address").value;
}

function writeSchoolDescription() {
  document.getElementById("cvEducationInfo").innerHTML =
    document.getElementById("schoolExplanation").value;
}

function chooseSchoolNumber() {
  var schoolNum = document.getElementById("schoolNumber").value;

  for (var i = 1; i <= schoolNum; i++) {
    document.getElementById(`${i}SchoolInfo`).removeAttribute("hidden");
    document.getElementById(`${i}SchoolCv`).removeAttribute("hidden");
  }
}

function writeSchoolNameAndDescription() {
  document.getElementById("1SchoolCv").innerHTML = `${
    document.getElementById("firstSchoolName").value
  } 
  <ul>
    <li id="1SchoolCvDescription"></li>
  </ul>`;

  document.getElementById("1SchoolCvDescription").innerHTML +=
    document.getElementById("firstSchoolDescription").value;

  document.getElementById("2SchoolCv").innerHTML = `${
    document.getElementById("secondSchoolName").value
  } 
      <ul>
        <li id="2SchoolCvDescription"></li>
      </ul>`;

  document.getElementById("2SchoolCvDescription").innerHTML +=
    document.getElementById("secondSchoolDescription").value;

  document.getElementById("3SchoolCv").innerHTML = `${
    document.getElementById("thirdSchoolName").value
  } 
      <ul>
        <li id="3SchoolCvDescription"></li>
      </ul>`;

  document.getElementById("3SchoolCvDescription").innerHTML +=
    document.getElementById("thirdSchoolDescription").value;
}

function writeAbilityDescription() {
  document.getElementById("cvAbilityInfo").innerHTML =
    document.getElementById("ability").value;
}

function chooseAbilityNumber() {
  var abilityNum = document.getElementById("abilityNumber").value;

  for (var i = 1; i <= abilityNum; i++) {
    document.getElementById(`${i}AbilityInfo`).removeAttribute("hidden");
    document.getElementById(`${i}AbilityCv`).removeAttribute("hidden");
  }
}

function writeAbilityNameAndDescription() {
  document.getElementById("1AbilityCv").innerHTML = `${
    document.getElementById("firstAbilityName").value
  } 
    <ul>
      <li id="1AbilityCvDescription"></li>
    </ul>`;

  document.getElementById("1AbilityCvDescription").innerHTML +=
    document.getElementById("firstAbilityDescription").value;

  document.getElementById("2AbilityCv").innerHTML = `${
    document.getElementById("secondAbilityName").value
  } 
        <ul>
          <li id="2AbilityCvDescription"></li>
        </ul>`;

  document.getElementById("2AbilityCvDescription").innerHTML +=
    document.getElementById("secondAbilityDescription").value;

  document.getElementById("3AbilityCv").innerHTML = `${
    document.getElementById("thirdAbilityName").value
  } 
        <ul>
          <li id="3AbilityCvDescription"></li>
        </ul>`;

  document.getElementById("3AbilityCvDescription").innerHTML +=
    document.getElementById("thirdAbilityDescription").value;
}

function writeAboutUs() {
  document.getElementById("cvAboutInfo").innerHTML =
    document.getElementById("about").value;
}

function writeJobDescription() {
  document.getElementById("cvJobInfo").innerHTML =
    document.getElementById("jobExperience").value;
}

function selectBackgroundColor() {
  document.getElementById("cvoutput").style.backgroundColor =
    document.getElementById("backgroundColor").value;
}

function selectLeftColumnColor() {
  document.getElementById("leftside").style.backgroundColor =
    document.getElementById("leftColumnColor").value;
}

function selectNameBoxColor() {
  document.getElementById("nameBox").style.backgroundColor =
    document.getElementById("nameBoxColor").value;
}

function selectNameBoxTextColor() {
  document.getElementById("cvName").style.color =
    document.getElementById("nameBoxTextColor").value;

  document.getElementById("cvDegree").style.color =
    document.getElementById("nameBoxTextColor").value;
}

function selectTextType(textType) {
  var elementsToChange = document.querySelectorAll("#cvoutput *");

  for (var i = 0; i < elementsToChange.length; i++) {
    elementsToChange[i].style.fontFamily = textType;
  }
}

function selectPhotoType(selectedShape) {
  var profilePhoto = document.getElementById("photo");
  if (selectedShape === "Köşeli") {
    profilePhoto.style.borderRadius = "0";
  } else if (selectedShape === "Oval") {
    profilePhoto.style.borderRadius = "25%";
  } else if (selectedShape === "Yuvarlak") {
    profilePhoto.style.borderRadius = "50%";
  } else {
    profilePhoto.style.borderRadius = "0";
  }
}

function selectUnderlineColor(selectedColor) {
  var hrElements = document.querySelectorAll(".underLine");

  for (var i = 0; i < hrElements.length; i++) {
    hrElements[i].style.borderColor = selectedColor;
  }
}

function selectUnderlineStyle(selectedStyle) {
  var hrElements = document.querySelectorAll(".underLine");

  for (var i = 0; i < hrElements.length; i++) {
    if (selectedStyle === "Noktalı") {
      hrElements[i].style.borderStyle = "dotted";
    } else if (selectedStyle === "Çizgili") {
      hrElements[i].style.borderStyle = "dashed";
    } else if (selectedStyle === "Düz") {
      hrElements[i].style.borderStyle = "solid";
    } else {
      hrElements[i].style.borderStyle = "none";
    }
  }
}
