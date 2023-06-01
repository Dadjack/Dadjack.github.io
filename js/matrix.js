//-----TITRE-----//

// const title = document.getElementById("matrix_title");
// const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let index = 0;

// function animateTitle() {
//     title.textContent = letters[index % letters.length];
//     index++;
//     requestAnimationFrame(animateTitle);
// }

// animateTitle();

//-----CANVAS-----//
//On récupère la référence du canvas et son contexte :

const canvas = document.getElementById("matrix_canvas");
const ctx = canvas.getContext("2d");
console.log(canvas)
// canvas.style.background = "#0E0E0E";
// canvas.style.border = "green"
//On définit la taille du canvas en fonction de la fenêtre :

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

//On créer un tableau contenant les caractères de la matrice :

const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const characterSize = 4; // Taille des caractères
const columnSpacing = 8; // Espacement entre les colonnes
const columnOffsetRange = 5; // Variation maximale de la position horizontale des caractères dans une colonne

//On créer une classe MatrixCharacter pour représenter chaque caractère de la matrice. Cette classe contiendra les propriétés de position, de vitesse et de mise à jour du caractère

class MatrixCharacter {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = Math.random() * 2 + 1;
        this.character = characters[Math.floor(Math.random() * characters.length)];
    }

    update() {
        this.y += this.speed;

    if (this.y > canvas.height) {
        this.y = 0;
    }

        this.draw();
    }

    draw() {
        const fontSize = 7;
        ctx.font = `${fontSize}px monospace`;
        ctx.fillStyle = "#00FF00";
        ctx.fillText(this.character, this.x, this.y);
    }
}

//On créer un tableau pour stocker les instances des caractères de la matrice

const matrixCharacters = [];

//On initialise le tableau matrixCharacters avec les caractères de départ et leurs positions aléatoires :

// const columns = Math.floor(canvas.width / 16);

const columns = Math.floor(canvas.width / (characterSize + columnSpacing));

// for (let i = 0; i < columns; i++) {
//   matrixCharacters.push(new MatrixCharacter(i * 16, Math.random() * canvas.height));
// }

for (let i = 0; i < columns; i++) {
    const columnX = i * (characterSize + columnSpacing);
    const columnOffset = Math.random() * columnOffsetRange - columnOffsetRange / 2;

    for (let j = 0; j < canvas.height / characterSize; j++) {
        const characterY = j * characterSize;
        const characterX = columnX + columnOffset;
        matrixCharacters.push(new MatrixCharacter(characterX, characterY));
    }
}

//On définis une fonction animate() qui mettra à jour et redessinera les caractères de la matrice à chaque trame

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    matrixCharacters.forEach((character) => {
        character.update();
    });

    requestAnimationFrame(animate);
}

//On appel la fonction animate() pour commencer l'animation :

animate();