// Pour une barre de progression unique
function startProgressBar() {
    let progressBar = document.querySelector('.progress');
    progressBar.style.animationPlayState = 'running';
}

  // Pour plusieurs barres de progression
function startMultipleProgressBars() {
    let progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(function(progressBar, index) {
        var delay = index * 0.5; // Delay pour chaque barre de progression
        progressBar.style.animation = `progress-animation 3s ease-in-out infinite ${delay}s`;
    });
}

// Appeler la fonction correspondante selon votre besoin
startProgressBar(); // Pour une barre de progression unique
// startMultipleProgressBars(); // Pour plusieurs barres de progression