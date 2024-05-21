const quotes = [
  
function changeQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote').innerText = quotes[randomNumber];
}
