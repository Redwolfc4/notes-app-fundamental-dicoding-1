class DeleteNoteButton extends HTMLElement {
  _temp_html = "";

  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  make_html() {
    this._temp_html = `
            <i id="button-delete" class="fa-solid fa-minus"></i>
        `;
  }

  render() {
    this.make_html();
    this.innerHTML = this._temp_html;
  }
}

customElements.define("delete-note-button", DeleteNoteButton);
