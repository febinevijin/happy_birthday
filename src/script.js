
let clickCount = 0;

document
  .getElementById("confettiButton")
  .addEventListener("click", function () {
    confetti({
      particleCount: 150,
      spread: 60,
      origin: { y: 0.6 },
    });

    clickCount++;

    if (clickCount === 15) {
      showPopup();
    }
  });

function showPopup() {
  const popup = document.createElement("div");
  popup.id = "popup";
  popup.innerHTML = `
        <div class="popup-content">
            <p>Mathi pottichathu, ini poi pani edukku!!</p>
            <button id="reloadButton">Reload</button>
        </div>
    `;
  document.body.appendChild(popup);

  document
    .getElementById("reloadButton")
    .addEventListener("click", function () {
      location.reload();
    });
}
