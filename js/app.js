// Javascript
// Wait until all DOM assets have been loaded.
$(document).ready(() => {
  console.log( "ready!" );

  //inertiaScroll plug-in
  $(function(){

	  $(".box").inertiaScroll({
	    parent: $("#content")
	  });

	});

  function hoverTouchUnstick() {
  // Check if the device supports touch events
  if('ontouchstart' in document.documentElement) {
    // Loop through each stylesheet
    for(var sheetI = document.styleSheets.length - 1; sheetI >= 0; sheetI--) {
      var sheet = document.styleSheets[sheetI];
      // Verify if cssRules exists in sheet
      if(sheet.cssRules) {
        // Loop through each rule in sheet
        for(var ruleI = sheet.cssRules.length - 1; ruleI >= 0; ruleI--) {
          var rule = sheet.cssRules[ruleI];
          // Verify rule has selector text
          if(rule.selectorText) {
            // Replace hover psuedo-class with active psuedo-class
            rule.selectorText = rule.selectorText.replace(":hover", ":active");
          }
        }
      }
    }
  }
}

  //When 'Diurnal' link is clicked
    //default
  $(".diurnalLink").click(function(event) {
    event.preventDefault();

    $("body").removeClass("night");
  });

  //When 'Nocturnal' link is clicked
    //change background of body black
    //change color of links to white
    //change color of headline to white
  $(".nocturnalLink").click(function(event) {
    event.preventDefault();

    $("body").addClass("night");
  })

  //////////////////////////////////////////////////
  // Side Navigation
  //////////////////////////////////////////////////

  //When Menu link is clicked the navigation appears

  $('.menuLink').click(function() {
    $('#show-this-on-click').animate({
      width: 'toggle'}, 500);
  });

  $('#modalSeeAll').click(function() {
    $('.reference').slideToggle("fast");
  });

  //////////////////////////////////////////////////
  // Modal
  //////////////////////////////////////////////////

  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var btn = document.getElementById("aboutLink");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];


  // When the user clicks on the button, open the modal
  // btn.onclick = function() {
  //     modal.style.display = "block";
  // }

  $("#aboutLink").click(function() {
    $("#myModal").show();
  });

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

  //////////////////////////////////////////////////
  // Boxes
  //////////////////////////////////////////////////

  // When box is clicked, it goes to the corresponsive URL
  $("#soil").click(function() {
    window.location.href = $('a',this).attr('href');
  });

  $("#texture").click(function() {
    window.location.href = $('a',this).attr('href');
  });

  $("#color").click(function() {
    window.location.href = $('a',this).attr('href');
  });

  $("#bone").click(function() {
    window.location.href = $('a',this).attr('href');
  });


  $("#pattern").click(function() {
    window.location.href = $('a',this).attr('href');
  });




  //////////////////////////////////////////////////
  // Animation
  //////////////////////////////////////////////////

  $('#soil').hover(function() {
    event.preventDefault();
    // $(this).find("img").addClass("leaf-animate");
    // $(".divLink").addClass('changed');
    // $(this).find(".divLink").toggleClass('changed')
  });

  $('#soil').mouseout(function() {
    event.preventDefault();
    // $(this).find("img").removeClass("leaf-animate");
  });

  $('#texture').mouseover(function() {
    event.preventDefault();
    // $(this).find("img").addClass("leaf-animate");
    $(".divLink").addClass('changed');
  });

  $('#texture').mouseout(function() {
    event.preventDefault();
    // $(this).find("img").removeClass("leaf-animate");
  });

  $('#color').mouseover(function() {
    event.preventDefault();
    // $(this).find("img").addClass("leaf-animate");
    $(".divLink").addClass('changed');
  });

  $('#color').mouseout(function() {
    event.preventDefault();
    // $(this).find("img").removeClass("leaf-animate");
  });

  $('#bone').mouseover(function() {
    event.preventDefault();
    // $(this).find("img").addClass("leaf-animate");
    $(".divLink").addClass('changed');
  });

  $('#bone').mouseout(function() {
    event.preventDefault();
    // $(this).find("img").removeClass("leaf-animate");
  });

  $('#pattern').mouseover(function() {
    event.preventDefault();
    // $(this).find("img").addClass("leaf-animate");
    $(".divLink").addClass('changed');
  });

  $('#pattern').mouseout(function() {
    event.preventDefault();
    // $(this).find("img").removeClass("leaf-animate");
  });


  // $('#soil').mouseout(function() {
  //   event.preventDefault();
  //   $(this).find("img").removeClass("leaf-animate");
  //   // $('.leaf-animate').hide();
  // });

  //When element box is clicked, it pop ups.
/*  $("#texture").click(function() {

    // scroll to the top of the box
    var topValue = $("#texture")[0].getBoundingClientRect().top;

    ("html, body").scrollTop(topValue + window.scrollY);
    debugger;

    $("#texture").animate({
      height: "100vh",
      margintop: "201"
    }, 800, function(){
      $(location).attr('href', 'texture.html');
    });
    $("h2").hide();
    $("#soil").hide();
    $("#color").hide();
    $("#pattern").hide();
    $("#bone").hide();
  })


$("#soil").click(function() {

  // scroll to the top of the box
    var topValue = $("#texture")[0].getBoundingClientRect().top;

    $("html, body").scrollTop(topValue + window.scrollY);
    debugger;

    $("#soil").animate({
      width: "140%",
    }, 1000, function(){
      $(location).attr('href', 'soil.html');
    });
    $("p").hide();
    $("#texture").hide();
    $("#color").hide();
    $("#pattern").hide();
    $("#bone").hide();
  })*/
});
