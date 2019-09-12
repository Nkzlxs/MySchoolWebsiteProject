
//The funcion to show HomePage in the beginning
function showHomePage(){
	var homepage1 = document.getElementById("homepage");
	homepage1.classList.toggle("show");
	runGallery();

}

//The function to loop image in homepage
function runGallery() {
	var imageGallery = document.getElementById("homepage");

	var alphabets = ['a','b','c','d'];
	var numbers = ['0','1','2'];
	var randomA;
	var randomN;
	randomA = getRNG(0,3);
	randomN = getRNG(0,2);


	imageGallery.style.backgroundImage = "url(img/".concat(alphabets[randomA],numbers[randomN],".jpg)");
	//waitFor(5000);
	//waitFor(5000);	

	////fadeOUT(imageGallery);

	console.log(imageGallery.style.backgroundImage);
	setTimeout(runGallery,2000);
}

//The function to get a random number
function getRNG(min,max){
	return Math.floor(Math.random() * (max - min)) + min;
}

// function fadeOUT(element){
// 	var opacityVal = 1;
// 	element.style.display = 'block';
// 	element.style.opacity = opacityVal;
// 	var timer = setInterval(function (){
// 		if(opacityVal <= 0){
// 			runGallery();
// 			clearInterval(timer);
// 			return 0;
// 			//element.style.display = 'none';
// 		}
// 		element.style.opacity = opacityVal;
// 		//element.style.filter = 'opacity(opacityVal='.concat(opacityVal)
// 		opacityVal -= 0.01;
// 		console.log(opacityVal);
// 	},10);
// }

// The function to show the content of hamburger icon
function showNavlist(){
	console.log("showNavList");
	document.getElementById("navList").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.navBtn')) {
    var dropdowns = document.getElementsByClassName("navList");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


// change the display properties of the div(s) that belongs to the class 'content'
function displayContent(id){
	window.history.replaceState({}, document.title,"index.html");
	var list = document.getElementsByClassName("content");
	var thePlaceHolder = document.getElementById("placeholder");
	var theTitle = document.getElementsByClassName("title");
	//change background & looks of the webpage
	if (id==2 || id ==4) {
		document.body.style.backgroundImage = "url(img/reef_art_.jpg)";
		thePlaceHolder.style.backgroundColor = "rgba(255,253,189,.8)";
		thePlaceHolder.style.color = "rgba(0,0,0,1)";
		theTitle[0].style.backgroundImage = "url(img/title2.png)";
	}else if(id == 3 || id ==5){
		document.body.style.backgroundImage = "url(img/alpine_art_.jpg)";
		thePlaceHolder.style.backgroundColor = "rgba(153,48,0,.8)";
		thePlaceHolder.style.color = "rgba(204,255,250,1)";
		theTitle[0].style.backgroundImage = "url(img/title3.png)";
	}else if(id == 1){
		document.body.style.backgroundImage = "url(img/bamboo.png)";
		thePlaceHolder.style.backgroundColor = "rgba(0,255,102,.8)";
		thePlaceHolder.style.color = "rgba(0,0,0,1)";
		theTitle[0].style.backgroundImage = "url(img/title.png)";
	}else{
		document.body.style.backgroundImage = "url(img/bamboo.png)";
		thePlaceHolder.style.backgroundColor = "rgba(0,255,102,.8)";
		thePlaceHolder.style.color = "rgba(0,0,0,1)";
		theTitle[0].style.backgroundImage = "url(img/title.png)";
	}
	for(i = 0 ; i < list.length ; i++){
		list[i].style.display = "none";
		// var childs = list[i].childNodes;
		// for(j = 0; j < childs.length ; j++){
		// 	if(childs[j].id != undefined){
		// 		childs[j].id = "";
		// 	}
		// }
	}
	

	list[id].style.display = "block";
	list[id].parentElement.scrollTop = 0;
	// var childs2 = list[id].childNodes;
	// var idAssign = 0;
	// for(k = 0; k < childs2.length ; k++){
	// 	if(childs2[k].id != undefined){
	// 		console.log(childs2[k].tagName);
	// 		if(childs2[k].tagName=="SPAN"){
	// 			childs2[k].id = "Top";
	// 		}
	// 		if(childs2[k].className == "clear"){
	// 			childs2[k].id = idAssign.toString();
	// 			idAssign++;
	// 		}
	// 	}
	// }
}

function toggleImageContainer(flag,imgName){
	imageContainer = document.getElementsByClassName("imageContainer");
	enlargedImage = document.getElementsByClassName("enlargedImage");
	
	if(flag==1){
		imageContainer[0].style.display = "block";
		enlargedImage[0].style.backgroundImage = "url(".concat(imgName,")");
	}else if(flag==0){
		imageContainer[0].style.display = "none";
	}
}

//The scroll to target position thing
function scrollViewTo(id){

	var list = document.getElementsByClassName("clear");
	var chosenList = [];
	for(n = 0 ; n < list.length ; n++){
		if(list[n].parentElement.style.display != "none"){
			chosenList.push(list[n]);
		}
	}
	if(id == -1){
		chosenList[0].parentElement.parentElement.scrollTop = 0;
		return 0;
	}
	var topDistance = chosenList[id].offsetTop;
	chosenList[id].parentElement.parentElement.scrollTop = topDistance;
	console.log(chosenList[id].parentElement.parentElement.scrollTop);

}