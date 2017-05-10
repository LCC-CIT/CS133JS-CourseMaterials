window.onload = init;

function init()
{
	var imgs =  document.querySelectorAll("#image_rollovers img");
	for (var i = 0; i < imgs.length; i++)
	{
		var newURL = imgs[i].getAttribute("id");
		// preload image
		var rolloverImage = new Image();
		rolloverImage.src = newURL;
		// event handlers
		imgs[i].onmouseover = swapImage;
		imgs[i].onmouseout = swapImage;	
	}
}

function swapImage()
{
	var oldURL = this.getAttribute("src");
	var newURL = this.getAttribute("id");
	this.setAttribute("src", newURL);
	this.setAttribute("id", oldURL);	
}