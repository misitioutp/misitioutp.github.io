document.addEventListener('DOMContentLoaded', function() {
    // Datos de los 3 entrenadores
    const trainersData = [
        {
            id: 1,
            name: "Carlos Méndez",
            specialty: "Bodybuilding",
            bio: "Campeón nacional de fisicoculturismo con más de 10 años de experiencia transformando cuerpos. Especializado en programas de hipertrofia muscular y preparación para competencias.",
            image: "Images/trainers/trainer1.jpg",
            experience: "10+ años",
            clients: "450+ clientes",
            rating: 4.9,
            expertise: [
                "Hipertrofia muscular",
                "Preparación para competencias",
                "Técnica avanzada de levantamiento",
                "Suplementación deportiva"
            ],
            philosophy: "Creo en la disciplina y consistencia. Cada cuerpo es único y requiere un enfoque personalizado para alcanzar su máximo potencial. Mis programas se adaptan a tus objetivos específicos.",
            available: true
        },
        {
            id: 2,
            name: "Ana Rodríguez",
            specialty: "Funcional",
            bio: "Especialista en entrenamiento funcional con certificación internacional. Ayuda a mejorar movilidad, fuerza y condición física integral para la vida diaria y deportes.",
            image: "Images/trainers/trainer2.jpg",
            experience: "7+ años",
            clients: "300+ clientes",
            rating: 4.8,
            expertise: [
                "Entrenamiento funcional",
                "Movilidad articular",
                "Prevención de lesiones",
                "Entrenamiento en suspensión"
            ],
            philosophy: "El movimiento es vida. Más que estética, busco mejorar tu calidad de vida y capacidad funcional. Entrenamientos inteligentes que te preparan para los desafíos diarios.",
            available: true
        },
        {
            id: 3,
            name: "Luis Torres",
            specialty: "Pérdida de peso",
            bio: "Experto en transformaciones corporales y pérdida de peso con métodos científicos. Creador del programa 'Transformación en 12 semanas' con cientos de casos de éxito.",
            image: "Images/trainers/trainer3.jpg",
            experience: "8+ años",
            clients: "600+ clientes",
            rating: 4.9,
            expertise: [
                "Pérdida de peso",
                "Entrenamiento metabólico",
                "Nutrición deportiva",
                "Cambio de hábitos"
            ],
            philosophy: "Más que un físico, construyo confianza. Mis programas van más allá del gimnasio para crear cambios permanentes en tu cuerpo y mente. Resultados medibles y sostenibles.",
            available: true
        }
    ];

    // Elementos del DOM
    const trainersContainer = document.getElementById('trainers-container');
    const trainerModal = document.getElementById('trainer-modal');
    const closeModal = document.querySelector('.close-modal');
    const closeModalBtn = document.querySelector('.btn-close-modal');

    // Renderizar entrenadores
    function renderTrainers() {
        trainersContainer.innerHTML = '';
        
        trainersData.forEach(trainer => {
            const trainerCard = document.createElement('div');
            trainerCard.className = 'trainer-card';
            trainerCard.dataset.id = trainer.id;
            
            trainerCard.innerHTML = `
                <div class="trainer-img-container">
                    <img src="${trainer.image}" alt="${trainer.name}" class="trainer-img" loading="lazy">
                </div>
                <div class="trainer-info">
                    <h3 class="trainer-name">${trainer.name}</h3>
                    <span class="trainer-specialty">${trainer.specialty}</span>
                    <p class="trainer-bio">${trainer.bio}</p>
                    <div class="trainer-footer">
                        <div class="trainer-rating">
                            ${renderStars(trainer.rating)}
                            <span>${trainer.rating}</span>
                        </div>
                        <button class="view-profile">Ver Perfil</button>
                    </div>
                </div>
            `;
            
            trainersContainer.appendChild(trainerCard);
            
            // Agregar evento para abrir modal
            const viewBtn = trainerCard.querySelector('.view-profile');
            viewBtn.addEventListener('click', () => openTrainerModal(trainer.id));
        });
    }

    // Renderizar estrellas de rating
    function renderStars(rating) {
        let stars = '';
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        
        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="fas fa-star"></i>';
        }
        
        if (hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        }
        
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < emptyStars; i++) {
            stars += '<i class="far fa-star"></i>';
        }
        
        return stars;
    }

    // Abrir modal del entrenador
    function openTrainerModal(id) {
        const trainer = trainersData.find(t => t.id === id);
        if (!trainer) return;
        
        // Llenar datos del modal
        document.getElementById('modal-trainer-img').src = trainer.image;
        document.getElementById('modal-trainer-img').alt = trainer.name;
        document.getElementById('modal-name').textContent = trainer.name;
        document.getElementById('modal-specialty').textContent = trainer.specialty;
        document.getElementById('modal-bio').textContent = trainer.bio;
        document.getElementById('modal-experience').textContent = trainer.experience;
        document.getElementById('modal-clients').textContent = trainer.clients;
        document.getElementById('modal-rating').textContent = `${trainer.rating}/5`;
        document.getElementById('modal-philosophy').textContent = trainer.philosophy;
        
        // Llenar áreas de experiencia
        const expertiseContainer = document.getElementById('modal-expertise');
        expertiseContainer.innerHTML = '';
        trainer.expertise.forEach(area => {
            const tag = document.createElement('span');
            tag.className = 'expertise-tag';
            tag.textContent = area;
            expertiseContainer.appendChild(tag);
        });
        
        // Mostrar modal
        trainerModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Cerrar modal
    function closeTrainerModal() {
        trainerModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // Eventos para cerrar modal
    closeModal.addEventListener('click', closeTrainerModal);
    closeModalBtn.addEventListener('click', closeTrainerModal);
    
    // Cerrar modal al hacer clic fuera del contenido
    trainerModal.addEventListener('click', function(e) {
        if (e.target === this) {
            closeTrainerModal();
        }
    });

    // Cerrar modal con Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && trainerModal.classList.contains('active')) {
            closeTrainerModal();
        }
    });

    // Inicializar
    renderTrainers();
});