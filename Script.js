```javascript
/* ========================================
   CASA NOBRE
   JAVASCRIPT
======================================== */


/* ========================================
   HEADER AO ROLAR
======================================== */

const cabecalho = document.querySelector(".cabecalho");

function atualizarCabecalho() {
  if (!cabecalho) return;

  if (window.scrollY > 60) {
    cabecalho.classList.add("scrolled");
  } else {
    cabecalho.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", atualizarCabecalho);

atualizarCabecalho();


/* ========================================
   LINKS COM ROLAGEM SUAVE
======================================== */

const linksInternos = document.querySelectorAll('a[href^="#"]');

linksInternos.forEach((link) => {

  link.addEventListener("click", (event) => {

    const destinoId = link.getAttribute("href");

    if (!destinoId || destinoId === "#") return;

    const destino = document.querySelector(destinoId);

    if (!destino) return;

    event.preventDefault();

    destino.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });

});


/* ========================================
   ANIMAÇÕES AO ENTRAR NA TELA
======================================== */

const elementosAnimados = document.querySelectorAll(
  ".historia-imagem, .historia-texto, .titulo-secao, .prato, .frase-conteudo, .foto, .reserva-intro, .formulario"
);

elementosAnimados.forEach((elemento) => {
  elemento.classList.add("revelar");
});


const observador = new IntersectionObserver(
  (entradas) => {

    entradas.forEach((entrada) => {

      if (entrada.isIntersecting) {

        entrada.target.classList.add("visivel");

        observador.unobserve(entrada.target);

      }

    });

  },
  {
    threshold: 0.12
  }
);


elementosAnimados.forEach((elemento) => {
  observador.observe(elemento);
});


/* ========================================
   CATEGORIAS DO CARDÁPIO
======================================== */

const categorias = document.querySelectorAll(".categoria");

categorias.forEach((categoria) => {

  categoria.addEventListener("click", () => {

    categorias.forEach((item) => {
      item.classList.remove("ativa");
    });

    categoria.classList.add("ativa");

  });

});


/* ========================================
   FORMULÁRIO DE RESERVA
======================================== */

const formulario = document.querySelector(".formulario");

const toast = document.querySelector("#toast");

if (formulario) {

  formulario.addEventListener("submit", (event) => {

    event.preventDefault();


    const nome = document.querySelector("#nome")?.value.trim();
    const whatsapp = document.querySelector("#whatsapp")?.value.trim();
    const data = document.querySelector("#data")?.value;
    const horario = document.querySelector("#horario")?.value;


    if (!nome || !whatsapp || !data || !horario) {

      alert(
        "Por favor, preencha seu nome, WhatsApp, data e horário."
      );

      return;
    }


    if (toast) {

      toast.classList.add("mostrar");

      setTimeout(() => {
        toast.classList.remove("mostrar");
      }, 4500);

    }


    formulario.reset();

  });

}


/* ========================================
   DATA MÍNIMA DA RESERVA
======================================== */

const campoData = document.querySelector("#data");

if (campoData) {

  const hoje = new Date();

  const ano = hoje.getFullYear();

  const mes = String(hoje.getMonth() + 1).padStart(2, "0");

  const dia = String(hoje.getDate()).padStart(2, "0");

  campoData.min = `${ano}-${mes}-${dia}`;

}


/* ========================================
   MÁSCARA SIMPLES DE WHATSAPP
======================================== */

const campoWhatsapp = document.querySelector("#whatsapp");

if (campoWhatsapp) {

  campoWhatsapp.addEventListener("input", () => {

    let valor = campoWhatsapp.value.replace(/\D/g, "");

    if (valor.length > 11) {
      valor = valor.substring(0, 11);
    }


    if (valor.length <= 2) {

      campoWhatsapp.value = valor;

    } else if (valor.length <= 7) {

      campoWhatsapp.value =
        `(${valor.substring(0, 2)}) ${valor.substring(2)}`;

    } else {

      campoWhatsapp.value =
        `(${valor.substring(0, 2)}) ${valor.substring(2, 7)}-${valor.substring(7)}`;

    }

  });

}


/* ========================================
   ANO AUTOMÁTICO
======================================== */

const anoAtual = new Date().getFullYear();

const elementosAno = document.querySelectorAll(".ano-atual");

elementosAno.forEach((elemento) => {
  elemento.textContent = anoAtual;
});
```
