const openPopupButton = document.getElementById('openPopup');
const closePopupButton = document.getElementById('closePopup');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

let popupWidth = 300;
let popupHeight = 150;
let loopActive = true;

function showPopup() {
  if (!loopActive) return;
  popup.style.width = popupWidth + 'px';
  popup.style.height = popupHeight + 'px';
  popup.style.display = 'block';
  overlay.style.display = 'block';
}

function closePopup() {
  popup.style.display = 'none';
  overlay.style.display = 'none';

  if (loopActive) {
    setTimeout(() => {
      popupWidth += 50; // Augmente largeur
      popupHeight += 25; // Augmente hauteur
      showPopup();
    }, 100); // Réapparait après 0.1 s
  }
}

function exitLoop() {
  loopActive = false;
  popup.querySelector("p").textContent = "Merci, à bientôt dans l'équipe !";
  yesButton.style.display = "none";
  noButton.style.display = "none";
  closePopupButton.style.display = "none";

  setTimeout(() => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
    openPopupButton.style.display = "none"; // cache le bouton d'ouverture
  }, 1500); // laisse le temps de lire le message
}

openPopupButton.addEventListener('click', showPopup);
closePopupButton.addEventListener('click', closePopup);
noButton.addEventListener('click', closePopup);
yesButton.addEventListener('click', exitLoop);

// Bonus accessibilité : touche Échap
document.addEventListener('keydown', (e) => {
  if (e.key === "Escape" && popup.style.display === "block") {
    closePopup();
  }
});

function fakeError() {
  alert("Erreur : Impossible de télécharger ce fichier.\nVérifiez la compatibilité de votre appareil.");
}