class titulosElprofebarrientos extends HTMLElement {
	constructor() {
		super();
	}

	// este metodo activa el uso del componente 
	connectedCallback() {
		let shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = `
  <style>
    div {      
  background-color: white;
  display: flex;
  text-direction: center;
  border-radius: 8px;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 1500px; 
  font-size: 1.0em;
  color: #000;
  margin: 0 0 20px;
    }
  </style>
   <div>Derechos reservados El profe barrientos</div>
  `

	}
}

// Define the new element
customElements.define("titulos-elprofebarrientos", titulosElprofebarrientos);

class buscarElprofebarrientos extends HTMLElement {
	constructor() {
		// Always call super first in constructor
		super();
	}
	connectedCallback() {
		// Create a shadow root
		const shadow = this.attachShadow({ mode: "open" });
		// Create caja de texto
		const buscarcaja = document.createElement("input");
		buscarcaja.type = 'text';
		buscarcaja.name = 'buscar';
		buscarcaja.id = 'buscar';

		buscarcaja.placeholder = 'Buscar con ChatGPT';
		buscarcaja.setAttribute("class", "buscarcaja buscarcaja:focus");
		const style = document.createElement("style");
		style.textContent = `
		.buscarcaja {       
		 
		width: 1400px;           /* Ancho de la caja de texto */
	padding-left: 8px;         /* Espaciado interno */
	border: 2px solid black; /* Color y grosor del borde */
	border-radius: 20px;   /* Esquinas redondeadas */
	outline: none;         /* Quitar el contorno al hacer clic */
	transition: border-color 0.3s; /* Transición suave para el color del borde */
  
		}
		  .buscarcaja:focus {
	border-color: gray;  /* Color del borde al enfocar */
  }
	   
	  `;
		// Attach the created elements to the shadow dom
		shadow.appendChild(style);
		shadow.appendChild(buscarcaja);

	}
}

customElements.define("buscar-elprofebarrientos", buscarElprofebarrientos);

class FechaHoy extends HTMLElement {
	constructor() {
		super();
		let shadowRoot = this.attachShadow({ mode: 'open' });

		shadowRoot.innerHTML = `
      <style>
        div {
          font-size: 15px;
          color: black;
        }
      </style>
    <div>${this.fecha()}</div>`;

	}

	fecha() {
		var today = new Date();
		var dia = String(today.getDate());
		var mes = String(today.getMonth() + 1); //January is 0!
		var ano = today.getFullYear();

		return `${dia}/${mes}/${ano}`;
	}
}
customElements.define("fecha-hoy", FechaHoy);

class HoraHoy extends HTMLElement {
	constructor() {
		super();
		let shadowRoot = this.attachShadow({ mode: 'open' });

		shadowRoot.innerHTML = `
      <style>
        div {
          font-size: 15px;
          color: black;
        }
      </style>
    <div>${this.HoraHoy()}</div>`;

	}

	HoraHoy() {
		let hoy = new Date();
		let hora = hoy.getHours();
		let minutes = hoy.getMinutes();
		let seconds = hoy.getSeconds();


		return `${hora}:${minutes}:${seconds}`;
	}
}
customElements.define("hora-hoy", HoraHoy);

class irAChatGpt extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {

	}


}
customElements.define("ir-achatgpt", irAChatGpt);

