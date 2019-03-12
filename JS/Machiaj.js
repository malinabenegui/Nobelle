window.onload = function()
{
	//Range
	var inp_range = document.createElement("INPUT");
	inp_range.setAttribute("type", "range");
	inp_range.setAttribute("id", "myrange");
	document.getElementById("demo4").appendChild(inp_range);
	var max_val = document.getElementById("myrange").max = "240";
	document.getElementById("myrange").defaultValue = "240";
	
	document.getElementById("demo3").innerHTML = "Pret Maxim";
	document.getElementById("demo3").style.marginTop = "1.3%";
	document.getElementById("demo3").style.fontWeight = "bold";
	
	var interv = setInterval(time, 1000);
	
	//Text
	var imag = document.createElement("img");
	imag.setAttribute("src", "../Galerie/cautare1.PNG");
	imag.id = "cauta";
	imag.setAttribute("alt", "cauta");
	document.getElementById("demo").appendChild(imag);
	
	inp_txt = document.createElement("INPUT");
	inp_txt.setAttribute("type", "text");
	inp_txt.setAttribute("id", "mytext");
	document.getElementById("demo").insertBefore(inp_txt, imag);
	inp_txt.addEventListener("input", cautare);
	//inp_txt.addEventListener("keypress", function(event){event.preventDefault()});

	
	
	//CHECKBOX
	document.getElementById("demo61").innerHTML = "Culoare";
	document.getElementById("demo61").style.marginTop = "1.3%";
	document.getElementById("demo61").style.fontWeight = "bold";
	//rosu
	var inp_check = document.createElement("INPUT");
	inp_check.setAttribute("type", "checkbox");
	inp_check.classList.add("my_check");
	inp_check.setAttribute("id", "rosu");
	inp_check.setAttribute("name", "culori");
	inp_check.setAttribute("value", "rosu");
	document.getElementById("demo6").appendChild(inp_check);
	var label = document.createElement("label");
	label.htmlFor = "rosu";
	label.classList.add("my_label");
	label.appendChild(document.createTextNode("Rosu "));
	demo6.appendChild(label);
	//roz
	inp_check = document.createElement("INPUT");
	inp_check.setAttribute("type", "checkbox");
	inp_check.classList.add("my_check");
	inp_check.id = "roz";
	inp_check.setAttribute("name", "culori");
	inp_check.setAttribute("value", "roz");
	document.getElementById("demo6").appendChild(inp_check);
	label = document.createElement("label");
	label.htmlFor = "roz";
	label.classList.add("my_label");
	label.appendChild(document.createTextNode("Roz "));
	demo6.appendChild(label);
	//auriu
	inp_check = document.createElement("INPUT");
	inp_check.setAttribute("type", "checkbox");
	inp_check.classList.add("my_check");
	inp_check.setAttribute("name", "culori");
	inp_check.setAttribute("value", "auriu");
	inp_check.id = "auriu";
	document.getElementById("demo6").appendChild(inp_check);
	label = document.createElement("label");
	label.htmlFor = "auriu";
	label.classList.add("my_label");
	label.appendChild(document.createTextNode("Auriu "));
	demo6.appendChild(label);
	//multicolor
	inp_check = document.createElement("INPUT"); 
	inp_check.setAttribute("type", "checkbox");
	inp_check.classList.add("my_check");
	inp_check.setAttribute("name", "culori");
	inp_check.id = "multicolor";
	inp_check.setAttribute("value", "multicolor");
	document.getElementById("demo7").appendChild(inp_check);
	label = document.createElement("label");
	label.htmlFor = "multicolor";
	label.classList.add("my_label");
	label.appendChild(document.createTextNode("Multicolor "));
	demo7.appendChild(label);
	//negru
	inp_check = document.createElement("INPUT");
	inp_check.setAttribute("type", "checkbox");
	inp_check.classList.add("my_check");
	inp_check.setAttribute("name", "culori");
	inp_check.setAttribute("value", "negru");
	inp_check.id = "negru";
	document.getElementById("demo7").appendChild(inp_check);
	label = document.createElement("label");
	label.htmlFor = "negru";
	label.classList.add("my_label");
	label.appendChild(document.createTextNode("Negru "));
	demo7.appendChild(label);
	//checkbox finalizat
	
	
	//RADIO
	document.getElementById("demo81").innerHTML = "Tip Produs"
	document.getElementById("demo81").style.marginTop = "1.3%";
	document.getElementById("demo81").style.fontWeight = "bold";
	//Fard
	inp_rad = document.createElement("INPUT");
	inp_rad.setAttribute("type", "radio");
	inp_rad.className = "my_rad";
	inp_rad.setAttribute("name", "tip");
	inp_rad.setAttribute("value", "fard");
	inp_rad.id = "fard";
	document.getElementById("demo8").appendChild(inp_rad);
	label = document.createElement("label");
	label.htmlFor = "fard";
	label.appendChild(document.createTextNode("Fard de pleoape"));
	demo8.appendChild(label);
	//Mascara
	inp_rad = document.createElement("INPUT");
	inp_rad.setAttribute("type", "radio");
	inp_rad.className = "my_rad";
	inp_rad.setAttribute("name", "tip");
	inp_rad.setAttribute("value", "mascara");
	inp_rad.id = "mascara";
	document.getElementById("demo9").appendChild(inp_rad);
	label = document.createElement("label");
	label.htmlFor = "mascara";
	label.appendChild(document.createTextNode("Mascara"));
	demo9.appendChild(label);
	//Highlighter
	inp_rad = document.createElement("INPUT");
	inp_rad.setAttribute("type", "radio");
	inp_rad.className = "my_rad";
	inp_rad.setAttribute("name", "tip");
	inp_rad.setAttribute("value", "highlighter");
	inp_rad.id = "highlighter";
	document.getElementById("demo10").appendChild(inp_rad);
	label = document.createElement("label");
	label.htmlFor = "highlighter";
	label.appendChild(document.createTextNode("Highlighter"));
	demo10.appendChild(label);
	//Ruj
	inp_rad = document.createElement("INPUT");
	inp_rad.setAttribute("type", "radio");
	inp_rad.className = "my_rad";
	inp_rad.setAttribute("name", "tip");
	inp_rad.setAttribute("value", "ruj");
	inp_rad.id = "ruj";
	document.getElementById("demo11").appendChild(inp_rad);
	label = document.createElement("label");
	label.htmlFor = "ruj";
	label.appendChild(document.createTextNode("Ruj"));
	demo11.appendChild(label);
	//radio finalizat
	
	//SELECT
	document.getElementById("demo121").innerHTML = "Brand";
	document.getElementById("demo121").style.marginTop = "1.3%";
	document.getElementById("demo121").style.fontWeight = "bold";
	
	y = document.createElement("SELECT");
	y.setAttribute("id", "my_sel");
	document.getElementById("demo12").appendChild(y);
	
	var z = document.createElement("option"); //Becca
	z.setAttribute("name", "brand");
	z.setAttribute("value", "Becca");
	z.appendChild(document.createTextNode("Becca"));
	document.getElementById("my_sel").appendChild(z);
	
	z = document.getElementById("my_sel");//Fenty Beauty
	var option = document.createElement("option");
	option.setAttribute("name", "brand");
	option.text = "Fenty Beauty";
	z.add(option);
	
	z = document.getElementById("my_sel"); //Too Faced
	var option = document.createElement("option");
	option.setAttribute("name", "brand");
	option.text = "Too Faced";
	z.add(option);

	z = document.getElementById("my_sel"); //Too Faced
	var option = document.createElement("option");
	option.setAttribute("name", "brand");
	option.text = "YSL";
	z.add(option);
	
	document.getElementById("my_sel").size = "4";
	document.getElementById("my_sel").selectedIndex = "-1";//nu selectez niciun element initial
	//select finalizat
	
	demo1.addEventListener("mouseover", mareste);
	demo1.addEventListener("mouseout", micsoreaza);
	
	//event.PageX, event.PageY
	imag = document.createElement("img");
	imag.setAttribute("alt", "snow");
	imag.style.width = "auto";
	imag.setAttribute("src", "../Galerie/snow.png");
	var dv = document.createElement("div");
	dv.appendChild(imag);
	container.onmouseenter = function sparkle(event)
	{
		document.body.appendChild(dv);
	}
	container.onmousemove = function sparkle(event)
	{
		dv.style.position = "absolute";
		dv.style.left = event.pageX + "px";
		dv.style.top = event.pageY + "px";
	}
	container.onmouseleave = function sparkle()
	{
		document.body.removeChild(dv);
	}
	
	document.body.onkeypress = function()
	{
		if(event.keyCode == "49")
			location.reload();
		if(event.which == "50")
			location.assign("../HTML/Comm.html");
	}
}

