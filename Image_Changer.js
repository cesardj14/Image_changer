var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');

	if(mySrc === 'Images/Jellyfish.jpg') {
		myImage.setAttribute('src', 'Images/Hydrangeas.jpg');
	} else {
		myImage.setAttribute('src', 'Images/Jellyfish.jpg');
	}
}