//alert(35);
//calendar function will find today date
function calendar(){
	var day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	var month = ['January','February','March','April','May','June','July','August','September','October','November','December'];
	var d = new Date();
	setText('day', day[d.getDay()]);
	setText('date', d.getDate());
	setText('monthYear', month[d.getMonth()]+' '+(1900+d.getYear()));
};

//this function will set the text value of <p> tags
function setText(id, val){
	if(val < 10){
		val = '0' + val; //add leadng 0 if val < 10
	}
	document.getElementById(id).innerHTML = val;
};
//call the calendar function
window.onload = calendar;