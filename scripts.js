/*
Desafío práctico:
*Crear un HTML con un H1 y un p.
*Tanto el H1 como el p deben tener texto en su interior.
*Crear un CSS con estilos que le den color.

Con lo visto en clase, lograr que, luego de 3 segundos de cargada la pagina, el h1 cambie de color y cambiar el texto dentro del p.
*/


const titlePrimary = document.getElementById("title-primary");
const textPrimary = document.getElementById("text-primary");


const cambiarColorTexto = (title, text) => {
    title.style.backgroundColor = "#fff";
    title.style.color = "#d30000";
    text.innerText = "Error, son 7 Libertadores y 2 Intercontinentales";
}

setTimeout(() => {cambiarColorTexto(titlePrimary, textPrimary)}, 3000);
