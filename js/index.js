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
