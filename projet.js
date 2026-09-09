var prompt=require('prompt-sync')();
 let choix="";

 while(choix !== "0"){
console.log("===========================================");
console.log("             RAILWAY MANAGER               ");
console.log("===========================================");

console.log("1. Afficher les trajets: ");
console.log("2. Acheter un ticket: ")
console.log("3. Afficher les tickets: ")
console.log("4. Annuler un ticket: ")
console.log("5. Rechercher un ticket: ")
console.log("6. Filtrer les trajets: ")
console.log("7. Trier les trajets:")
console.log("0. Quitter: ")

choix= prompt("choisi entre (0 et 7): ")



switch(choix){
    case "1" :
        console.log("Afficher les trajets: ");
        break;
    case "2" :
        console.log("Acheter un ticket: ");
        break;
    case "3" :
        console.log("Afficher les tickets: ");
        break;
    case "4" :
        console.log("Annuler un ticket: ");
        break;
    case "5" :
        console.log("Rechercher un ticket: ");
        break;
    case "6" :
        console.log("Filtrer les trajets: ")
        break;
    case "7" :
        console.log("Trier les trajets: ")
        break;
    case "0" :
        console.log("Quitter: ");
        break;
    default:
        console.log("Choix invalide")
    }   }