import "./script/component/index.js";

const footerBar = document.querySelector("footer-bar");
const inputNote = document.querySelector("input-note");
const noteList = document.querySelector("note-list");
const appBar = document.querySelector("app-bar");

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

document.addEventListener("DOMContentLoaded", async function () {
  showLoading();
  await delay(3000).then(() => {
    hideLoading();
  });
});

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
  } else if (event.target && event.target.id === "button-delete") {
    // Cari elemen induk terdekat yang id-nya diawali "notes-"
    const parentNoteSection = event.target.closest("section[id^='notes-']");
    let noteId = "";
    if (parentNoteSection) {
      noteId = parentNoteSection.id;
    } else {
      // Jika tidak ditemukan, keluar dari fungsi
      return;
    }
    noteList.deleteData(noteId);
  }
});

function showLoading() {
  document.getElementById("loading-overlay").style.display = "flex";
}

function hideLoading() {
  document.getElementById("loading-overlay").style.display = "none";
}
