
//welcome word
 const phrases = ["Joel Vutsumbwa","Web Developer"];
 const el = document.querySelector(".description .nom");
 let phraseIndex = 0;
 let letterIndex = 0;
 let isDeleting = false;
 let currentPhrase = "";
 let delay = 100;
 function type(){
    currentPhrase = phrases[phraseIndex];
if(!isDeleting){
    el.textContent = currentPhrase.substring(0,letterIndex++)
  if(letterIndex > currentPhrase.length){
    isDeleting = true;
    setTimeout(type,1500);
    return;
}}else{
    el.textContent = currentPhrase.substring(0,letterIndex--);
    if(letterIndex < 0){
      isDeleting = false;
      phraseIndex = (phraseIndex + 1)%phrases.length;
    }
}
setTimeout(type,delay);
} type();

//Le bouton contact dynamique
window.addEventListener("scroll",()=>{
  // alert("Voulez-vous nous contacter");
  console.log("je suis un contact");
  

});


// le bouton responsive
const navigation = document.getElementById("navigation");
const btnResponsive = document.querySelector(".btnResponsive");
    btnResponsive.addEventListener("click", () => {
    const navR = navigation.classList.toggle("navR");   
    });

//skill's circle
window.onload = function () {
  try {
     TagCanvas.Start('cercleExterne', '', {
     textColour: 'rgba(16, 253, 8, 1)',
      outlineColour: '#f00',
      reverse: true,
    depth: 0.8,
      maxSpeed: 0.05
    });
  } catch(e) {
    console.log("Canvas error", e);
  }
};

//data sharing 
document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const telephone = document.getElementById("telephone").value;
  const message = document.getElementById("message").value;

  const texte = `%0ANew contact from your portfolio%0A
        Nom : ${name}%0A
        Email : ${email}%0A
        Téléphone : ${telephone}%0A
        Message : ${message}`;
  const numeroWhatsApp = "243999599185";

    // Lien vers WhatsApp
  const whatsappURL = `https://wa.me/${numeroWhatsApp}?text=${texte}`;
  alert("Votre message est prêt à être envoyé sur WhatsApp !");
  window.open(whatsappURL, "_blank");
  document.getElementById("form").reset();
});
//ici l'affichage progressif des textes
// const reveals =  document.querySelectorAll(".reveal");
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if(entry.isIntersecting){
//       entry.target.classList.add('active');}
//   });
// },{
//   threshold: 0.2
// });
// reveals.forEach(reveal => {
//   observer.observe(reveal);
// });





