window.onchange = function()
{
	var val = document.getElementById("myrange").value;

	document.getElementById("demo5").innerHTML = val + " lei";
	
	document.getElementById("demo5").style.marginTop = "-0.7%";
	
	var list_check = document.getElementsByClassName("my_label");
	var list_checkbox = document.getElementsByClassName("my_check");
	for(var i = 0; i < list_check.length; i++)
		if(list_checkbox[i].checked == true)
			list_check[i].style.fontWeight = "bold";
		else
			list_check[i].style.fontWeight = "normal";
	
}

function time()
{
	var d = new Date();
	var time = d.toLocaleTimeString();
	demo1.innerHTML = "Time: " + time;
	demo1.style.marginLeft = "70%";
}

function mareste()
{
	demo1.style.fontSize = "150%";
	demo1.style.fontWeight = "bold";
}

function micsoreaza()
{
	demo1.style.fontSize = "100%";
	demo1.style.fontWeight = "normal";
}

function cautare()
{
	var txt = document.getElementById("mytext").value;
	var list_img = document.querySelectorAll(".imagi");//creez o lista cu toate imaginile produselor
	var list_prod = document.querySelectorAll(".patrat"); //creez o lista cu toate produselor
	for(var i = 0; i < list_img.length; i++)
	{
		var y = list_img[i].alt;
		var y2 = list_img[i].title;
		if(y.search(txt) == -1 && y2.search(txt) == -1)
			list_prod[i].style.display = "none";
	}
	
	if(txt == "")
		for(var i = 0; i < list_prod.length; i++)
			list_prod[i].style.display = "block";
}

