class AppBar extends HTMLElement {
  _html = "";
  _display = "";

  static get observedAttributes() {
    return ["display"];
  }
  constructor() {
    super();
  }

  updateHtml() {
    this._html = `
    <header class="w-100 ${this._display}" style="margin-top: 7rem">
        <section class="d-flex justify-content-center flex-column">
            <h1 class="lh-4 poppins-bold text-center" style='font-size:4rem'>Notes App</h1>
            <p class="lh-5 poppins-regular-italic fs-6 text-center">Goodbye for Forget <i>👋👋</i></p>
        </section>
    </header>
    `;
  }
  connectedCallback() {
    this.render();
  }

  render() {
    this.updateHtml();
    this.innerHTML = this._html;
  }

  attributeChangedCallback(name_attribute, oldValue, newValue) {
    switch (name_attribute) {
      case "display":
        this._display = newValue;
        break;

      default:
        break;
    }

    this.render();
  }
}

customElements.define("app-bar", AppBar);
