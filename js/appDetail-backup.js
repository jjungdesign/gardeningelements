// Javascript
// Wait until all DOM assets have been loaded.
$(document).ready(() => {
  console.log( "ready!" );
  debugger;
  //When box is clicked, it pop ups.
  /*$(".cardBox").click(function() {
    var img = $(this).attr("src");
    var appear_white = "<div id="appear_white"></div>";
    $("body").append(appear_white);
  })*/

  // When click the "next" button it goes to the next page depending on what the current page number is.
  var pagePaths = [soilHTML, textureHTML, "../color.html", "../bone.html", "../pattern.html"];
  var pageIndex = 0;

  function showNextPage() {
    var lastPageIndex = pagePaths.length - 1;

    // If we're on the last image
    if (pageIndex === lastPageIndex) {
      // Set the index to the first image
      pageIndex = 0;
    } else {
    // Else
      // Increase the index of the image by 1
      pageIndex = pageIndex + 1;
    }

    // Grab the path of the image, i.e. the element, using the index
    var pageHref = pagePaths[pageIndex];

    debugger;
    // Update the image on the page using the path
    $(this).attr("href", pageHref);
  }

  $(".nextLink").click(function() {
    showNextPage();
  });

  var soilHTML = `<section class="grid">

  			<div class="columnImage">
  				<div id="soilBox" class="imageBox">
  					<h3><a class="indexLink" href="index.html">Elements of Gardening</a></h4>
  				</div>
  			</div>

  			<div class="columnText">
  				<div class="flexContainer1">
  					<ul>
  						<li><a href="#" class="beforeLink">before</a></li>
  						<li><a href="#" class="nextLink">next</a></li>
  					</ul>
  					<h2>Soil</h2>
  					<p>Soil is probably the most fundamental aspect of any garden. Healthy soil that is replenished naturally will grow healthy food stuffs year after year. It’s the key to everything when growing healthy plants and flowers.</p>
  					<h4>Types of soil</p>
  				</div>
  				<div class="flexContainer2">
  					<div class="cardBox"><h5>Sandy</h5></div>
  					<div class="cardBox"><h5>Clay</h5></div>
  					<div class="cardBox"><h5>Loamy</h5></div>
  				</div>
  			</div>

  		</section>
  `;

  var textureHTML = `		<section class="grid">

  			<div class="columnImage">
  				<div id="textureBox" class="imageBox">
  					<h3><a class="indexLink" href="index.html">Elements of Gardening</a></h4>
  				</div>
  			</div>

  			<div class="columnText">
  				<div class="flexContainer1">
  					<ul>
  						<li><a href="#" class="beforeLink">before</a></li>
  						<li><a href="#" class="nextLink">next</a></li>
  					</ul>
  					<h2>Texture</h2>
  					<p>Plants with different textures spotlight the key attributes of one another and creates more depth and varities to the garden. Soft, billowy plants can create pleasant contrast against of coarser leaves or wide, bold foliage. This contrast gives the garden a crisper definition and keeps it from looking two dimensional.</p>
  					<h4>Types of texture</h4>
  				</div>
  				<div class="flexContainer2">
  					<div class="cardBox"><h5>1</h5></div>
  					<div class="cardBox"><h5>2</h5></div>
  					<div class="cardBox"><h5>3</h5></div>
  				</div>
  			</div>

  		</section>
  `;

});
