function placeBid(button, currentPrice) {
    const newPrice = prompt(`Current price is: ${currentPrice} EUR. Place new price:`);
    if (newPrice && parseFloat(newPrice) > currentPrice) {
      const priceElement = button.closest('.card-body').querySelector('.price');
      priceElement.textContent = `${parseFloat(newPrice)} EUR`;
      alert("Your Bid is accepted!");
    } else {
      alert("Bid must be higher than current!");
    }
  }

function updateCountdown() {
  const timeElements = document.querySelectorAll('.time-remaining');

  timeElements.forEach(el => {
    let remainingTime = parseInt(el.dataset.time, 10);
    if (remainingTime > 0) {
      remainingTime--;
      el.dataset.time = remainingTime;


      const minutes = Math.floor(remainingTime / 60);
      const seconds = remainingTime % 60;
      el.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    } else {
      el.textContent = "Auction is over!";
    }
  });
}


setInterval(updateCountdown, 1000);

function placeBid(button, amount) {
  alert(`Your bid of ${amount} EUR has been placed!`);
}