const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const newQuoteBtn = document.getElementById("newQuoteBtn");

newQuoteBtn.addEventListener("click", async function () {
  const URL = "https://api.adviceslip.com/advice";
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data.slip.advice);
  quoteText.innerHTML = data.slip.advice;
});
