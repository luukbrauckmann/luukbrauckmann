class RiveCanvas extends HTMLElement {
  constructor() {
    super();

    const canvas = this.querySelector("canvas");
  }
}

customElements.define("rive-canvas", RiveCanvas);
