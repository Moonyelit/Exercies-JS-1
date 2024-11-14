// //EXO 1
// let message = "Hello, world!";
// alert(message);

// //EXO 2
// let nom = "Doe";
// let prenom = "John";
// let ville = "New-York";
// alert("Nom : " + nom + "\nPrénom : " + prenom + "\nVille : " + ville);

// //EXO 3
// let monprenom = prompt("Saisir votre prénom :");
// alert("Je m'appelle " + monprenom);

// //EXO 4
// let nom2 = prompt("Entrez votre nom :");
// let prenom2 = prompt("Entrez votre prénom :");
// let ville2 = prompt("Entrez votre ville :");
// alert("Nom : " + nom2 + "\nPrénom : " + prenom2 + "\nVille : " + ville2);

//EXO 5
let num1 = prompt("Entrez un numéro à virgule");
let num2 = prompt("Entrez un deuxième numéro à virgule");

num1 = parseInt(num1);
num1 = Math.round(num1);

let result = num1 *(num2); 
alert("Le résultat est : " + result);
