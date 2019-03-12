var poz = 0, neg = 0;

window.onload = function()
{
	//TEXTAREA	
	document.body.appendChild(document.createTextNode("Comentarii"));
	document.body.innerHTML += "<br/>";
	var rating = document.createElement("p");
	rating.id = "rat";
	document.body.appendChild(rating);
	
	var prod = document.createElement("textarea");
	prod.id = "produs";
	prod.defaultValue = "Denumire produs";
	prod.required;
	prod.cols = "20";
	prod.rows = "1";
	document.body.appendChild(prod);
	document.body.innerHTML += "<br/>";
	
	var txt = document.createElement("textarea");
	txt.required;
	txt.defaultValue = "Adauga Comentariu";
	txt.id = "comment";
	txt.cols = "50";
	txt.rows = "10";
	txt.style.display = "block";	
	txt.addEventListener("click", Sterge);
	document.getElementById("produs").parentNode.appendChild(txt);
	
	var star = document.createElement("img");
	star.setAttribute("src", "../Galerie/ratunfil.png");
	star.id = "star1";
	star.style.width = "auto";
	star.addEventListener("click", fil);
	document.getElementById("produs").previousSibling.appendChild(star);
	
	var btn = document.createElement("button");
	btn.id = "my_btn";
	btn.appendChild(document.createTextNode("Lasa Comentariu"));
	btn.style.display = "block";
	btn.onclick = com;
	document.body.appendChild(btn);
	
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
	progress_bar.appendChild(load);
	document.body.appendChild(progress_bar);
	function frame()
	{
		if (width >= 100) 
		{
			var pro = document.createElement("p");
			var imag = document.createElement("img");
			imag.setAttribute("src", "../Galerie/ratfil.png");
			imag.style.width = "auto";
			imag.style.marginBottom = "-90px";
			pro.id = "pros";
			pro.appendChild(imag);
			document.body.appendChild(pro);
			
			var con = document.createElement("p");
			var imag = document.createElement("img");
			imag.setAttribute("src", "../Galerie/ratunfil.png");
			imag.style.width = "auto";
			imag.style.marginBottom = "-90px";
			con.id = "cons";
			con.appendChild(imag);
			con.style.marginTop = "30px";
			document.body.appendChild(con);
			
			var comentarii_poz = document.createElement("p"); //paragraf in care memorez comentariile pozitive
			comentarii_poz.style.display = "none";
			comentarii_poz.id = "coms_poz";
			document.body.appendChild(comentarii_poz);
			
			var comentarii_neg = document.createElement("p"); //paragraf in care memorez comentariile negative
			comentarii_neg.style.display = "none";
			comentarii_neg.id = "coms_neg";
			document.body.appendChild(comentarii_neg);
			
			document.getElementById("coms_poz").innerHTML += "<br/>" + localStorage.getItem("coment_poz");
			document.getElementById("coms_neg").innerHTML += "<br/>" + localStorage.getItem("coment_neg");
			
			document.getElementById("pros").innerHTML += "<br/>" + localStorage.getItem("coment_poz");
			document.getElementById("cons").innerHTML += "<br/>" + localStorage.getItem("coment_neg");
			
			progress_bar.removeChild(load);
			document.body.removeChild(progress_bar);
			clearInterval(id);
		} 
		else 
		{
			width++; 
			load.style.width = width + '%'; 
			load.innerHTML = width + '%';
		}
	}
	
	//loading bar finalizat
}

function com()
{
	var txt_com = document.getElementById("comment").value;
	var denum = document.getElementById("produs").value;
	
	
	if (typeof(Storage) !== "undefined")
	{
		if(document.getElementById("starf1")) //daca sunt comentarii pozitive
		{
			document.getElementById("coms_poz").innerHTML += denum + "<br>" + txt_com + "<br> <br>";
			var store_com = document.getElementById("coms_poz").innerHTML;
			localStorage.setItem("coment_poz", store_com);
		}
		else //daca sunt comentarii negative
		{
			document.getElementById("coms_neg").innerHTML += denum + "<br>" + txt_com + "<br> <br>";
			var storen_com = document.getElementById("coms_neg").innerHTML;
			localStorage.setItem("coment_neg", storen_com);
		}
		
	}
	document.getElementById("produs").value = "";
	document.getElementById("comment").value = "";
}

function fil()
{
	if(document.getElementById("star1")) //daca star e deselectat
	{
		var star = document.getElementById("rat").firstChild;
		var starfil = document.createElement("img");
		starfil.id = "starf1";
		starfil.setAttribute("src", "../Galerie/ratfil.png");
		starfil.style.width = "auto";
		document.getElementById("rat").replaceChild(starfil, star);
		starfil.addEventListener("click", fil);
	}
	else
	{
		var starfil = document.getElementById("starf1");
		var star = document.createElement("img");
		star.id = "star1";
		star.setAttribute("src", "../Galerie/ratunfil.png");
		star.style.width = "auto";
		document.getElementById("rat").removeChild(starfil);
		rat.appendChild(star);
		star.addEventListener("click", fil);
	}
}

function Sterge()
{
	var txt = document.getElementById("comment");
	var prod = document.getElementById("produs");
	if(txt.value == "Adauga Comentariu")
		txt.value = "";
}