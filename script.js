window.addEventListener('load',createHTML);

function createHTML()
{
	var btn_1 = document.createElement("button");
	var text1 =document.createElement("text");
	text1.innerHTML='+';
	var btn_2 = document.createElement("button");
	var text2 =document.createElement("text");
	text2.innerHTML='=';
	var text3 =document.createElement("text");
	text3.innerHTML='__';
	text3.id = "text3";
   
    btn_1.innerHTML=a;
    btn_2.innerHTML=b;


	document.body.appendChild(btn_1);
	document.body.appendChild(text1);
	document.body.appendChild(btn_2);
	document.body.appendChild(text2);
	document.body.appendChild(text3);

}

	

window.setTimeout(function() { window.location.reload();}, 10000);
document.addEventListener("DOMContentLoaded", init);

function init(){
	
	var btn = document.getElementsByClassName('button');
	for(var i =0 ; i < btn.length ;++i) {
		var output ="";
		btn[i].addEventListener('click',buttonClicked);
	}
	var submitButton =document.getElementById('buttonSubmit');
	submitButton.addEventListener('click',submitClicked);

	var clearButton = document.getElementById('buttonClear');
	console.log(clearButton);
	clearButton.addEventListener('click',clearClicked);

	}

var str = "";
var number ;
 var a = (Math.floor((Math.random()*10) + 1));
 var b =(Math.floor((Math.random()*10) + 1));

function buttonClicked(event){
	
	str = str +  event.target.textContent;
	document.getElementById('text3').textContent = str;
	number = Number(str);
	
}

function concatTextContent(){
	document.getElementById('text3').textContent=event.target.textContent;
}

function submitClicked(event){
	var h3 = document.createElement("h3");
	h3.id="h3_id"
	h3.innerHTML= " ";
	var sum =evaluate();
	console.log(sum);
	
	if(sum === number) {
		h3.innerHTML="You are correct";
		
	}
	else{

		h3.innerHTML="Better luck!! Next Time";
	
	}
		document.body.appendChild(h3);
}

function evaluate(){
	var sum = a+b;
	return sum;
}

function clearClicked(){
	document.getElementById('text3').textContent="";
	str="";
	document.getElementById('h3_id').innerHTML=" ";
}