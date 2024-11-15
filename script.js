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

// //EXO 5
// let num1 = prompt("Entrez un numéro à virgule");
// let num2 = prompt("Entrez un deuxième numéro à virgule");

// num1 = parseInt(num1);
// num1 = Math.round(num1);

// let result = num1 *(num2);
// alert("Le résultat est : " + result);

// // //EXO 6
// let num1 = prompt("Entrez un nombre ");
// let num2 = prompt("Entrez un deuxième nombre");

// export function exo6(firstNumber, secondNumber) {
//     let operation = firstNumber % secondNumber;
//     alert("Le reste de la division est : " + operation);
//   }

// //EXO 7
// let pointure = prompt("Entrez votre pointure : ");
// let année = prompt("Donnez votre année de naissance :");

// function calcul(pointure,année)  {
// ((((pointure*2)+5)*50)-année)+1766

// return ((((pointure*2)+5)*50)-année)+1766;
// } ;

// alert("Le resultat est " + calcul(pointure,année));

// //EXO 8
// let age = prompt("Entrez votre âge : ");

// if(age >= 18){
//     alert("Vous êtes majeur")
// } else {
//     alert("Vous êtes mineur")
// }

// //EXO 9
// const num = parseInt(prompt("Entrez un nombre"));
// let tablemulti = []

// for(let i = 0; i <=10; i += 1){

//     const result = i * num;

// tablemulti.push(`${num} * ${i} = ${result}`);

// }
// alert("Voici la table de multiplication de votre nombre :  " + tablemulti.join("\n")  );

// EXO 10
const motUser = prompt("Veuillez donner un mot");

for(let i=0; motUser.length; i += 1){
    const motLong = (motUser[i] + "\n")}

alert ("Voici votre mot en longueur " + motLong)


// //EXO 11
// const nombresaisi = prompt("Saisir un nombre entre 1 et 10")
// if(nombresaisi <5){
//     alert("Votre nombre saisi est inférieur à 5")
// } else if (nombresaisi==5) {
//     alert("Votre nombre est égal à 5")
// } else if (nombresaisi > 5){
//     alert("Votre nombre saisi est supérieur à 5")
// }

// //EXO 12
// const nombrecarre = parseInt(prompt("Saisir un nombre"));

// function carré(nombrecarre){
//     let calculcarre = nombrecarre**2;

//     return calculcarre;
// }

//     alert("La carré de votre nombre est " + carré(nombrecarre));