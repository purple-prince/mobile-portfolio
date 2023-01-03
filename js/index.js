const nav = document.querySelector(".nav-bar");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 1  && lastScrollY < window.scrollY) {
      nav.classList.add("nav--hidden");
    } else {
      nav.classList.remove("nav--hidden");
    }

    lastScrollY = window.scrollY;
  });






var ltreviewsImg = document.getElementById("ltreviews_img");
ltreviewsImg.addEventListener("mouseover", function() { changeText("ltreviews"); });
ltreviewsImg.addEventListener("mouseleave", restoreBigImgOpacity);

var monopolyImg = document.getElementById("monopoly_img");
monopolyImg.addEventListener("mouseover", function() { changeText("monopoly"); });
monopolyImg.addEventListener("mouseleave", restoreBigImgOpacity);

var weedImg = document.getElementById("thc_img");
weedImg.addEventListener("mouseover", function() { changeText("weed"); });
weedImg.addEventListener("mouseleave", restoreBigImgOpacity);

var golImg = document.getElementById("gol_img");
golImg.addEventListener("mouseover", function() { changeText("gol"); });
golImg.addEventListener("mouseleave", restoreBigImgOpacity);

function restoreBigImgOpacity() {
  ltreviewsImg.style.opacity = "1.0";
  monopolyImg.style.opacity = "1.0";
  weedImg.style.opacity = "1.0";
  golImg.style.opacity = "1.0";
}

function changeText(txt) {

  if(txt === "ltreviews") {
    monopolyImg.style.opacity = "0.5";
    weedImg.style.opacity = "0.5";
    golImg.style.opacity = "0.5";
  } else if(txt === "monopoly") {
    ltreviewsImg.style.opacity = "0.5";
    weedImg.style.opacity = "0.5";
    golImg.style.opacity = "0.5";
  } else if(txt === "weed") {
    monopolyImg.style.opacity = "0.5";
    ltreviewsImg.style.opacity = "0.5";
    golImg.style.opacity = "0.5";
  } else {
    monopolyImg.style.opacity = "0.5";
    ltreviewsImg.style.opacity = "0.5";
    weedImg.style.opacity = "0.5";
  }

  var txtToChange = document.getElementById("port-desc");

  var gcImg = document.getElementById("port-gc");
  var swiftImg = document.getElementById("port-swift");
  var swiftuiImg = document.getElementById("port-swiftui");
  var cocoaImg = document.getElementById("port-cocoa");
  var splineImg = document.getElementById("port-spline");
  var sketchImg = document.getElementById("port-sketch");
  var coremlImg = document.getElementById("port-coreml");
  var icloudImg = document.getElementById("port-icloud");
  var androidImg = document.getElementById("port-android");
  var pythonImg = document.getElementById("port-python");
  var javaImg = document.getElementById("port-java");
  var appstoreImg = document.getElementById("port-appstore");

  switch(txt) {
    case "ltreviews": 
      changeNameTo("LT Students");
      changeUseTo(" Social media app for school & local communnity");
      changeStatusTo("App/Play Store Status - Inactive");
      changeDescriptionTo("A general purpose social media app created for my high school and it's community. Complete with news, polls, r/w posts, events. I learned about back-end architecture in a complex social media app, as well as how to implement a CMS. Supported by ads.");
      break;
    case "monopoly":
      changeNameTo("Monopoly Stats & Info");
      changeUseTo(" Nerd analysis to optimize monopoly games");
      changeStatusTo("App/Play Store Status - Active");
      changeDescriptionTo("Allows players to input game data, and provides predictions, analyses, insights, and more into their games. First app published, so I mostly learned about the app maintanence process and what it takes to create an app from first lines of code to being published. Supported by ads.");
      break;
    case "weed":
      changeNameTo("Healthc");
      changeUseTo(" Medical marijuana healthy usage tool");
      changeStatusTo("App/Play Store Status - Inactive");
      changeDescriptionTo("Reference medical app suggesting different medical marijuana treatments depending on user input and other factors, complete with ML back-end algorithims to suggest more relevant treatments. Learned about how to utilize and develop ML to constantly better an app, best practices for interacting with users through UI/UX and content delivery.");
      break;
    case "gol":
      changeNameTo("The Game of Life");
      changeUseTo(" Simulation RPG game");
      changeStatusTo("App/Play Store Status - Inactive");
      changeDescriptionTo("General 2D life-simulation RPG game. Learned about complex inner-workings of Swift, app resource optimization, and developing for user engagement. Supported by ads & IAPs.");
      break;
    default:
      break;
  }

  function changeUseTo(txt) {
    var txtToChange = document.getElementById("port-desc-use");
    txtToChange.innerHTML = txt;
    
  }

  function changeStatusTo(txt) {
    var txtToChange = document.getElementById("port-desc-active");
    txtToChange.innerHTML = txt;
  }

  function changeDescriptionTo(txt) {
    var txtToChange = document.getElementById("port-desc");
    txtToChange.innerHTML = txt;
  }

  function changeNameTo(txt) {
    var txtToChange = document.getElementById("port-desc-name");
    txtToChange.innerHTML = txt
    if(txt === "Monopoly Stats & Info") { gcImg.style.opacity = "0.2"; } else { gcImg.style.opacity = "1.0"; }
    if(txt === "Healthc") { swiftImg.style.opacity = "0.2"; } else { swiftImg.style.opacity = "1.0"; }
    if(txt === "Healthc") { swiftuiImg.style.opacity = "0.2"; } else { swiftuiImg.style.opacity = "1.0"; }
    if(txt === "Healthc") { cocoaImg.style.opacity = "0.2"; } else { cocoaImg.style.opacity = "1.0"; }
    if(txt === "Monopoly Stats & Info" || txt === "The Game of Life") { splineImg.style.opacity = "0.2"; } else { splineImg.style.opacity = "1.0"; }
    if(txt === "") { sketchImg.style.opacity = "0.2"; } else { sketchImg.style.opacity = "1.0"; }
    if(txt === "Monopoly Stats & Info" || txt === "LT Students" || txt == "The Game of Life") { coremlImg.style.opacity = "0.2"; } else { coremlImg.style.opacity = "1.0"; }
    if(txt === "Monopoly Stats & Info" || txt === "Healthc") { icloudImg.style.opacity = "0.2"; } else { icloudImg.style.opacity = "1.0"; }
    if(txt === "Monopoly Stats & Info" || txt === "The Game of Life") { pythonImg.style.opacity = "0.2"; } else { pythonImg.style.opacity = "1.0"; }
    if(txt === "Monopoly Stats & Info" || txt === "The Game of Life" || txt === "LT Students") { androidImg.style.opacity = "0.2"; } else { androidImg.style.opacity = "1.0"; }
    if(txt === "Monopoly Stats & Info" || txt === "The Game of Life" || txt === "LT Students") { javaImg.style.opacity = "0.2"; } else { javaImg.style.opacity = "1.0"; }
    if(txt === "Healthc") { appstoreImg.style.opacity = "0.2"; } else { appstoreImg.style.opacity = "1.0"; }
  }
}
















