// Javascript
// Wait until all DOM assets have been loaded.
$(document).ready(() => {
  console.log( "ready!" );

  // When page load the image fades in

  $(".imageLoad").fadeIn('fast',function(){
    $(this).animate({'marginTop': '-=42%'},'slow');
    // $(this).animate({'top': '-500px'},'300');
    });

  // When click "list", the hidden content slides down

  $('.clickableList').eq(0).click(function() {
    event.preventDefault();
    $('#show-info-on-click').slideToggle();
  });


  $('.clickableList').eq(1).click(function() {
    event.preventDefault();
    $('#show-info-on-click2').slideToggle();
  });

  $('.clickableList').eq(2).click(function() {
    event.preventDefault();
    $('#show-info-on-click3').slideToggle();
  });


  // When hover "list", the icon color changes

  $('.clickableList').eq(0).mouseover(function() {
    event.preventDefault();
    $('#noun_1776266_cc').addClass('listHover');
    // $('.types').css('color', '#08C3A0');
  });

  $('.clickableList').eq(0).mouseout(function() {
    event.preventDefault();
    $('#noun_1776266_cc').removeClass('listHover');
  });

  $('.clickableList').eq(1).mouseover(function() {
    event.preventDefault();
    $('#noun_1776266_cc_2').addClass('listHover');
  });

  $('.clickableList').eq(1).mouseout(function() {
    event.preventDefault();
    $('#noun_1776266_cc_2').removeClass('listHover');
  });

  $('.clickableList').eq(2).mouseover(function() {
    event.preventDefault();
    $('#noun_1776266_cc_3').addClass('listHover');
  });

  $('.clickableList').eq(2).mouseout(function() {
    event.preventDefault();
    $('#noun_1776266_cc_3').removeClass('listHover');
  });




  //////////////////////////////////////////////////
  // Side Navigation
  //////////////////////////////////////////////////

  //When Menu link is clicked the navigation appears

  $('.menuLink').click(function() {
    $('#show-this-on-click').animate({
      width: 'toggle'}, 400);
  });


  //Mobile_When Menu link is clicked the navigation appears

  $('#hideMenuLink').click(function() {
    $('#show-this-on-click').animate({
      width: 'show'},400);
  });

  $('#hideMenuLink2').click(function() {
    $('#show-this-on-click').animate({
      width: 'hide'},400);
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

  $('#modalSeeAll').click(function() {
    $('.reference').slideToggle("fast");
  });

  //////////////////////////////////////////////////
  // Up Next
  //////////////////////////////////////////////////

  $('.nextModule').click(function() {
    window.location.href = $('a',this).attr('href');
  });

  //////////////////////////////////////////////////
  // Soil
  //////////////////////////////////////////////////

  $('.soilBox').eq(0).click(function() {
    event.preventDefault();
    $('#hideSoil1').slideToggle(300);
  })

  $('.soilBox').eq(1).click(function() {
    event.preventDefault();
    $('#hideSoil2').slideToggle(300);
  })

  $('.soilBox').eq(2).click(function() {
    event.preventDefault();
    $('#hideSoil3').slideToggle(300);
  })


  //////////////////////////////////////////////////
  // Texture
  //////////////////////////////////////////////////

  /*$('.clickableList').mouseover(function() {
    $(this).css('background-color', '#F0F0F8');
  });

  $('.clickableList').mouseout(function() {
    $(this).css('background-color', 'white');
  });

  $('.clickableList').click(function() {
    $(this).css('background-color', 'white');
  });*/
});
