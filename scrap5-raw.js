<script type = "text/javascript">
var pageName,  appendElements, jsonElements , elementName = null ;

 alert("Press ctrl + alt + a to spy the elements & ctrl + alt + z to stop spying");
window.addEventListener ("keydown", function (xEvent) {
 
    if (xEvent.ctrlKey  &&  xEvent.altKey  &&  xEvent.keyCode == "65") 
	
	{
		alert("Started spying elements");
		var tagName, id, className, type, name, xpath ;
		var str = ""
		var x = document.createElement("DIV"), y = document.createElement("DIV");
		var drop = document.createElement("DIV");

		var textArea = document.createElement("div");

		x.setAttribute("id" , "scrap");
		x.setAttribute("class" , "tooltip");
		x.setAttribute("name" , "tooltip");

		//document.getElementById("scrap").onClick(toolHvr());


		document.body.appendChild(x);
	//	document.body.appendChild(textArea);

		y.setAttribute("class" , "tooltiptext");
		y.setAttribute("name" , "tooltiptext");

		textArea.setAttribute("id" , "textValues");


		drop.setAttribute("id", "dropdown");


		x.style.position ="relative";
			x.style.display="block"; 
			x.style.opacity="1";
			x.style.zindex="9999";	


		y.style.visibility= "hidden";
			y.style.background="#555";
			y.style.color="#fff";
			y.style.padding="10px";
			y.style.position="fixed";
			y.style.opacity="0";
			y.style.transition="opacity 1s";
			y.style.zindex="9999";	
			
			
			drop.style.visibility= "visible";
			drop.style.background="blue";
			drop.style.color="#fff";
			drop.style.padding="10px";
			drop.style.position="relative";
			drop.style.opacity="0";
			drop.style.transition="opacity 1s";
			drop.style.left="100px";
			drop.style.zindex="9999";	




		x.appendChild(y);
		x.appendChild(drop);

		// $(window).mouseover(function(e) {
		 pageName = prompt("Please enter Page name:", "");
			while (pageName == null || pageName == "") {
				pageName = prompt("Please enter Page name:", "");
			} 
			
			
			
		 window.addEventListener("mouseover",hvr);
		//window.attachEvent("mouseover",hvr);
		var i = 0; var temp;
		function hvr(e) {


		y.style.visibility="visible";

		y.style.opacity="1";
		y.style.cursor="pointer";


		var t = e.clientX, v = e.clientY,
		elementMouseIsOver = document.elementFromPoint(t, v);	
		if(temp != t && temp != null) 
			{	
				if(i==1 && spanClassn !="tooltiptext") {
					i=0;
				}
				if(i !=0) {
					i=2;
				}
			}
				
		var spanClassn = spanClass(elementMouseIsOver);
		if(spanClassn !="tooltiptext" && i==0) {

			y.style.left = (t+1) + 'px';
			y.style.top = (v) + 'px';

		}
		var Xpath = {};

		Xpath.getElementXPath = function(element)
		{
			if (element && element.id)
				return '//*[@id="' + element.id + '"]';
			else
				return Xpath.getElementTreeXPath(element);
		};


		Xpath.getElementTreeXPath = function(element)
		{

			var paths = [];

			// Use nodeName (instead of localName) so namespace prefix is included (if any).
			for (; element && element.nodeType == Node.ELEMENT_NODE; element = element.parentNode)
			{
				var index = 0;
				var hasFollowingSiblings = false;
				for (var sibling = element.previousSibling; sibling; sibling = sibling.previousSibling)
				{
					// Ignore document type declaration.
					if (sibling.nodeType == Node.DOCUMENT_TYPE_NODE)
						continue;

					if (sibling.nodeName == element.nodeName)
						++index;
				}

				for (var sibling = element.nextSibling; sibling && !hasFollowingSiblings;
					sibling = sibling.nextSibling)
				{
					if (sibling.nodeName == element.nodeName)
						hasFollowingSiblings = true;
				}

				var tagName = (element.prefix ? element.prefix + ":" : "") + element.localName;
				var pathIndex = (index || hasFollowingSiblings ? "[" + (index + 1) + "]" : "");
				paths.splice(0, 0, tagName + pathIndex);
			}

			return paths.length ? "/" + paths.join("/") : null;
		};


		/*
		y.innerText="Tag name = "  + elementMouseIsOver.tagName + "\n Name = " + elementMouseIsOver.name + "\n id = " + elementMouseIsOver.id+ "\n ClassName = " + elementMouseIsOver.className+ "\n Type= " + elementMouseIsOver.type + "\n xpath = " + Xpath.getElementXPath(elementMouseIsOver);
		*/


		if(spanClassn !="tooltiptext" && i ==0 ) {
		 i=0;
		  tagName = elementMouseIsOver.tagName;
		  id = elementMouseIsOver.id ; 
		  classNames = elementMouseIsOver.className;
		  types = elementMouseIsOver.type;
		  name = elementMouseIsOver.name;
		  xpath = Xpath.getElementXPath(elementMouseIsOver);
		  
		//y.innerText = name;

		//y.innerHTML="<div style='position:relative;' class='tip'>Tag name = "+ tagName  + //"</div>";

		// tagName =  tagn;


		y.innerHTML="<p class= 'tooltiptext' id='tags'>Tag name = " + tagName + "</p><p id ='names' class= 'tooltiptext'>Name = " + name + "</p><p class= 'tooltiptext' id='ids'> id=  " + id+ "</p><p class= 'tooltiptext' id='classes'> ClassName = " + classNames + "</p><p class= 'tooltiptext' id='types'> Type= " + types + "</p> <p class= 'tooltiptext' id='xpaths'>xpath = " + xpath+ "</p>"; 

		temp =t;
	
		}

		 if(spanClassn =="tooltiptext" ) {
		 
		  if(id != null && id !="" && id != "undefined") {
		 var idName = document.getElementById("ids");
		 idName.onclick = function() 
			{
				elementName = prompt("Please enter WebElement name:", "");
					while (elementName == null || elementName == "") 
					{
						elementName = prompt("Please enter WebElement name:", "");
					} 
					appendElements =("ID : " + id + " \n"); textArea.innerText=appendElements;
					if(jsonElements == null || jsonElements =="" ) 
					{
						jsonElements = '\n \t \t "'+elementName +'" : {  \n \t \t \t ' + appendElements + '\t \t \t }, \n ';
					}
					else 
					{
						jsonElements += ' \n \t \t "'+elementName +'" : { \n \t \t \t' + appendElements + '\t \t \t }, \n ';
					}
				//str += ("id : " + id + "\n"); textArea.innerText=str;
			};
		 }
		 
		  if(tagName != null && tagName !="" && tagName != "undefined") {
		  var idName = document.getElementById("tags");
		 idName.onclick = function() 
			{
				 elementName = prompt("Please enter WebElement name:", "");
					while (elementName == null || elementName == "") 
					{
						elementName = prompt("Please enter WebElement name:", "");
					} 
					appendElements =("Tag Name : " + tagName + " \n"); textArea.innerText=appendElements;
					if(jsonElements == null || jsonElements =="" ) 
					{
						jsonElements = '\n \t \t "'+elementName +'" : {  \n \t \t \t ' + appendElements + '\t \t \t }, \n ';
					}
					else 
					{
						jsonElements += ' \n \t \t "'+elementName +'" : { \n \t \t \t' + appendElements + '\t \t \t }, \n ';
					}
				//str += ("Tagname : " + tagName + ", \n"); textArea.innerText=str; 
			};
		//idName.onclick = writeTextFile(tagName);

				/*	if(idName.innerText == "Tag name = IFRAME") 
					{
							var m = document.getElementById("myFrame");
							// var n = (m.contentWindow || m.contentDocument);
							  //  if (n.document)n = n.document;
							 //var te =  n.getElementById("demo");
							 
							 
							 //var fText = m.contentWindow.addEventListener("mouseover",hvr);
							   // alert(fText.innetText);
								

							var ifr = document.getElementsByTagName("iframe")[0];
							
							var ifr_window = ifr.contentWindow;
							 alert(ifr.contentWindow);
							ifr_window.contents.addEventListener("mouseover",fhvr);
							
							function fhvr(e) {

								var t = e.clientX, v = e.clientY,
								elementMouseIsOver = document.elementFromPoint(t, v);
								alert(elementMouseIsOver);
							}

						
					} */
		}




			if(classNames != null && classNames !="" && classNames != "undefined") 
			{
				  var idName = document.getElementById("classes");
				 idName.onclick = function() 
				 {
					 elementName = prompt("Please enter WebElement name:", "");
					while (elementName == null || elementName == "") 
					{
						elementName = prompt("Please enter WebElement name:", "");
					} 
					appendElements =("Class Name : " + classNames + " \n"); textArea.innerText=appendElements;
					if(jsonElements == null || jsonElements =="" ) 
					{
						jsonElements = '\n \t \t "'+elementName +'" : {  \n \t \t \t ' + appendElements + '\t \t \t }, \n ';
					}
					else 
					{
						jsonElements += ' \n \t \t "'+elementName +'" : { \n \t \t \t' + appendElements + '\t \t \t }, \n ';
					}
					//str +=("Class Name : " + classNames + " , \n"); textArea.innerText=str;
				};
			} 
		 
		 if(xpath != null && xpath !="" && xpath != "undefined") {
		  var idName = document.getElementById("xpaths");
		 idName.onclick = function() 
			{
				elementName = prompt("Please enter WebElement name:", "");
				while (elementName == null || elementName == "") 
				{
					elementName = prompt("Please enter WebElement name:", "");
				} 
				appendElements =("Xpath : " + xpath + " \n"); textArea.innerText=appendElements;
				if(jsonElements == null || jsonElements =="" ) 
				{
					jsonElements = '\n \t \t "'+elementName +'" : {  \n \t \t \t ' + appendElements + '\t \t \t }, \n ';
				}
				else 
				{
					jsonElements += ' \n \t \t "'+elementName +'" : { \n \t \t \t' + appendElements + '\t \t \t }, \n ';
				}
				 //console.log('{ \n  "'+elementName +'" : { \n \t \t ' + str + '\t \t } \n }' );
			};
		 }
		 
		 if(name != null && name !="" && name != "undefined") {
		 
		  var idName = document.getElementById("names");
		 //idName.onclick = function() {str += ("Name : " + name + ", \n");textArea.innerText=str;};
		 
		 idName.onclick = function() 
			{
				elementName = prompt("Please enter WebElement name:", "");
				while (elementName == null || elementName == "") 
				{
					elementName = prompt("Please enter WebElement name:", "");
				} 
				appendElements =("Name : " + name + " \n"); textArea.innerText=appendElements;
				if(jsonElements == null || jsonElements =="") 
				{
					jsonElements = '\n \t \t "'+elementName +'" : {  \n \t \t \t ' + appendElements + '\t \t \t }, \n ';
				}
				else 
				{
					jsonElements += ' \n \t \t "'+elementName +'" : { \n \t \t \t' + appendElements + '\t \t \t }, \n ';
				}
		//console.log('{ \n  "'+elementName +'" : { \n \t \t ' + str + '\t \t } \n }' );
			};
		 }
		 
		  if(types != null && types !="" && types != "undefined") {
		 var idName = document.getElementById("types");
		 idName.onclick = function() {str += ("Type : " + types + ", \n"); textArea.innerText=str;};
		// alert(elementMouseIsOver.tagName);
		}
		i = 1;
		//console.log('\n}' );
		//console.log('{ \n "' +pageName + '" \n ' +'{ \n  "'+elementName +'" : { \n \t \t ' + str + '\t \t } \n }\n}' );
		}

		// console.log(jsonElements + '\n}' );
		 /*else {
		//if(elementMouseIsOver.textContent == "Name" ) {


		 /*y.onclick = function(f) {
		  //  alert(tagName);
		  drop.style.visibility="visible";
		drop.style.top="0px";
		drop.style.opacity="1";
		 drop.innerHTML="test = " + elementMouseIsOver.id + "<br />";

		var q = ( f.clientX - x.offsetLeft ), u = ((f.clientY)-y.offsetTop);
				elemen = document.elementFromPoint(q,u);
				drop.innerHTML="Tag name = " + elemen.id + "<br />";
		console.log(q);
		console.log(u);
		console.log(elemen);
		//var rect = y.getBoundingClientRect();

		//console.log(rect.top, rect.right, rect.bottom, rect.left); 

		/*var text = y.getElementsByTagName('br')[0];
		var txtx = text.textContent;
		console.log(y.textContent.split("br")); 
		}; 


		}*/


		function tagNames(element) 
		{
		//y.onclick = function() {myFunction()};

		var asd = element.tagName;
		/*y.addEventListener("click",myFunction);
		function myFunction() {
		alert("hi"); 
		//   document.getElementById("myDropdown").classList.toggle("show");
		} */

			return element.tagName;

		}

		function spanClass(element) 
		{
		//y.onclick = function() {myFunction()};

		var classn = element.className;
		//asd.onclick = alert("asd");
		//console.log(classn);
			return classn;

		}

		};
			}
} );
window.addEventListener("keydown", function (zEvent) {
	

    if (zEvent.ctrlKey  &&  zEvent.altKey  &&  zEvent.keyCode == "90") {
	console.log('{ \n \t"' +pageName + '": {'   );
	console.log(jsonElements + '\t }\n }');
	
        alert("Web elements are stored in json format. Kindly view the console");  
		/*if(navigator.appCodeName == "Mozilla")
		{
		 alert('{ \n \t"' +pageName + '": {' + jsonElements + '\t }\n }' ) ;
		} */
	
     }
} );
</script>