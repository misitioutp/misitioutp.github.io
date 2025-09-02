// Inicializa AOS (Animate On Scroll), una biblioteca para animaciones al hacer scroll
AOS.init();

//Animación de carga inicial
document.addEventListener('DOMContentLoaded', function() {
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 1s ease';
    document.body.style.opacity = '1';
  }, 100);
});
// Menú Responsivo
// Obtiene el elemento del checkbox que se utiliza para abrir y cerrar el menú
const checkbox = document.getElementById("checkbox");

// Obtiene el elemento que contiene los enlaces del menú
const navLinks = document.getElementById("nav-links");

// Agrega un evento que se activa cuando cambia el estado del checkbox
checkbox.addEventListener("change", () => {
    // Alterna (muestra u oculta) la clase "show" en el elemento de enlaces del menú
    // Si la clase "show" está presente, se quita; si no está, se añade
    navLinks.classList.toggle("show");
});

// Cierra el menú al hacer clic en un enlace
// Selecciona todos los elementos de enlace (<a>) dentro del menú
const menuItems = navLinks.querySelectorAll("a");

// Itera sobre cada enlace encontrado en el menú
menuItems.forEach(item => {
    // Agrega un evento que se activa cuando se hace clic en un enlace
    item.addEventListener("click", () => {
        // Elimina la clase "show" del elemento de enlaces del menú
        // Esto cierra el menú al hacer clic en un enlace
        navLinks.classList.remove("show");
        // También desmarca el checkbox cuando se hace clic en un enlace
        checkbox.checked = false;
    });
});
//Efecto de iluminación para el logo
const logo = document.querySelector('.logo-img');
logo.addEventListener('mouseenter', () => {
    logo.style.filter = 'drop-shadow(0 0 10px #5d83b6)';
});
logo.addEventListener('mouseleave', () => {
    logo.style.filter = 'none';
});

// --- SCROLL SUAVE CON OFFSET ---
const OFFSET = 120;

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);

        if (target) {
            e.preventDefault();
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - OFFSET;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        }
    });
});
document.querySelectorAll('.card.product').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    });
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  // Animación de entrada con AOS ya aplicada en HTML (data-aos)

  // Validación visual con animaciones
  form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Limpia clases de error previas
    [nameInput, emailInput, messageInput].forEach(input => {
      input.classList.remove("input-error");
    });

    let valid = true;

    if (!name) {
      nameInput.classList.add("input-error");
      valid = false;
    }
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      emailInput.classList.add("input-error");
      valid = false;
    }
    if (!message) {
      messageInput.classList.add("input-error");
      valid = false;
    }

    if (!valid) {
      alert("Por favor, completa correctamente todos los campos.");
      return;
    }

    // Animación de botón de envío
    const submitButton = form.querySelector("button[type='submit']");
    submitButton.disabled = true;
    submitButton.textContent = "Enviando...";

    // Simula envío con delay
    setTimeout(() => {
      alert(`Gracias, ${name}. Tu mensaje fue enviado con éxito.`);
      form.reset();
      submitButton.disabled = false;
      submitButton.textContent = "Enviar";
    }, 1500);
  });

  // Efectos de foco y blur para inputs
  const inputs = [document.getElementById("name"), document.getElementById("email"), document.getElementById("message")];
  inputs.forEach(input => {
    input.addEventListener("focus", () => {
      input.classList.add("input-focus");
    });
    input.addEventListener("blur", () => {
      input.classList.remove("input-focus");
    });
  });
});
