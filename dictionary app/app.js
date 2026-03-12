const wordInput = document.getElementById("wordInput");
const searchBtn = document.getElementById("searchBtn");
const result = document.getElementById("result");

async function searchWord() {
  const word = wordInput.value;
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  const response = await fetch(url);
  const data = await response.json();

  const wordData = data[0];
  result.innerHTML = `
    <h2>${wordData.word}</h2>
    <p>${wordData.phonetic}</p> 

    <div class="meaning">
      <p class="part-of-speech">${wordData.meanings[0].partOfSpeech}</p>
      <p class="definition">${wordData.meanings[0].definitions[0].definition}</p>
    </div>
  `;
}

searchBtn.addEventListener("click", searchWord);

wordInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    searchWord();
  }
});
