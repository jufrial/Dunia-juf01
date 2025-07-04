let juf = document.getElementById('juf');
let shira = document.getElementById('shira');
let dialogBox = document.getElementById('dialog-box');
let dialogText = document.getElementById('dialog-text');
let bgm = document.getElementById('bgm');

let jufPosition = {
  x: 20, // persen dari kiri
  y: 10  // tetap di bawah layar
};

function move(direction) {
  if (direction === 'left' && jufPosition.x > 0) {
    jufPosition.x -= 5;
  } else if (direction === 'right' && jufPosition.x < 80) {
    jufPosition.x += 5;
  }
  updatePosition();
}

function updatePosition() {
  juf.style.left = jufPosition.x + '%';
}

// Interaksi dengan Shira
shira.addEventListener('click', () => {
  dialogText.textContent = "Hai... kamu terlihat lelah. Duduk dulu, ya?";
  dialogBox.style.display = 'block';
  shira.src = "img/shira_happy.png";

  // Opsional: suara
  let voice = new Audio("sound/shira_voice1.mp3");
  voice.play();
});

// Putar BGM setelah tap pertama
document.body.addEventListener('click', () => {
  bgm.play().catch(() => {});
}, { once: true });
