/*
	Linear by TEMPLATED
    templated.co @templatedco
    Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

skel.init({
	prefix: 'css/style',
	resetCSS: true,
	boxModel: 'border',
	grid: {
		gutters: 50
	},
	breakpoints: {
		'mobile': {
			range: '-480',
			lockViewport: true,
			containers: 'fluid',
			grid: {
				collapse: true,
				gutters: 10
			}
		},
		'desktop': {
			range: '481-',
			containers: 1200
		},
		'1000px': {
			range: '481-1200',
			containers: 960
		}
	}
}, {
	panels: {
		panels: {
			navPanel: {
				breakpoints: 'mobile',
				position: 'left',
				style: 'reveal',
				size: '80%',
				html: '<div data-action="navList" data-args="nav"></div>'
			}
		},
		overlays: {
			titleBar: {
				breakpoints: 'mobile',
				position: 'top-left',
				height: 44,
				width: '100%',
				html: '<span class="toggle" data-action="togglePanel" data-args="navPanel"></span>' +
 '<span class="title" data-action="copyHTML" data-args="logo"></span>'
			}
		}
	}


});

//Para la galería de fotos
// Get the modal



function mostrarImg(imgs) {
	document.getElementById("myModal").style.display = "block";
  var expandImg = document.getElementById("expandedImg");  // declara variable
  expandImg.src = imgs.src;  // asigna la foto a la variable
}

function mostrarImgServ(x) {
	if (x=='stream') {
			document.getElementById("myStream").style.display = "block";
	}
	if (x=='beat') {
			document.getElementById("myBeat").style.display = "block";
	}
	if (x=='cover') {
			document.getElementById("myCover").style.display = "block";
	}
	if (x=='single') {
			document.getElementById("mySingle").style.display = "block";
	}
	if (x=='album') {
			document.getElementById("myAlbum").style.display = "block";
	}
	if (x=='diseno') {
			document.getElementById("myDiseno").style.display = "block";
	}
	if (x=='radio') {
			document.getElementById("myRadio").style.display = "block";
	}
	if (x=='demo') {
			document.getElementById("myDemo").style.display = "block";
	}
	if (x=='adr') {
			document.getElementById("myAdr").style.display = "block";
	}
	if (x=='mix') {
			document.getElementById("myMix").style.display = "block";
	}
	if (x=='master') {
			document.getElementById("myMaster").style.display = "block";
	}
	if (x=='rest') {
			document.getElementById("myRest").style.display = "block";
	}

}



//cerrar ventana modal con x y click en pantalla
function closeModal(x) {
	if (x=='stream') {
			document.getElementById("myStream").style.display = "none";
	}
	if (x=='beat') {
			document.getElementById("myBeat").style.display = "none";
	}
	if (x=='cover') {
			document.getElementById("myCover").style.display = "none";
	}
	if (x=='single') {
			document.getElementById("mySingle").style.display = "none";
	}
	if (x=='album') {
			document.getElementById("myAlbum").style.display = "none";
	}
	if (x=='diseno') {
			document.getElementById("myDiseno").style.display = "none";
	}
	if (x=='radio') {
			document.getElementById("myRadio").style.display = "none";
	}
	if (x=='demo') {
			document.getElementById("myDemo").style.display = "none";
	}
	if (x=='adr') {
			document.getElementById("myAdr").style.display = "none";
	}
	if (x=='mix') {
			document.getElementById("myMix").style.display = "none";
	}
	if (x=='master') {
			document.getElementById("myMaster").style.display = "none";
	}
	if (x=='rest') {
			document.getElementById("myRest").style.display = "none";
	}
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == document.getElementById("myModal")) {
  document.getElementById("myModal").style.display = "none";
  }
	if (event.target == document.getElementById("myStream")) {
	document.getElementById("myStream").style.display = "none";
	}
	if (event.target == document.getElementById("myBeat")) {
	document.getElementById("myBeat").style.display = "none";
	}
	if (event.target == document.getElementById("myCover")) {
	document.getElementById("myCover").style.display = "none";
	}
	if (event.target == document.getElementById("mySingle")) {
	document.getElementById("mySingle").style.display = "none";
	}
	if (event.target == document.getElementById("myAlbum")) {
	document.getElementById("myAlbum").style.display = "none";
	}
	if (event.target == document.getElementById("myDiseno")) {
	document.getElementById("myDiseno").style.display = "none";
	}
	if (event.target == document.getElementById("myRadio")) {
	document.getElementById("myRadio").style.display = "none";
	}
	if (event.target == document.getElementById("myDemo")) {
	document.getElementById("myDemo").style.display = "none";
	}
	if (event.target == document.getElementById("myAdr")) {
	document.getElementById("myAdr").style.display = "none";
	}
	if (event.target == document.getElementById("myMix")) {
	document.getElementById("myMix").style.display = "none";
	}
	if (event.target == document.getElementById("myMaster")) {
	document.getElementById("myMaster").style.display = "none";
	}
	if (event.target == document.getElementById("myRest")) {
	document.getElementById("myRest").style.display = "none";
	}
}

//fin de Gallería

//selector de Servicios
function seleccionar(y) {
		if (y=='NavStream') {
		document.getElementById("ImgStream").style.background="#4CAF50";
		}
		if (y=='NavBeat') {
		document.getElementById("ImgBeat").style.background="#4CAF50";
		}
		if (y=='NavCover') {
				document.getElementById("ImgCover").style.background="#4CAF50";
		}
		if (y=='NavSingle') {
				document.getElementById("ImgSingle").style.background="#4CAF50";
		}
		if (y=='NavAlbum') {
				document.getElementById("ImgAlbum").style.background="#4CAF50";
		}
		if (y=='NAvDiseno') {
				document.getElementById("ImgDiseno").style.background="#4CAF50";
		}
		if (y=='NavRadio') {
				document.getElementById("ImgRadio").style.background="#4CAF50";
		}
		if (y=='NAvDemo') {
				document.getElementById("ImgDemo").style.background="#4CAF50";
		}
		if (y=='NavAdr') {
				document.getElementById("ImgAdr").style.background="#4CAF50";
		}
		if (y=='NavMix') {
				document.getElementById("ImgMix").style.background="#4CAF50";
		}
		if (y=='NavMaster') {
				document.getElementById("ImgMaster").style.background="#4CAF50";
		}
		if (y=='NavRest') {
				document.getElementById("ImgRest").style.background="#4CAF50";
		}
}

function desseleccionar(z) {
		document.getElementById("ImgStream").style.background="none";
		document.getElementById("ImgBeat").style.background="none";
		document.getElementById("ImgCover").style.background="none";
		document.getElementById("ImgSingle").style.background="none";
		document.getElementById("ImgAlbum").style.background="none";
		document.getElementById("ImgDiseno").style.background="none";
		document.getElementById("ImgRadio").style.background="none";
		document.getElementById("ImgDemo").style.background="none";
		document.getElementById("ImgAdr").style.background="none";
		document.getElementById("ImgMix").style.background="none";
		document.getElementById("ImgMaster").style.background="none";
		document.getElementById("ImgRest").style.background="none";
}
