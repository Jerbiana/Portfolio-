document.getElementById("formulaire").addEventListener("submit", function(e) {
  e.preventDefault(); // empêche l’envoi réel du formulaire
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (email && message) {
    document.getElementById("confirmation").textContent = "Message envoyé ! Merci 😊";
    document.getElementById("formulaire").reset();
  } else {
    alert("Veuillez remplir tous les champs.");
  }
});