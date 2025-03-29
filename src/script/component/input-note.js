class InputNote extends HTMLElement {
  _target_input = "";
  _html = "";
  _display = "d-none";
  _header_inputan = "Buat Catatan 📝";

  constructor() {
    super();
  }

  updateVariable() {
    this._display = this._display === "d-none" ? "" : "d-none";
    switch (this._target_input) {
      case "add":
        this._header_inputan = "Buat Catatan 📝";
        break;

      case "detail":
        this._header_inputan = "Detail Catatan 🗒️";
        break;

      default:
        break;
    }
  }

  get getvaluetitle() {
    return this.querySelector("input#title").value.trim();
  }
  get getvaluetextarea() {
    return this.querySelector("textarea#note").value.trim();
  }

  updateHtml() {
    this._html = `
        <section id="inputan-${this._target_input}" class="${this._display}">
            <h1 class="lh-4 poppins-bold ms-1" style="margin-top: 1rem">${this._header_inputan}</h1>
            <section id="form"> 
                <form>
                    <div class="form-floating mb-3">
                        <input type="text"
                            class="form-control border-0 border-bottom border-light poppins-medium rounded-0" id="title"
                            placeholder="Input your title" maxlength="200">
                        <label for="title" class="poppins-medium">Judul</label>
                    </div>
                    <div class="form-floating mb-3" style='height:300px'>
                        <textarea class="form-control border-0 rounded-0 shadow-none poppins-regular "
                            placeholder="Leave a note here" id="note" style='height:100%'></textarea>
                        <label for="note" class="poppins-regular">Your notes</label>
                    </div>
                </form>
            </section>
        </section>
        `;
  }

  static get observedAttributes() {
    return ["target-input"];
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.updateHtml();
    this.innerHTML = this._html;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "target-input":
        this._target_input = newValue;
        this.updateVariable();
        break;

      default:
        this._target_input = oldValue;
        this.updateVariable();
        break;
    }

    this.render();
  }
}

customElements.define("input-note", InputNote);
