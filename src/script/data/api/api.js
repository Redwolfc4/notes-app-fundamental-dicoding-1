const BASE_URI = "https://notes-api.dicoding.dev/v2";

class NotesAPI {
  // mendapatkan data notes non arcived
  static async getDataNonArchive() {
    const response = await fetch(`${BASE_URI}/notes`);
    if (!(response.status >= 200 && response.status < 300)) {
      throw new Error(`Gagal melakukan request`);
    }
    const responseJson = await response.json();
    const { data } = responseJson;
    if (data.length <= 0) {
      throw new Error(`Data tidak ditemukan`);
    }
    return data;
  }
  static async getAddData(query) {
    console.log(query);
    const OPTIONS = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: query["title"],
        body: query["body"],
      }),
    };
    const response = await fetch(`${BASE_URI}/notes`, OPTIONS);
    if (!(response.status >= 200 && response.status < 300)) {
      throw new Error(`Gagal melakukan penambahan`);
    }
    const responseJson = await response.json();
    alert(responseJson.message);
  }

  static async getDeleteData(note_id) {
    const OPTIONS = {
      method: "DELETE",
    };
    console.log(note_id);
    const response = await fetch(`${BASE_URI}/notes/${note_id}`, OPTIONS);
    console.log(response);
    if (!(response.status >= 200 && response.status < 300)) {
      throw new Error(`Gagal melakukan penghapusan`);
    }
    const responseJson = await response.json();
    return responseJson;
  }
}

export default NotesAPI;
