

window.onload = init;

function init()
{
	var h2Elements = document.querySelectorAll("#faqs h2");
	for (var i = 0; i < h2Elements.length; i++)
	{
		h2Elements[i].onclick = expandOrCollapse;
	}
}

function expandOrCollapse()
{
	var heading = this;
	if (heading.getAttribute("class") == "minus")
		heading.setAttribute("class", "");
	else
		heading.setAttribute("class", "minus");
	var description = heading.nextElementSibling;
	if (description.getAttribute("class") == "open")
		description.setAttribute("class", "");
	else
		description.setAttribute("class", "open");
}
