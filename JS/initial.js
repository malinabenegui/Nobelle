	//LOADING BAR
	var progress_bar = document.createElement("div");
	var load = document.createElement("div");
	var width = 5;
	load.innerHTML = "5%";
	progress_bar.style.width = "100%";
	progress_bar.style.backgroundColor = "#ddd";
	load.style.width = "5%";
	load.style.height = "35px";
	load.style.textAlign = "center";
	load.style.lineHeight = "35px";
	load.style.color = "white";
	load.style.backgroundColor = "#ff5f00";
	
	var id = setInterval(frame,10);
	function frame()
	{
		if (width >= 100) 
		{
			clearInterval(id);
		} 
		else 
		{
			width++; 
			load.style.width = width + '%'; 
			load.innerHTML = width + '%';
		}
	}
	progress_bar.appendChild(load);
	document.body.appendChild(progress_bar);
	//loading bar finalizat






function pret_range()
{
	var x = document.getElementById("Range").value;
	document.getElementById("demo").innerHTML = x + " lei";
	
	var pret = document.querySelectorAll(".ppret");
	var list_prod = document.querySelectorAll(".patrat"); //creez o lista cu toate produselor
	for(var i = 0; i < pret.length; i++)
	{
		var a = parseFloat(pret[i].innerHTML);
		if(x < a) //daca numarul de lei din pretul maxim este mai mic decat pretul produsului curent
			list_prod[i].style.display = "none";
		else
			list_prod[i].style.display = "block";
	}
}

function tip_text()
{
	var x = document.getElementById("Text").value;
	var list_img = document.querySelectorAll(".imagi");//creez o lista cu toate imaginile produselor
	var list_prod = document.querySelectorAll(".patrat"); //creez o lista cu toate produselor
	for(var i = 0; i < list_img.length; i++)
	{
		var y = list_img[i].alt;
		var y2 = list_img[i].title;
		if(y.search(x) == -1 && y2.search(x) == -1)
			list_prod[i].style.display = "none";
		else 
			list_prod[i].style.display = "block";
	}
}

function check()
{
	var list_check = document.getElementsByName("color");
	var list_prod = document.querySelectorAll(".patrat");
	var ok = 0;
	
	for(var i = 0; i < list_prod.length; i++)
		list_prod[i].style.display = "none";
	
	if(list_check[0].checked == true) //daca rosu e bifat
	{
		ok = 1; //cel putin un element a fost bifat
		list_prod[8].style.display = "block"; //afisez rujul YSL
	}
		
	if(list_check[1].checked == true) //daca roz e bifat
	{
		ok = 1;
		list_prod[0].style.display = "block"; //afisez fardul Becca
		list_prod[1].style.display = "block"; //paleta YSL
		list_prod[2].style.display = "block"; //paleta Too Faced
		list_prod[7].style.display = "block"; //ruj Fenty Beauty
	}
	
	if(list_check[2].checked == true) // daca auriu e bifat
	{
		ok = 1;
		list_prod[1].style.display = "block"; //paleta YSL
		list_prod[4].style.display = "block"; //highligther Fenty
	}
	
	if(list_check[3].checked == true) // daca multicolor e bifat
	{
		ok = 1;
		list_prod[1].style.display = "block"; //paleta YSL
		list_prod[2].style.display = "block"; //paleta Too Faced
		list_prod[5].style.display = "block"; //highlighter Too Faced
		list_prod[6].style.display = "block"; //highlighter Becca
	}
	
	if(list_check[4].checked == true) //daca negru e bifat
	{
		ok = 1;
		list_prod[3].style.display = "block"; //mascara
	}
	
	if(ok == 0) //daca niciun element nu a fost bifat
	{
		for(var i = 0; i < list_prod.length; i++) //le debifez pe toate
			list_prod[i].style.display = "block";
	}
	ok = 0;
}

function tip_pr()
{
	var list_radio = document.getElementsByName("tip");
	var list_prod = document.querySelectorAll(".patrat");
	
	for(var i = 0; i < list_prod.length; i++)
		list_prod[i].style.display = "none";
	
	if(list_radio[0].checked == true) //daca fard de pleoape e selectat
	{
		list_prod[0].style.display = "block";
		list_prod[1].style.display = "block";
		list_prod[2].style.display = "block";
	}
	if(list_radio[1].checked == true) //daca mascara e selectat
		list_prod[3].style.display = "block";
		
	if(list_radio[2].checked == true) //daca highlighter e selectat
	{
		list_prod[4].style.display = "block";
		list_prod[5].style.display = "block";
		list_prod[6].style.display = "block";
	}
	if(list_radio[3].checked == true) //daca ruj e selectat
	{
		list_prod[7].style.display = "block";
		list_prod[8].style.display = "block";
	}
}