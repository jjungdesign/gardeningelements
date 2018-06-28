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
  btn.onclick = function() {
      modal.style.display = "block";
  }

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
  $('.box').click(function() {
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
