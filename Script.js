// ================================
// CABEÇALHO AO ROLAR A PÁGINA
// ================================

const cabecalho = document.querySelector(".cabecalho");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    cabecalho.classList.add("scrolled");
  } else {
    cabecalho.classList.remove("scrolled");
  }
});


// ================================
// ANIMAÇÕES AO ENTRAR NA TELA
// ================================

const elementos = document.querySelectorAll(
  ".historia, .cardapio, .frase, .galeria, .reserva, .prato"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visivel");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

elementos.forEach((elemento) => {
  observer.observe(elemento);
});


// ================================
// FORMULÁRIO DE RESERVA
// ================================

const formulario = document.querySelector(".formulario");

if (formulario) {
  formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.querySelector("#nome").value.trim();

    if (!nome) {
      alert("Por favor, informe seu nome.");
      return;
    }

    alert(
      `Grazie, ${nome}! Sua solicitação de reserva foi recebida.`
    );

    formulario.reset();
  });
}


// ================================
// ROLAGEM SUAVE DOS LINKS
// ================================

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const destino = document.querySelector(link.getAttribute("href"));

    if (destino) {
      event.preventDefault();

      destino.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});
