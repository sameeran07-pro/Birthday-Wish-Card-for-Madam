const wishes = [
  "May this new year of your life bring you endless joy and success! 🌟",
  "Harshita, may every little moment today make you smile! 💕",
  "Keep being kind, brave, beautiful, and wonderfully yourself. 🌸",
  "Wishing you magical memories, sweet surprises, and a year full of dreams! ✨",
  "You deserve all the happiness in the world. Have an amazing birthday! 🎉"
];

const wishButton = document.getElementById("wishButton");
const surpriseWish = document.getElementById("surpriseWish");

wishButton.addEventListener("click", () => {
  const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
  surpriseWish.textContent = randomWish;
  createConfetti();
});

function createConfetti() {
  const colors = ["#ff5ea8", "#a866e8", "#ffd166", "#6fd3ff", "#7be495"];

  for (let i = 0; i < 35; i++) {
    const confetti = document.createElement("span");

    confetti.style.position = "fixed";
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.top = "-20px";
    confetti.style.width = "10px";
    confetti.style.height = "10px";
    confetti.style.borderRadius = "3px";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.zIndex = "1000";
    confetti.style.pointerEvents = "none";

    document.body.appendChild(confetti);

    const fallDuration = 1500 + Math.random() * 1500;

    confetti.animate(
      [
        { transform: "translateY(0) rotate(0deg)", opacity: 1 },
        {
          transform: `translateY(110vh) rotate(${Math.random() * 720}deg)`,
          opacity: 0
        }
      ],
      {
        duration: fallDuration,
        easing: "ease-in"
      }
    );

    setTimeout(() => confetti.remove(), fallDuration);
  }
}