function filtreaza()
{	
	var i;
	if(document.getElementsByTagName("button")[0].innerHTML == "Filtreaza") //ascund produsele ce nu corespund cerintelor
	{
		document.getElementsByTagName("button")[0].innerHTML = "Sterge Filtre";
		var list_prod = document.querySelectorAll(".patrat"); //creez o lista cu toate produsele
		var list_img = document.querySelectorAll(".imagi");//creez o lista cu toate imaginile produselor
		
		//filtrez produsele in functie de culoare
		var list_check = document.getElementsByClassName("my_check"); //lista cu nuante
		var ok = 0;
		for(i = 0; i < list_check.length; i++)
			if(list_check[i].checked == true)
				ok = 1;
		
		if(ok == 1) //daca cel putin o culoare e bifata
		{
			for(i = 0; i < list_prod.length; i++) //sterg toate produsele pentru a le afisa doar pe cele bifate
				list_prod[i].style.display = "none";
			
			if(list_check[0].checked == true) //daca rosu e bifat
				list_prod[8].style.display = "block"; //afisez rujul YSL

			if(list_check[1].checked == true) //daca roz e bifat
			{
				list_prod[0].style.display = "block"; //afisez fardul Becca
				list_prod[1].style.display = "block"; //paleta YSL
				list_prod[2].style.display = "block"; //paleta Too Faced
				list_prod[7].style.display = "block"; //ruj Fenty Beauty
			}
			
			if(list_check[2].checked == true) // daca auriu e bifat
			{
				list_prod[1].style.display = "block"; //paleta YSL
				list_prod[4].style.display = "block"; //highligther Fenty
			}
			
			if(list_check[3].checked == true) // daca multicolor e bifat
			{
				list_prod[1].style.display = "block"; //paleta YSL
				list_prod[2].style.display = "block"; //paleta Too Faced
				list_prod[5].style.display = "block"; //highlighter Too Faced
				list_prod[6].style.display = "block"; //highlighter Becca
			}
			
			if(list_check[4].checked == true) //daca negru e bifat
				list_prod[3].style.display = "block"; //mascara
			ok = 0;
			
			if(document.getElementById("mytext").value != "") //verific inca odata textul pt ca la checkbox afisez si produsele ascunse anterior cu functia Cautare()
			{
				var txt = document.getElementById("mytext").value;
				var list_img = document.querySelectorAll(".imagi");//creez o lista cu toate imaginile produselor
				var list_prod = document.querySelectorAll(".patrat"); //creez o lista cu toate produselor
				for(var i = 0; i < list_img.length; i++)
				{
					var y = list_img[i].alt;
					var y2 = list_img[i].title;
					if(y.search(txt) == -1 && y2.search(txt) == -1)
						list_prod[i].style.display = "none";
				}
			}
		}
		
		//filtrez produsele in functie de pret (Range Input)
		var x = document.getElementById("myrange").value;
		var pret = document.querySelectorAll(".ppret");
		for(var i = 0; i < pret.length; i++)
		{
			var a = parseFloat(pret[i].innerHTML);
			if(x < a) //daca numarul de lei din pretul maxim este mai mic decat pretul produsului curent
				list_prod[i].style.display = "none";
		}
		
		//filtrez produse in functie de tipul lor (Radio Input)
		var list_radio = document.getElementsByName("tip");
		if(list_radio[0].checked == true) //daca fard de pleoape e selectat
		{
			list_prod[3].style.display = "none";
			list_prod[4].style.display = "none";
			list_prod[5].style.display = "none";
			list_prod[6].style.display = "none";
			list_prod[7].style.display = "none";
			list_prod[8].style.display = "none";
		}
		if(list_radio[1].checked == true) //daca mascara e selectat
		{
			list_prod[0].style.display = "none";
			list_prod[1].style.display = "none";
			list_prod[2].style.display = "none";
			list_prod[4].style.display = "none";
			list_prod[5].style.display = "none";
			list_prod[6].style.display = "none";
			list_prod[7].style.display = "none";
			list_prod[8].style.display = "none";
		}
		if(list_radio[2].checked == true) // daca highlighter e selectat
		{
			list_prod[0].style.display = "none";
			list_prod[1].style.display = "none";
			list_prod[2].style.display = "none";
			list_prod[3].style.display = "none";
			list_prod[7].style.display = "none";
			list_prod[8].style.display = "none";
		}
		if(list_radio[3].checked == true) //daca ruj e selectat
		{
			list_prod[0].style.display = "none";
			list_prod[1].style.display = "none";
			list_prod[2].style.display = "none";
			list_prod[3].style.display = "none";
			list_prod[4].style.display = "none";
			list_prod[5].style.display = "none";
			list_prod[6].style.display = "none";
		}
		
		//filtrez produse in functie de brandul lor (SELECT simplu)
		if(document.getElementById("my_sel").selectedIndex == "0") //daca Becca e selectat
		{
			for(i = 0; i < list_img.length; i++)
			{
				if(list_img[i].alt.search("becca") == -1)
					list_prod[i].style.display = "none";
			}
		}
		if(document.getElementById("my_sel").selectedIndex == "1") //daca Fenty Beauty e selectat
		{
			for(i = 0; i < list_img.length; i++)
			{
				if(list_img[i].alt.search("fenty beauty") == -1)
					list_prod[i].style.display = "none";
			}
		}
		if(document.getElementById("my_sel").selectedIndex == "2") //daca Too Faced e selectat
		{
			for(i = 0; i < list_img.length; i++)
			{
				if(list_img[i].alt.search("too faced") == -1)
					list_prod[i].style.display = "none";
			}
		}
		if(document.getElementById("my_sel").selectedIndex == "3") //daca YSL e selectat
		{
			for(i = 0; i < list_img.length; i++)
			{
				if(list_img[i].alt.search("ysl") == -1)
					list_prod[i].style.display = "none";
			}
		}
		
		//daca niciun produs nu mai e afisat, afisez un alert
		var okish = 0;//niciun produs nu e afisat
		for(var i = 0; i < list_prod.length; i++)
		{
			if(list_prod[i].style.display != "none")
			{
				okish = 1;
			}
		}
		if(okish == 0)
			var timeo = setTimeout(function(){ alert("Prea multe filtre selectate"); }, 1000);
		else
			clearTimeout(timeo);
		okish = 0;
		
	}
	else //sterg toate filtrele selectate anterior
	{
		document.getElementsByTagName("button")[0].innerHTML = "Filtreaza";
		//afisez toate produsele care erau ascunse 
		var list_prod = document.querySelectorAll(".patrat"); //creez o lista cu toate produselor
		for(i = 0; i < list_prod.length; i++)
			list_prod[i].style.display = "block";
		
		document.getElementById("myrange").value = "240";
		document.getElementById("demo5").innerHTML = "240 lei";
		var list_checkbox = document.getElementsByClassName("my_check");
		var list_check = document.getElementsByClassName("my_label");
		for(var i = 0; i < list_check.length; i++)
		{
			list_checkbox[i].checked = false;
			list_check[i].style.fontWeight = "normal";
		}
		
		var rad = document.getElementsByClassName("my_rad");
		for(i = 0; i < rad.length; i++)
		{
			if(rad[i].checked == true)
				rad[i].checked = false;
		}
		
		document.getElementById("my_sel").selectedIndex = "-1";
	}
}