$(document).ready(function() {

  otherStuff();
  gridStuff();

  

  function gridStuff() {
    var $grid = $('.grid')
    var $gridItem = $('.grid__item')
    var gridItemHeight = $gridItem.height()
    var gridItemWidth = $gridItem.width()
    
    var horzCount = Math.floor($grid.width() / gridItemWidth)
    var vertCount = Math.floor($grid.height() / gridItemHeight)
    
    var totalGridItems = horzCount * vertCount
  
    for (var i = 0; i < totalGridItems; i++) {
      var $gridItemClone = $gridItem.clone();
      $grid.append($gridItemClone);
    }
  
    $gridItem.mouseover(function () { 
      $gridItem.style.opacity = 0.1;
    });
  }

  function otherStuff() {
    const myTags = [
      "Swift",
      "SwiftUI",
      "Cocoa",
      "3D Design",
      "Sketch",
      "Google Cloud",
      "Core ML",
      "iCloud",
      "Android",
      "Python",
      "Java",
      "Play/App Store"
    ];

    // var tagCloud = TagCloud('.content', myTags);

    var tagCloud = TagCloud('.content', myTags,{

      // radius in px
      radius: 300,
    
      // animation speed
      // slow, normal, fast
      maxSpeed: 'normal',
      initSpeed: 'normal',
    
      // 0 = top
      // 90 = left
      // 135 = right-bottom
      direction: 135,
    
      // interact with cursor move on mouse out
      keep: true
    
    }); 

  }
})
