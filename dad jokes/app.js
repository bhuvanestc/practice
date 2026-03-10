const jokeText = document.getElementById("jokeText");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener('click',async function()
{
  const URL="https://icanhazdadjoke.com/";
 
  const response= await fetch(URL,  {
    headers:{'Accept':'application/json'}
  });

  const data = await response.json();
  console.log(data.joke);
  jokeText.innerHTML=data.joke;
});