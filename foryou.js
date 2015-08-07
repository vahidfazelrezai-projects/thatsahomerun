var container;

window.onLoad = function(){
	container = document.getElementById('waka-picture');
	setInterval(flipPhotos, 1000);
	console.log('hi');


}




function flipPhotos(){
	var images = ['	WAKAWAKA_L2.PNG', 'WAKAWAKA_R2.PNG'];
	var image = 0;
	if (image==0){image=1;}
	if (image==1){image=0;}
	container.style.backgroundImage = 'url(' + images[image] + ')';

}