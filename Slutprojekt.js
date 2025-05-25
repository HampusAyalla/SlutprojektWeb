document.getElementById("scrollToTop").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

function filterPrograms(category) {
    const cards = document.querySelectorAll('.program-card');
    const buttons = document.querySelectorAll('.filter-buttons button');

    cards.forEach(card => {
        const cardCategory = card.getAttribute('category');
        card.style.display = (category === 'all' || cardCategory === category) ? 'block' : 'none';
    });

    buttons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.filter-buttons button[onclick*="${category}"]`).classList.add('active');
}
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("kontaktForm").addEventListener("submit", (e) => {
      const mail = document.getElementById("mail");
      const ang = document.getElementById("angående");
      const med = document.getElementById("meddelande");
  
      let fel = "";
  
      if (!mail.value.includes("@") || !mail.value.includes(".")) {
        fel += "Felaktig e-postadress.";
      }
      if (ang.value.trim() === "") {
        fel += "Fältet 'Angående' får inte vara tomt.";
      }
      if (med.value.trim() === "") {
        fel += "Fältet 'Meddelande' får inte vara tomt.";
      }
  
      if (fel) {
        e.preventDefault();
        alert(fel);
      }
    });
  });
  

