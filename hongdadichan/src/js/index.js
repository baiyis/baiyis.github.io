
function canvasSrok(eleid) {
	var c=document.getElementById(eleid);
	var cxt=c.getContext("2d");
	cxt.strokeStyle="#000";
	cxt.beginPath();
	cxt.arc(80,60,50,0,Math.PI*2,true);
	cxt.moveTo(30,45);
	cxt.lineTo(10,60);
	cxt.lineTo(30,75);
	cxt.closePath();
	cxt.stroke();
}
function canvasfill(eleid) {
	var c=document.getElementById(eleid);
	var cxt=c.getContext("2d");
	cxt.fillStyle="#09f";
	cxt.beginPath();
	cxt.arc(80,60,50,0,Math.PI*2,true);
	cxt.moveTo(30,45);
	cxt.lineTo(10,60);
	cxt.lineTo(30,75);
	cxt.closePath();
	cxt.fill();
}
canvasfill('canvas_top');
canvasSrok('canvas_middle');
canvasSrok('canvas_bottom');


