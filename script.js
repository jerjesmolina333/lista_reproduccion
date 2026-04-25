const container = document.querySelector(".container");
const songsContainer = container.querySelector(".songs-container");
const addButton = container.querySelector(".input__btn_action_add");
const resetButton = container.querySelector(".input__btn_action_reset");
const noSongsElement = container.querySelector(".no-songs");

function renderHasSongs() {
  resetButton.removeAttribute("disabled");
  resetButton.classList.remove("input__btn_disabled");
  noSongsElement.classList.add("no-songs_hidden");
}

function renderNoSongs() {
  resetButton.setAttribute("disabled", true);
  resetButton.classList.add("input__btn_disabled");
  noSongsElement.classList.remove("no-songs_hidden");
}

function addSong(artistValue, titleValue) {
  const songTemplate = document.querySelector("#song-template").content;
  const songElement = songTemplate.querySelector(".song").cloneNode(true);

  songElement.querySelector(".song__artist").textContent = artistValue;
  songElement.querySelector(".song__title").textContent = titleValue;
  songsContainer.append(songElement);
}
function setSubmitButtonState(isFormValid) {
  if (isFormValid) {
    addButton.removeAttribute("disabled");
    addButton.classList.remove("input__btn_disabled");
  } else {
    addButton.setAttribute("disabled", true);
    addButton.classList.add("input__btn_disabled");
  }
}

resetButton.addEventListener("click", function () {
  const songs = document.querySelectorAll(".song");

  songs.forEach((item) => {
    item.remove();
  });

  renderNoSongs();
});

function keyHandler(evt) {
  if (evt.key === "Enter") {
    addSong(artistInput.value, titleInput.value);
    renderHasSongs();

    artistInput.value = "";
    titleInput.value = "";
  }
}

songsContainer.addEventListener("click", function (evt) {
  if (evt.target.classList.contains("song__like")) {
    evt.target.classList.toggle("song__like_active");
  }
});

const form = document.forms.add;
const artist = form.elements.artist;
const title = form.elements.title;

form.addEventListener("submit", function (evt) {
  evt.preventDefault();

  addSong(artist.value, title.value);
  renderHasSongs();
  form.reset();
  setSubmitButtonState(false);
});
form.addEventListener("input", function (evt) {
  const isValid = artist.value.length > 0 && title.value.length > 0;
  console.log("IsValid: ", isValid);
  setSubmitButtonState(isValid);
});
