if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){

	setInterval(loop, 600);

}

var x = 0;

var titleText = ["$", "$ m", "$ me", "$ meg", "$ megu", "$ megum", "$ megumi", "$ megumin", "$ megumin.", "$ megumin.t", "$ megumin.te", "$ megumin.tea", "$ megumin.team", "$ megumin.tea",  "$ megumin.te",  "$ megumin.t", "$ megumin.", "$ megumin", "$ megumi", "$ megum",  "$ megu",  "$ meg",  "$ me", " $ m"]; //pHard coded xd Nyctum

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}