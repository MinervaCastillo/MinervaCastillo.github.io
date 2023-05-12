let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Estudiante de Ing. en Sistemas Biomédicos y Desarrollo web.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
