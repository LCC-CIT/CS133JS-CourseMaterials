window.onload = init;

function init()
{
	var imgs = document.querySelectorAll("#image_list a");
	for (var i = 0; i < imgs.length; i++)
	{
		// preload images for faster loading on click
		var swappedImage = new Image();
		swappedImage.src = imgs[i].getAttribute("href");
		// set up event handlers for links
		imgs[i].onclick = swapImage;
	}
	// move focus to first thumbnail
	imgs[0].focus();
}

function swapImage()
{
	// show the image - the url is in the href attribute of the anchor tag
	var imageURL = this.getAttribute("href");
	document.getElementById("image").setAttribute("src", imageURL);
	// and the caption - which is in the title
	var caption = this.getAttribute("title");
	document.getElementById("caption").innerHTML = caption;
	return false;
}