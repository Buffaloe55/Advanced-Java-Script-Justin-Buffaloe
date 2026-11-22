// Size of a single snowflake
const flakeSize = 8;

window.addEventListener("DOMContentLoaded", function() {
   let canvas = document.querySelector("canvas");

   drawGround(canvas);
   drawSnowText(canvas);
   drawSnowman(canvas);
   drawSnowflakes(canvas);
});

function drawGround(canvas) {
   let context = canvas.getContext("2d");

   // Background
   context.fillStyle = "#bbb";
   context.fillRect(0, 0, canvas.width, canvas.height);

   // Ground
   context.fillStyle = "brown";
   context.fillRect(0, canvas.height - 80, canvas.width, canvas.height);

   // Holiday greeting in the center of the ground's right half
   context.font = "bold 25px 'Brush Script MT', cursive";
   context.textAlign = "center";
   context.textBaseline = "middle";
   context.fillStyle = "#176B35";
   context.fillText("Happy Holidays", canvas.width * 0.75, canvas.height - 40);
}

function drawSnowflakes(canvas) {
   for (let c = 0; c < 100; c++) {
      let x = Math.floor(Math.random() * canvas.width);
      let y = Math.floor(Math.random() * canvas.height);
      drawSingleFlake(canvas, x, y);
   }
}

function drawSnowText(canvas) {
   let context = canvas.getContext("2d");

   context.font = "80px Verdana";
   context.textAlign = "center";
   context.textBaseline = "top";
   context.fillStyle = "blue";
   context.fillText("SNOW", canvas.width / 2, 10);
}

function drawSnowman(canvas) {
   let context = canvas.getContext("2d");
   context.save();

   // Three white snowballs, from bottom to top
   context.fillStyle = "white";

   context.beginPath();
   context.arc(150, 200, 50, 0, Math.PI * 2);
   context.fill();

   context.beginPath();
   context.arc(150, 120, 40, 0, Math.PI * 2);
   context.fill();

   context.beginPath();
   context.arc(150, 60, 25, 0, Math.PI * 2);
   context.fill();

   // Coal eyes
   context.fillStyle = "#222";

   context.beginPath();
   context.arc(142, 55, 3, 0, Math.PI * 2);
   context.fill();

   context.beginPath();
   context.arc(158, 55, 3, 0, Math.PI * 2);
   context.fill();

   // Carrot nose
   context.fillStyle = "orange";
   context.beginPath();
   context.moveTo(149, 60);
   context.lineTo(166, 64);
   context.lineTo(149, 67);
   context.closePath();
   context.fill();

   // Five pieces of coal form the smile
   context.fillStyle = "#222";
   const smile = [[139, 71], [144, 75], [150, 77], [156, 75], [161, 71]];

   for (const [x, y] of smile) {
      context.beginPath();
      context.arc(x, y, 2, 0, Math.PI * 2);
      context.fill();
   }

   // Brown stick arms
   context.strokeStyle = "#704020";
   context.lineWidth = 4;
   context.lineCap = "round";
   context.beginPath();

   // Left arm and twig
   context.moveTo(114, 115);
   context.lineTo(83, 100);
   context.lineTo(72, 88);
   context.moveTo(83, 100);
   context.lineTo(68, 101);

   // Right arm and twig
   context.moveTo(186, 115);
   context.lineTo(217, 96);
   context.lineTo(225, 81);
   context.moveTo(217, 96);
   context.lineTo(233, 95);

   context.stroke();

   // Red scarf around the neck
   context.fillStyle = "#c62828";
   context.fillRect(134, 80, 32, 8);

   // Hanging end of the scarf
   context.beginPath();
   context.moveTo(155, 86);
   context.lineTo(164, 85);
   context.lineTo(172, 106);
   context.lineTo(162, 109);
   context.closePath();
   context.fill();

   context.restore();
}

function drawSingleFlake(canvas, x, y) {
   let context = canvas.getContext("2d");

   context.beginPath();
   context.moveTo(x, y);
   context.lineTo(x + flakeSize / 2, y + flakeSize / 2);
   context.lineTo(x, y + flakeSize);
   context.lineTo(x - flakeSize / 2, y + flakeSize / 2);
   context.closePath();

   context.fillStyle = "#eee";
   context.fill();
}