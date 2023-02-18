// Comment créer un tableau:
var x = 1;
var y = 99;
var z = 77;
var w = 14;

// vecteur
var nombres = [1,99,77,14,7,8,96,6,2,4,62,4,3,48,23,412,63,962,5265,123,5623]; 
// boucle
// for : contient 3 partie => intitilisation du compteur ; condition d'arret ; incrementation/descrementation du compteur
// 90,91,92,93,94,95

for(var i = 90; i < 96; i++){
    console.log(i)
}

// compteur => 0,1,2,3,4.... ... 21
// compteur => 21;
for(var compteur = 0 ; compteur < nombres.length; compteur++){
    console.log(nombres[compteur])
}


// 1
// 99
// 77
// 14
// 7
// 8
console.log(nombres[0]);
console.log(nombres[1]);
console.log(nombres[2]);
console.log(nombres[3]);
console.log(nombres[4])
console.log(nombres[5])