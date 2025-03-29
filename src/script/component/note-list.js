import notes from "./../data/local/notes.js";

class NoteList extends HTMLElement {
  _temp_html = "";
  _hide = "";

  constructor() {
    super();
    this._html = "";
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ["hide"];
  }

  formatDate(isoString) {
    const date = new Date(isoString);
    return date
      .toLocaleString("id-ID", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      })
      .replace(/\//g, "-") // Ubah "/" jadi "-"
      .replace(/,/g, " ") // Ubah "," jadi " "
      .replace(/\./g, ":"); // Ubah "." jadi ":"
  }

  updateStyle() {
    this._html = "";

    notes.forEach((note) => {
      this._html += `
            <section id="${
              note.id
            }" class="border border-2 border-light rounded p-2">
                <h1 class="poppins-bold text-truncate fs-4">${note.title}</h1>
                <p class="poppins-light text-truncate fs-5">${note.body}</p>
                <section id="createdAt" class="text-end">
                    <p class="poppins-extralight text-truncate fs-6">${this.formatDate(
                      note.createdAt
                    )}</p>
                </section>
                <section id="iconArchive" class="text-end">
                    ${
                      note.archived === false
                        ? '<i class="fs-5">📩</i>'
                        : '<i class="fs-5">✉️</i>'
                    }
                </section>
            </section>
        `;
    });
    this._temp_html = `
      <section id="daftar-catatan" class="px-2 pt-5 ${this._hide}">
          ${this._html}
      </section>
    `;
  }

  updateOrAddData(title, note) {
    notes.push({
      id: `notes-${Date.now()}`,
      title: title,
      body: note,
      createdAt: new Date().toISOString(),
      archived: false,
    });

    this.render();
  }

  render() {
    this.updateStyle();
    this.innerHTML = this._temp_html;
  }

  attributeChangedCallback(name_attribute, oldValue, newValue) {
    switch (name_attribute) {
      case "hide":
        if (newValue === "True") {
          this._hide = "d-none";
        } else {
          this._hide = "";
        }
        break;

      default:
        this._hide = "";
        break;
    }

    this.render();
  }
}

customElements.define("note-list", NoteList);
