class FooterBar extends HTMLElement {
  _page = 0;
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ["data-active"];
  }

  render() {
    this.innerHTML =
      this._page !== 1
        ? `
        <section id="add-button" class="position-fixed bottom-0 end-0 translate-middle">
            <button id='toggle-add' class="btn btn-light">➕</button>
        </section>
        <section id="closed-button" class="position-fixed end-0 translate-middle z-3 d-none" style="top: 2rem;">
            <button id='toggle-close' class="border-0 bg-transparent fs-5">❌</button>
        </section>
      `
        : `
        <section id="add-button" class="position-fixed bottom-0 end-0 translate-middle d-none">
            <button id='toggle-add' class="btn btn-light">➕</button>
        </section>
        <section id="closed-button" class="position-fixed end-0 translate-middle z-3" style="top: 2rem;">
            <button id='toggle-close' class="border-0 bg-transparent fs-5">❌</button>
        </section>
      `;
  }

  attributeChangedCallback(name_attribute, oldValue, newValue) {
    switch (name_attribute) {
      case "data-active":
        if (newValue === "true") {
          this._page = 1;
        } else {
          this._page = 0;
        }
        break;

      default:
        break;
    }

    this.render();
  }
}

customElements.define("footer-bar", FooterBar);
