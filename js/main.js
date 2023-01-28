$('.rotate').propeller({inertia: 0, speed: 0});


var c1 = document.querySelectorAll("circle")[0],
	c2 = document.querySelectorAll("circle")[1],
	c3 = document.querySelectorAll("circle")[2],
	path = document.querySelectorAll("path")[0],
	drag, d = {x1:135,y1:153,x2:93,y2:379,x3:64,y3:433};
window.addEventListener("mousedown",mdHandler);
function mdHandler(e){
	if(e.srcElement instanceof SVGCircleElement){
		drag = e.srcElement;
		drag.x = e.srcElement.getAttribute("cx");
		drag.y = e.srcElement.getAttribute("cy");
		drag.clientX = e.clientX;
		drag.clientY = e.clientY;
		
		window.addEventListener("mousemove",mmHandler);
		window.addEventListener("mouseup",muHandler);
	}
}

function mmHandler(e){
	drag.setAttribute("cx",e.clientX - (drag.clientX - drag.x));
	drag.setAttribute("cy",e.clientY - (drag.clientY - drag.y));
	switch( drag ){
		case c1:
			d.x1 = drag.getAttribute("cx");
			d.y1 = drag.getAttribute("cy"); break;
		case c2:
			d.x2 = drag.getAttribute("cx");
			d.y2 = drag.getAttribute("cy"); break;
		case c3:
			d.x3 = drag.getAttribute("cx");
			d.y3 = drag.getAttribute("cy"); break;
	}
	path.setAttribute("d",`M${d.x1} ${d.y1} Q ${d.x2} ${d.y2} ${d.x3} ${d.y3}`);
	document.getElementById("path").innerHTML = path.getAttribute("d");
}
function muHandler(e){
	window.removeEventListener("mousemove",mmHandler);
	window.removeEventListener("mouseup",muHandler);
}



function generatePDF() {
	
	const element = document.getElementById('invoice');
	var opt = {
		margin:       1,
		filename:     'Mavis patch.pdf',
		image:        { type: 'jpeg', quality: 0.98 },
		html2canvas:  { scale: 1, width: 1200},
		jsPDF:        { unit: 'in', format: 'letter', orientation: 'landscape' }
	};
	html2pdf().set(opt).from(element).save();
}
function generatePDFAll() {
	
	const element = document.getElementById('allPDF');
	var opt = {
		margin:       1,
		filename:     'Mavis patches.pdf',
		image:        { type: 'jpeg', quality: 1 },
		html2canvas:  { width: 1200},
		jsPDF:        { unit: 'in', format: 'letter', orientation: 'landscape' }
	};
	html2pdf().set(opt).from(element).save();
}
$(document).ready(function(){
	$('.slider').slick({
	
});
});
// function convertCanvasToImage() {
// 	let canvas = document.getElementById("canvas");
// 	let image = new Image();
// 	image.src = canvas.toDataURL();
// 	return image;
// }
// let pnGImage = convertCanvasToImage();
// document.appendChild(pnGImage);