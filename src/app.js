import "./script/component/index.js";

const footerBar = document.querySelector("footer-bar");
const inputNote = document.querySelector("input-note");
const noteList = document.querySelector("note-list");
const appBar = document.querySelector("app-bar");

document.addEventListener("click", function (event) {
  if (event.target && event.target.id === "toggle-close") {
    const title = inputNote.getvaluetitle;
    const textarea = inputNote.getvaluetextarea;

    if (title && textarea) {
      noteList.updateOrAddData(title, textarea);
    } else {
      alert("Judul dan catatan tidak boleh kosong!");
    }

    footerBar.removeAttribute("data-active");
    inputNote.removeAttribute("target-input");
    noteList.removeAttribute("hide");
    appBar.removeAttribute("display");
  } else if (event.target && event.target.id === "toggle-add") {
    footerBar.setAttribute("data-active", "true"); // Menambahkan atribut data-active="true"
    inputNote.setAttribute("target-input", "add");
    noteList.setAttribute("hide", "True");
    appBar.setAttribute("display", "d-none");
  }
});
