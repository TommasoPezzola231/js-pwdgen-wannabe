let nome = prompt("Come ti chiami?");

let cognome = prompt("Qual'è il tuo cognome?");

let colore = prompt("Qual'è il tuo colore preferito?");

let annoCorrente = 2023;

let password = `La tua Password è: ${nome}-${cognome}-${colore}-${annoCorrente}`;

document.getElementById("password").innerHTML = password;