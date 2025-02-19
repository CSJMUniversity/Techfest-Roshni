
function updateCountdown() {
    const countDownDate = new Date("January 1, 2169 00:00:00").getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;
  
    if (distance > 0) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
      document.getElementById("timer").innerHTML = "Mahakumbh is Here!";
    }
  }
  
  setInterval(updateCountdown, 1000); 
  