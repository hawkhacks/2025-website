const template = document.createElement("template");
template.innerHTML = `
<p>hi</p>
`;

class TimeLine extends HTMLElement {
	static observedAttributes = ["data-num-elems"]
	numElems;
	
	constructor() {
		super();

		const shadow = this.attachShadow({ mode: "open" });
		shadow.appendChild(template.content);
		console.log(this.children);
	}

	connectedCallback() {
		
	}

	attributeChangedCallback() {
		
	}
}

customElements.define("time-line", TimeLine);